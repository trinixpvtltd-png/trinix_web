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
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
          }
          .animated-card {
            animation: fadeInUp 0.7s ease both;
          }
          .animated-scale {
            animation: scaleIn 0.6s ease both;
          }
          .hover-lift {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .hover-lift:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 24px rgba(0,0,0,0.12);
          }
        `}
      </style>
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


      {/* Key Features Grid */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} className="animated-scale">Key Capabilities</h2>
          <p style={styles.sectionSubtitle}>Distributed into focused, easy-to-digest cards with subtle animations.</p>

          <div style={styles.featuresGrid}>
            {
              [
                {
                  icon: '🔐',
                  title: 'Dealer Verification System',
                  description: 'Admin-verification flow ensures only credible, trusted dealers gain access.'
                },
                {
                  icon: '🏡',
                  title: 'Verified Property Listings',
                  description: 'Each property is reviewed and approved by a verifier before it goes live.'
                },
                {
                  icon: '🤝',
                  title: 'Dealer Collaboration',
                  description: 'Explore, share, and partner on genuine listings within a verified network.'
                },
                {
                  icon: '🛠️',
                  title: 'Admin Control Panel',
                  description: 'Approve dealers, manage verification statuses, and oversee the entire system.'
                },
                {
                  icon: '🔍',
                  title: 'Smart Property Search',
                  description: 'Filter by location, price, and property type to find the right deals quickly.'
                },
                {
                  icon: '📱',
                  title: 'Modern Dealer Dashboard',
                  description: 'Clean, intuitive interface to manage listings and track verification status.'
                }
              ].map((f) => (
                <div
                  key={f.title}
                  style={styles.featureCard}
                  className={`animated-card hover-lift`}
                >
                  <div style={styles.featureIcon}>{f.icon}</div>
                  <div style={styles.featureTitle}>{f.title}</div>
                  <div style={styles.featureDescription}>{f.description}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Distributed Detail Sections */}
      <section style={styles.problemSolutionSection}>
        <div style={styles.container}>
          <div style={styles.problemSolutionGrid}>
            <div style={styles.problemCard} className="animated-card hover-lift">
              <h3 style={styles.cardTitle}>Dealer Verification System</h3>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Multi-step admin approval flow for credibility.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Role-based access after verification.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Status tracking from submission to approval.</li>
              </ul>
            </div>
            <div style={styles.problemCard} className="animated-card hover-lift">
              <h3 style={styles.cardTitle}>Verified Property Listings</h3>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Dedicated property verifier workflow.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Only approved listings are visible to dealers.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Real-time updates on verification status.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.problemSolutionGrid}>
            <div style={styles.problemCard} className="animated-card hover-lift">
              <h3 style={styles.cardTitle}>Dealer-to-Dealer Collaboration</h3>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Discover listings from verified peers.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Share opportunities and co-broker deals.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Private, secure communication channels.</li>
              </ul>
            </div>
            <div style={styles.problemCard} className="animated-card hover-lift">
              <h3 style={styles.cardTitle}>Admin Control & Smart Search</h3>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Approve dealers and audit platform activity.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Advanced filters by location, price, type.</li>
                <li style={styles.bulletItem}><span style={styles.bulletIcon}>✔</span> Fast, relevant results for better discovery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for interest */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle} className="animated-scale">Built For Trusted Real Estate Collaboration</h2>
          <p style={styles.ctaDescription}>Join a network of verified dealers and list only authentic properties.</p>
          <a href="#" style={styles.ctaButton} className="hover-lift">Get Notified</a>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default PropGoDetails;