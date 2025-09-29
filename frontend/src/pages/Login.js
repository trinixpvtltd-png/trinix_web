import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    loginCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '48px',
      width: '100%',
      maxWidth: '480px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative'
    },
    welcomeSection: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    welcomeTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px'
    },
    welcomeText: {
      fontSize: '1.125rem',
      color: '#64748b',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    formContainer: {
      marginTop: '32px'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '0.9375rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    inputContainer: {
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      fontSize: '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      transition: 'all 0.2s ease',
      fontFamily: "'Inter', system-ui, sans-serif",
      outline: 'none',
      boxSizing: 'border-box'
    },
    inputError: {
      borderColor: '#ef4444',
      boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.1)'
    },
    passwordToggle: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#64748b',
      cursor: 'pointer',
      fontSize: '1.125rem',
      padding: '4px',
      borderRadius: '4px',
      transition: 'all 0.2s ease'
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '32px'
    },
    checkboxGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    checkbox: {
      width: '18px',
      height: '18px',
      accentColor: '#6366f1'
    },
    checkboxLabel: {
      fontSize: '0.9375rem',
      color: '#374151'
    },
    forgotPassword: {
      color: '#6366f1',
      textDecoration: 'none',
      fontSize: '0.9375rem',
      fontWeight: '500',
      transition: 'color 0.2s ease'
    },
    loginButton: {
      width: '100%',
      padding: '16px',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: '24px'
    },
    loginButtonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    loadingSpinner: {
      width: '20px',
      height: '20px',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '8px'
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '24px 0',
      color: '#64748b',
      fontSize: '0.875rem'
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: '#e2e8f0'
    },
    dividerText: {
      padding: '0 16px',
      background: 'white'
    },
    socialButtons: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    socialButton: {
      flex: 1,
      padding: '12px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      background: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '0.9375rem',
      fontWeight: '500',
      color: '#374151'
    },
    registerLink: {
      textAlign: 'center',
      fontSize: '0.9375rem',
      color: '#64748b'
    },
    registerLinkText: {
      color: '#6366f1',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.2s ease'
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
    }, 2000);
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .login-input:focus {
        border-color: #6366f1 !important;
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1) !important;
      }
      
      .login-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
      }
      
      .password-toggle:hover {
        background-color: #f1f5f9 !important;
        color: #6366f1 !important;
      }
      
      .social-button:hover {
        border-color: #6366f1;
        background: #f8fafc;
      }
      
      .forgot-password:hover {
        color: #4f46e5 !important;
      }
      
      .register-link:hover {
        color: #4f46e5 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginCard}>
        {/* Welcome Section (No Logo) */}
        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeTitle}>Welcome Back</h1>
          <p style={styles.welcomeText}>Log In to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="login-input"
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={styles.inputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="login-input"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {}),
                  paddingRight: '50px'
                }}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                style={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🔓' : '🔒'}
              </button>
            </div>
            {errors.password && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          <div style={styles.checkboxContainer}>
            <div style={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                style={styles.checkbox}
              />
              <label htmlFor="rememberMe" style={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" style={styles.forgotPassword} className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="login-button"
            style={{
              ...styles.loginButton,
              ...(isLoading ? styles.loginButtonDisabled : {})
            }}
          >
            {isLoading && <div style={styles.loadingSpinner}></div>}
            {isLoading ? 'Signing In...' : 'Log In'}
          </button>
        </form>

        {/* Social Login */}
        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>Or continue with</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.socialButtons}>
          <button style={styles.socialButton} className="social-button">
            <span>🔍</span> Google
          </button>
          <button style={styles.socialButton} className="social-button">
            <span>💼</span> LinkedIn
          </button>
        </div>

        {/* Register Link */}
        <div style={styles.registerLink}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.registerLinkText} className="register-link">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
<<<<<<< HEAD



=======
>>>>>>> 40389959 (ui changed)
