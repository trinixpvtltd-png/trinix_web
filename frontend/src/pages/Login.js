import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      // Placeholder: integrate backend auth later
      await new Promise((res) => setTimeout(res, 600));
      alert('Logged in (demo)');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)',
      paddingTop: '80px'
    },
    card: {
      width: '100%',
      maxWidth: '420px',
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
      padding: '28px'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280',
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#374151',
      marginBottom: '6px'
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      borderRadius: '10px',
      border: '1px solid #e5e7eb',
      outline: 'none',
      fontSize: '0.9375rem',
      color: '#111827',
      marginBottom: '14px'
    },
    button: {
      width: '100%',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '10px',
      border: 'none',
      fontWeight: 600,
      cursor: 'pointer'
    },
    error: {
      color: '#b91c1c',
      background: '#fee2e2',
      border: '1px solid #fecaca',
      padding: '8px 12px',
      borderRadius: '8px',
      marginBottom: '12px',
      fontSize: '0.875rem'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <p style={styles.subtitle}>Access your Trinix account</p>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={styles.input}
            required
          />

          <label style={styles.label} htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



