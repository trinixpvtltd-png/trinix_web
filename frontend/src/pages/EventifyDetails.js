import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
const EventifyDetails = () => {
  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      background: '#ffffff'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '120px 0 80px',
      textAlign: 'center',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    backButton: {
      background: 'white',
      color: '#6366f1',
      padding: '12px 20px',
      borderRadius: '8px',
      border: '2px solid #6366f1',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '40px'
    },
    heroIcon: {
      width: '120px',
      height: '120px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 32px',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    section: {
      padding: '80px 0'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '60px',
      textAlign: 'center'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: '32px',
      marginBottom: '80px'
    },
    featureCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '24px'
    },
    featureTitle: {
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '16px'
    },
    featureDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem'
    },
    experienceSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '80px 0',
      borderRadius: '0'
    },
    experienceContainer: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '80px',
      alignItems: 'center'
    },
    experienceContent: {
      maxWidth: '500px'
    },
    experienceTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    experienceDescription: {
      fontSize: '1.125rem',
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '32px'
    },
    statsContainer: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    statIcon: {
      color: '#10b981',
      fontSize: '1.25rem'
    },
    statText: {
      color: '#64748b',
      fontSize: '1rem',
      fontWeight: '500'
    },
    experienceImage: {
      width: '100%',
      height: '400px',
      borderRadius: '20px',
      objectFit: 'cover',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #374151 100%)',
      padding: '80px 0',
      textAlign: 'center',
      color: 'white'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '24px'
    },
    ctaDescription: {
      fontSize: '1.25rem',
      maxWidth: '600px',
      margin: '0 auto 40px',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    // Footer Styles
    footer: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: '#e2e8f0',
      padding: '80px 0 40px'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
      gap: '40px',
      marginBottom: '60px'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '20px'
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9375rem',
      transition: 'color 0.2s ease'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '32px 0',
      textAlign: 'center'
    },
    footerBottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px'
    },
    socialLink: {
      color: '#94a3b8',
      fontSize: '1.25rem',
      transition: 'color 0.2s ease'
    },
    copyrightText: {
      color: '#94a3b8',
      fontSize: '0.875rem'
    }
  };

  const features = [
    {
      icon: '📍',
      title: 'Discover events nearby',
      description: 'Find the best events, clubs, and venues in your area with our intelligent discovery system.'
    },
    {
      icon: '📅',
      title: 'Easy booking and RSVP',
      description: 'Simple and intuitive booking process with instant confirmation and RSVP management.'
    },
    {
      icon: '👥',
      title: 'Integration with clubs & venues',
      description: 'Seamless integration with partner venues and clubs for real-time availability and bookings.'
    },
    {
      icon: '⭐',
      title: 'Simple user-friendly interface',
      description: 'Clean, modern interface designed for the best user experience across all devices.'
    }
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
        
          
          <div style={styles.heroIcon}>
            📅
          </div>
          
          <h1 style={styles.heroTitle}>Eventify</h1>
          <p style={styles.heroSubtitle}>
            Eventify is our event discovery and booking platform, designed to connect users 
            with clubs, house parties, and venues in a seamless way.
          </p>
        </div>
      </section>
    
     

      {/* Coming Soon Banner Component */}
      <ComingSoon 
        title="🎉 Eventify COMING SOON..!"
        description="Discover nearby events, book effortlessly, and connect with clubs and venues. A smarter, seamless event experience is on the way."
      />
      <Footer />
    </div>
  );
};

export default EventifyDetails;