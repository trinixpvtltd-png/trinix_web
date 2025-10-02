import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    registerCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '48px',
      width: '100%',
      maxWidth: '520px',
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
    formRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px'
    },
    formGroup: {
      marginBottom: '24px',
      flex: 1
    },
    label: {
      display: 'block',
      fontSize: '0.9375rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    required: {
      color: '#ef4444'
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
    passwordStrength: {
      marginTop: '8px',
      fontSize: '0.8125rem'
    },
    strengthBar: {
      height: '4px',
      borderRadius: '2px',
      backgroundColor: '#e2e8f0',
      marginTop: '4px',
      overflow: 'hidden'
    },
    strengthFill: {
      height: '100%',
      transition: 'all 0.3s ease',
      borderRadius: '2px'
    },
    checkboxContainer: {
      marginBottom: '24px'
    },
    checkboxGroup: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px'
    },
    checkbox: {
      width: '18px',
      height: '18px',
      accentColor: '#6366f1',
      marginTop: '2px'
    },
    checkboxLabel: {
      fontSize: '0.9375rem',
      color: '#374151',
      lineHeight: '1.5'
    },
    termsLink: {
      color: '#6366f1',
      textDecoration: 'none'
    },
    registerButton: {
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
    registerButtonDisabled: {
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
    loginLink: {
      textAlign: 'center',
      fontSize: '0.9375rem',
      color: '#64748b'
    },
    loginLinkText: {
      color: '#6366f1',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.2s ease'
    },
    benefitsList: {
      background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
      padding: '20px',
      borderRadius: '16px',
      marginBottom: '24px',
      border: '1px solid #e2e8f0'
    },
    benefitsTitle: {
      fontSize: '0.9375rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    benefit: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    let color = '#ef4444';
    let text = 'Weak';
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    if (strength >= 3) {
      color = '#10b981';
      text = 'Strong';
    } else if (strength >= 2) {
      color = '#f59e0b';
      text = 'Medium';
    }
    
    return { strength: (strength / 4) * 100, color, text };
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
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms of Service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      const result = await register(formData);
      
      if (result.success) {
        alert('Registration successful! Welcome to Trinix!');
        navigate('/dashboard');
      } else {
        setErrors({
          submit: result.error || 'Registration failed. Please try again.'
        });
      }
    } catch (error) {
      setErrors({
        submit: 'Registration failed. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .register-input:focus {
        border-color: #6366f1 !important;
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1) !important;
      }
      
      .register-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
      }
      
      .password-toggle:hover {
        background-color: #f1f5f9 !important;
        color: #6366f1 !important;
      }
      
      .terms-link:hover {
        color: #4f46e5 !important;
        text-decoration: underline;
      }
      
      .login-link:hover {
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
      <div style={styles.registerCard}>
        {/* Welcome Section (No Logo) */}
        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeTitle}>Join Trinix</h1>
          <p style={styles.welcomeText}>Create your professional account</p>
        </div>

        {/* Benefits */}
        <div style={styles.benefitsList}>
          <div style={styles.benefitsTitle}>
            🚀 What you'll get:
          </div>
          <div style={styles.benefit}>
            <span>🛡️</span>
            <span>Access to exclusive resources and tools</span>
          </div>
          <div style={styles.benefit}>
            <span>💎</span>
            <span>Priority support from our expert team</span>
          </div>
          <div style={styles.benefit}>
            <span>📊</span>
            <span>Regular updates on industry insights</span>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="firstName" style={styles.label}>
                First Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="register-input"
                style={{
                  ...styles.input,
                  ...(errors.firstName ? styles.inputError : {})
                }}
                placeholder="John"
              />
              {errors.firstName && (
                <div style={styles.errorMessage}>
                  <span>⚠️</span>
                  <span>{errors.firstName}</span>
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="lastName" style={styles.label}>
                Last Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="register-input"
                style={{
                  ...styles.input,
                  ...(errors.lastName ? styles.inputError : {})
                }}
                placeholder="Doe"
              />
              {errors.lastName && (
                <div style={styles.errorMessage}>
                  <span>⚠️</span>
                  <span>{errors.lastName}</span>
                </div>
              )}
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address <span style={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="register-input"
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="john.doe@company.com"
            />
            {errors.email && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="phone" style={styles.label}>
                📞 Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="register-input"
                style={styles.input}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="company" style={styles.label}>
                🏢 Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="register-input"
                style={styles.input}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              🔒 Password <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="register-input"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {}),
                  paddingRight: '50px'
                }}
                placeholder="Create a strong password"
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
            {formData.password && (
              <div style={styles.passwordStrength}>
                <div style={styles.strengthBar}>
                  <div style={{
                    ...styles.strengthFill,
                    width: `${passwordStrength.strength}%`,
                    backgroundColor: passwordStrength.color
                  }}></div>
                </div>
                <span style={{color: passwordStrength.color, fontWeight: '500'}}>
                  🛡️ Password strength: {passwordStrength.text}
                </span>
              </div>
            )}
            {errors.password && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              🔐 Confirm Password <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputContainer}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="register-input"
                style={{
                  ...styles.input,
                  ...(errors.confirmPassword ? styles.inputError : {}),
                  paddingRight: '50px'
                }}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="password-toggle"
                style={styles.passwordToggle}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '🔓' : '🔒'}
              </button>
            </div>
            {errors.confirmPassword && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.confirmPassword}</span>
              </div>
            )}
          </div>

          <div style={styles.checkboxContainer}>
            <div style={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                style={styles.checkbox}
              />
              <label htmlFor="agreeTerms" style={styles.checkboxLabel}>
                I agree to the{' '}
                <Link to="/terms" style={styles.termsLink} className="terms-link">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" style={styles.termsLink} className="terms-link">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeTerms && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.agreeTerms}</span>
              </div>
            )}
            {errors.submit && (
              <div style={styles.errorMessage}>
                <span>⚠️</span>
                <span>{errors.submit}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="register-button"
            style={{
              ...styles.registerButton,
              ...(isLoading ? styles.registerButtonDisabled : {})
            }}
          >
            {isLoading && <div style={styles.loadingSpinner}></div>}
            {isLoading ? 'Creating Account...' : '🚀 Create Account'}
          </button>
        </form>

        {/* Login Link */}
        <div style={styles.loginLink}>
          Already have an account?{' '}
          <Link to="/login" style={styles.loginLinkText} className="login-link">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
