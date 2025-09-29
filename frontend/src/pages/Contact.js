import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '120px 0 80px',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    title: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      marginBottom: '24px'
    },
    highlight: {
      background: 'linear-gradient(135deg, #00d9ff, #0099cc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      maxWidth: '768px',
      margin: '0 auto',
      lineHeight: '1.6',
      opacity: 0.9
    },
    section: {
      padding: '80px 0'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '80px',
      alignItems: 'start'
    },
    contactInfo: {
      color: 'white'
    },
    contactItem: {
      marginBottom: '40px',
      padding: '32px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    contactIcon: {
      fontSize: '2rem',
      marginBottom: '16px',
      display: 'block'
    },
    contactTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '12px'
    },
    contactDetails: {
      opacity: 0.8,
      lineHeight: '1.6'
    },
    contactForm: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '48px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '32px',
      color: 'white'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: 'white'
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'border-color 0.2s ease',
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    },
    textarea: {
      width: '100%',
      padding: '16px 20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.2s ease',
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Get In <span style={styles.highlight}>Touch</span>
          </h1>
          <p style={styles.subtitle}>
            Ready to transform your business? Let's start a conversation about your next project 
            and explore how we can help you achieve your technological goals.
          </p>
        </div>
        
        {/* Contact Content */}
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <h3 style={styles.contactTitle}>Headquarters</h3>
                <div style={styles.contactDetails}>
                  123 Tech Plaza, Innovation District<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🏢</span>
                <h3 style={styles.contactTitle}>Regional Office</h3>
                <div style={styles.contactDetails}>
                  456 Innovation Hub<br />
                  Tech City, TC 12345<br />
                  International
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <h3 style={styles.contactTitle}>Phone & Support</h3>
                <div style={styles.contactDetails}>
                  Main: +1 (555) 123-4567<br />
                  Support: +1 (555) 123-4568<br />
                  Available 24/7
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>✉️</span>
                <h3 style={styles.contactTitle}>Email</h3>
                <div style={styles.contactDetails}>
                  General: hello@trinix.com<br />
                  Sales: sales@trinix.com<br />
                  Support: support@trinix.com
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={styles.contactForm}>
              <h3 style={styles.formTitle}>Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name *</label>
                  <input 
                    type="text" 
                    style={styles.input} 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                    placeholder="Your full name"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input 
                    type="email" 
                    style={styles.input} 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                    placeholder="your.email@company.com"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Company</label>
                  <input 
                    type="text" 
                    style={styles.input} 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea 
                    style={styles.textarea} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required 
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button 
                  type="submit" 
                  style={styles.submitButton}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Send Message
                </button>
              </form>
              <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginTop: '16px', textAlign: 'center'}}>
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
