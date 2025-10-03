import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Normalize base URL and ensure /api suffix when missing
  const RAW_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const API_BASE_URL = (() => {
    const trimmed = RAW_BASE.replace(/\/$/, '');
    return /\/api(\b|\/)/.test(trimmed) ? trimmed : `${trimmed}/api`;
  })();
  const http = axios.create({ baseURL: API_BASE_URL, headers: { Accept: 'application/json' } });
  const getAuthConfig = (overrideToken) => {
    const tk = overrideToken || localStorage.getItem('token');
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(tk ? { Authorization: `Bearer ${tk}` } : {})
      }
    };
  };

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        try {
          // Verify token is still valid by hitting the users dashboard endpoint
          await http.get('/users/dashboard', getAuthConfig(storedToken));
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        } catch (error) {
          // Fallback to legacy /auth/me
          try {
            await http.get('/auth/me', getAuthConfig(storedToken));
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
          } catch (_) {
            // Token is invalid, clear storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setToken(null);
            setUser(null);
          }
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      let data;
      try {
        ({ data } = await http.post('/users/login', credentials, getAuthConfig()));
      } catch (e) {
        if (e?.response?.status === 404) {
          const resp = await http.post('/auth/login', credentials, getAuthConfig());
          data = resp?.data;
        } else {
          throw e;
        }
      }
      if (data?.token && data?.user) {
        const { token: newToken, user: userData } = data;
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
        return { success: true, user: userData };
      }
      throw new Error('Invalid response from server');
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error?.response?.data?.message || error.message || 'Login failed. Please try again.' };
    }
  };

  const register = async (userData) => {
    try {
      const payload = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        confirm_password: userData.confirmPassword,
        phone: userData.phone || '',
        company: userData.company || '',
        role: 'user'
      };
      let data;
      try {
        ({ data } = await http.post('/users/signup', payload, getAuthConfig()));
      } catch (e) {
        if (e?.response?.status === 404) {
          const resp = await http.post('/auth/register', payload, getAuthConfig());
          data = resp?.data;
        } else {
          throw e;
        }
      }
      const envelope = data || {};
      const authData = envelope.data || envelope; // support both {data:{...}} and flat
      if ((envelope.success && authData?.token && authData?.user) || (authData?.token && authData?.user)) {
        const { token: newToken, user: newUser } = authData;
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
        return { success: true, user: newUser };
      }
      throw new Error(envelope.message || 'Registration failed');
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error?.response?.data?.message || error.message || 'Registration failed. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      // Best-effort call to backend (will succeed only if token present)
      await http.post('/users/logout', {}, getAuthConfig());
    } catch (_) {
      // ignore errors
    }
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Clear state
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!(token && user);
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
