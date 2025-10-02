import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const PropGoDetails = () => {
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
      background: 'linear-gradient(135deg, #6366f1, #818cf8)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 32px',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
      color: 'white'
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
      marginBottom: '24px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto 60px',
      lineHeight: '1.6',
      textAlign: 'center'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
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
      background: 'linear-gradient(135deg, #6366f1, #818cf8)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '24px',
      color: 'white'
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
    statsSection: {
      background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      padding: '80px 0',
      color: 'white'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '40px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '1rem',
      opacity: 0.9
    },
    problemSolutionSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '80px 0'
    },
    problemSolutionGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: '40px'
    },
    problemCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
    },
    cardTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px'
    },
    bulletList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    bulletItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px',
      color: '#64748b',
      lineHeight: '1.6'
    },
    bulletIcon: {
      color: '#6366f1',
      fontSize: '1.25rem',
      flexShrink: 0,
      marginTop: '2px'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      padding: '80px 0',
      color: 'white',
      textAlign: 'center'
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
      opacity: 0.9
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #6366f1, #818cf8)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    }
  };

  const features = [
    {
      icon: '🔒',
      title: 'Verified Listings',
      description: 'All property listings undergo a strict verification process to ensure authenticity and prevent fraud.'
    },
    {
      icon: '💬',
      title: 'Direct Communication',
      description: 'Secure channels for direct communication between property owners and verified agents.'
    },
    {
      icon: '📊',
      title: 'Market Analytics',
      description: 'Access real-time market data and analytics to make informed decisions.'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Verified Properties' },
    { number: '1,200+', label: 'Active Agents' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const problems = [
    'Fake and outdated property listings',
    'No direct communication channels',
    'Lack of proper verification systems',
    'Complex and lengthy processes'
  ];

  const solutions = [
    'Strict verification process for all listings',
    'Secure communication platform',
    'Real-time property status updates',
    'Streamlined transaction process'
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
         
          
          <div style={styles.heroIcon}>
            🏠
          </div>
          
          <h1 style={styles.heroTitle}>PropGo Platform</h1>
          <p style={styles.heroSubtitle}>
            Revolutionizing real estate transactions by connecting property owners with verified agents 
            through a secure and efficient digital platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Key Features</h2>
          <p style={styles.sectionSubtitle}>
            Our platform offers a comprehensive suite of features designed to make real estate 
            transactions secure, efficient, and transparent.
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Problem & Solution Section */}
      <section style={styles.problemSolutionSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Problems & Solutions</h2>
          <p style={styles.sectionSubtitle}>
            We've identified key challenges in the real estate market and developed 
            innovative solutions to address them.
          </p>
          
          <div style={styles.problemSolutionGrid}>
            <div style={styles.problemCard}>
              <h3 style={styles.cardTitle}>Current Challenges</h3>
              <ul style={styles.bulletList}>
                {problems.map((problem, index) => (
                  <li key={index} style={styles.bulletItem}>
                    <span style={styles.bulletIcon}>⚠️</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={styles.problemCard}>
              <h3 style={styles.cardTitle}>Our Solutions</h3>
              <ul style={styles.bulletList}>
                {solutions.map((solution, index) => (
                  <li key={index} style={styles.bulletItem}>
                    <span style={styles.bulletIcon}>✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Real Estate Business?</h2>
          <p style={styles.ctaDescription}>
            Join thousands of satisfied property owners and agents who are already 
            benefiting from our platform.
          </p>
          
          <a 
            href="https://propgo-platform.trinix.com/signup" 
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Started →
          </a>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default PropGoDetails;