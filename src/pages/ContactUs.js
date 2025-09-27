import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      paddingTop: '100px',
      padding: '100px 20px 50px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroSection: {
      textAlign: 'center',
      padding: '80px 0',
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      marginBottom: '50px',
      borderRadius: '15px'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto'
    },
    contactContainer: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '50px',
      margin: '50px 0'
    },
    contactInfo: {
      background: '#f8f9fa',
      padding: '40px',
      borderRadius: '15px'
    },
    contactTitle: {
      fontSize: '2rem',
      color: '#0078d4',
      marginBottom: '30px',
      fontWeight: '600'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      fontSize: '1.1rem'
    },
    contactIcon: {
      fontSize: '1.5rem',
      marginRight: '15px',
      color: '#0078d4'
    },
    contactText: {
      color: '#555'
    },
    formContainer: {
      background: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    formTitle: {
      fontSize: '2rem',
      color: '#0078d4',
      marginBottom: '30px',
      fontWeight: '600'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#333',
      fontWeight: '500',
      fontSize: '1rem'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      fontFamily: 'Arial, sans-serif'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      fontFamily: 'Arial, sans-serif',
      resize: 'vertical',
      minHeight: '120px'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '25px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      width: '100%'
    },
    mapSection: {
      background: '#f8f9fa',
      padding: '50px 40px',
      borderRadius: '15px',
      margin: '50px 0',
      textAlign: 'center'
    },
    mapTitle: {
      fontSize: '2.5rem',
      color: '#0078d4',
      marginBottom: '20px'
    },
    mapPlaceholder: {
      width: '100%',
      height: '300px',
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroSubtitle}>
          Ready to transform your business? Let's start a conversation about your next project
        </p>
      </section>

      <div style={styles.contactContainer}>
        <div style={styles.contactInfo} className="slide-right">
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📍</span>
            <div style={styles.contactText}>
              <strong>Address:</strong><br />
              123 Tech Plaza, Innovation District<br />
              Silicon Valley, CA 94025
            </div>
          </div>

          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📞</span>
            <div style={styles.contactText}>
              <strong>Phone:</strong><br />
              +1 (555) 123-4567
            </div>
          </div>

          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>✉️</span>
            <div style={styles.contactText}>
              <strong>Email:</strong><br />
              hello@trinix.com
            </div>
          </div>

          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🕒</span>
            <div style={styles.contactText}>
              <strong>Business Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>

        <div style={styles.formContainer} className="slide-right">
          <h2 style={styles.formTitle}>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#0078d4'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#0078d4'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="company" style={styles.label}>Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#0078d4'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={styles.textarea}
                onFocus={(e) => e.target.style.borderColor = '#0078d4'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Tell us about your project..."
              />
            </div>

            <button 
              type="submit" 
              style={styles.submitButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(0, 120, 212, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <section style={styles.mapSection} className="slide-up">
        <h2 style={styles.mapTitle}>Find Us</h2>
        <div style={styles.mapPlaceholder}>
          🗺️ Interactive Map Coming Soon
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
