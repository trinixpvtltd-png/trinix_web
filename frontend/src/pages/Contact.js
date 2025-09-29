import React, { useState } from 'react';

// --- Theme and Utility Configuration ---
// Note: In a real-world app, these would be external theme files or utilities.
const lightThemeColors = {
  background: '#f8f8f8', // Very light gray/off-white
  surface: '#ffffff', // Pure white for cards/forms
  textPrimary: '#1f2937', // Dark gray for main text
  textSecondary: '#6b7280', // Medium gray for subtitles/details
  border: '#e5e7eb', // Light gray border
  primaryAccent: '#3b82f6', // A vibrant blue for main actions/highlights
  primaryAccentHover: '#2563eb', // Darker blue for hover
  shadow: 'rgba(0, 0, 0, 0.05)',
};

const breakpoints = {
  tablet: '768px',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call (e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }))
    console.log('Form Submitted:', formData);
    alert('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  // Inline styles object adapted for a Light Theme
  // Note: For dynamic properties (like window.innerWidth), using useEffect for a proper resize listener
  // and state would be better, but we'll stick to the original direct comparison for simplicity.
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const styles = {
    pageContainer: {
      backgroundColor: lightThemeColors.background,
      minHeight: '100vh',
      paddingTop: '64px', // Assuming a fixed header
    },
    heroSection: {
      backgroundColor: lightThemeColors.surface,
      color: lightThemeColors.textPrimary,
      padding: isMobile ? '80px 0 60px' : '100px 0 80px',
      textAlign: 'center',
      borderBottom: `1px solid ${lightThemeColors.border}`,
      boxShadow: `0 2px 4px ${lightThemeColors.shadow}`,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: '800',
      marginBottom: '16px'
    },
    highlight: {
      // Light theme uses the primary accent for a cleaner look
      color: lightThemeColors.primaryAccent,
    },
    subtitle: {
      fontSize: '1.15rem',
      maxWidth: '768px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: lightThemeColors.textSecondary,
      marginBottom: isMobile ? '40px' : '60px',
    },
    section: {
        // This is where the main content starts, using a light background for contrast with the hero
        padding: '80px 0',
        backgroundColor: lightThemeColors.background,
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1.8fr', // Slightly more space for the form
      gap: isMobile ? '40px' : '80px',
      alignItems: 'start',
      padding: '0 24px',
      maxWidth: '1200px',
      margin: '0 auto',
      
    },
    contactInfo: {
      color: lightThemeColors.textPrimary,
    },
    contactItem: {
      marginBottom: '30px',
      padding: '24px',
      backgroundColor: lightThemeColors.surface,
      borderRadius: '12px',
      border: `1px solid ${lightThemeColors.border}`,
      boxShadow: `0 1px 3px ${lightThemeColors.shadow}`,
    },
    contactIcon: {
      fontSize: '1.8rem',
      marginBottom: '10px',
      display: 'block',
    },
    contactTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '8px',
      color: lightThemeColors.textPrimary,
    },
    contactDetails: {
      opacity: 0.9,
      lineHeight: '1.5',
      fontSize: '0.95rem',
      color: lightThemeColors.textSecondary,
    },
    contactForm: {
      backgroundColor: lightThemeColors.surface,
      padding: isMobile ? '30px' : '48px',
      borderRadius: '16px',
      border: `1px solid ${lightThemeColors.border}`,
      boxShadow: `0 4px 12px ${lightThemeColors.shadow}`,
    },
    formTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '700',
      marginBottom: '32px',
      color: lightThemeColors.textPrimary,
      textAlign: 'left',
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: '600',
      color: lightThemeColors.textPrimary,
      fontSize: '0.9rem',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: `1px solid ${lightThemeColors.border}`,
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      backgroundColor: lightThemeColors.surface,
      color: lightThemeColors.textPrimary,
      // Focus style (would need a class in a real scenario, but simulated with a pseudo-selector concept here)
      // '&:focus': { borderColor: lightThemeColors.primaryAccent, boxShadow: `0 0 0 3px ${lightThemeColors.primaryAccent}40` }
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: `1px solid ${lightThemeColors.border}`,
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      backgroundColor: lightThemeColors.surface,
      color: lightThemeColors.textPrimary,
    },
    submitButton: {
      backgroundColor: lightThemeColors.primaryAccent,
      color: lightThemeColors.surface,
      padding: '14px 28px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.2s ease',
      boxShadow: `0 4px 6px ${lightThemeColors.primaryAccent.replace(')', ', 0.2)')}`,
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Let's <span style={styles.highlight}>Connect</span>
          </h1>
          <p style={styles.subtitle}>
            Ready to transform your business? Let's start a conversation about your next project
            and explore how our expertise can help you achieve your technological goals.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* Contact Content Section */}
      <section style={styles.section}>
        <div style={styles.contactGrid}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <h3 style={styles.contactTitle}>Our Headquarters</h3>
              <div style={styles.contactDetails}>
                123 Tech Plaza, Innovation District<br />
                Silicon Valley, CA 94025<br />
                United States
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <h3 style={styles.contactTitle}>Sales & Support</h3>
              <div style={styles.contactDetails}>
                Sales: **+1 (555) 123-4567** (M-F, 9am-5pm EST)<br />
                Support: **+1 (555) 123-4568** (Available 24/7)
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <h3 style={styles.contactTitle}>Email</h3>
              <div style={styles.contactDetails}>
                General Inquiries: <a href="mailto:hello@trinix.com" style={{color: lightThemeColors.primaryAccent, textDecoration: 'none'}}>hello@trinix.com</a><br />
                Technical Support: <a href="mailto:support@trinix.com" style={{color: lightThemeColors.primaryAccent, textDecoration: 'none'}}>support@trinix.com</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.contactForm}>
            <h3 style={styles.formTitle}>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  style={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="company">Company (Optional)</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  style={styles.input}
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  style={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              <button
                type="submit"
                style={styles.submitButton}
                // Simplified hover using a temporary variable/object key for demonstrative purposes
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = lightThemeColors.primaryAccentHover;
                    e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = lightThemeColors.primaryAccent;
                    e.target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
            <p style={{ color: lightThemeColors.textSecondary, fontSize: '0.8rem', marginTop: '16px', textAlign: 'center' }}>
              We aim to respond to all inquiries within **24 hours**.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;