import React from 'react';
import trinixVideo from './video.mp4';

const AboutUs = () => {
  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
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
      color: '#111827',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    highlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto 60px',
      lineHeight: '1.6'
    },
    section: {
      padding: '80px 0'
    },
    storyContainer: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '80px',
      alignItems: 'center'
    },
    videoContainer: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid #e5e7eb'
    },
    storyVideo: {
      width: '100%',
      height: '400px',
      objectFit: 'cover'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '32px'
    },
    statCard: {
      background: 'white',
      padding: '40px 24px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            About <span style={styles.highlight}>Trinix</span>
          </h1>
          <p style={styles.subtitle}>
            We're building the future of digital solutions, one innovation at a time. 
            Discover our journey, meet our team, and learn about our mission to transform 
            how people connect and collaborate in the digital age.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.storyContainer}>
            <div>
              <h2 style={{fontSize: '3rem', fontWeight: '700', color: '#111827', marginBottom: '32px'}}>
                Our <span style={styles.highlight}>Story</span>
              </h2>
              <p style={{fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '24px', color: '#4b5563'}}>
                Founded in 2008, Trinix Pvt. Ltd. has been at the forefront of digital 
                innovation, creating solutions that bridge the gap between technology and human needs.
              </p>
              <p style={{fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '24px', color: '#4b5563'}}>
                What started as a small team of passionate developers has grown into a 
                global technology company serving thousands of users across 25+ countries. 
                Our mission is to empower communities through technology, whether it's connecting 
                people during emergencies, streamlining healthcare access, or creating unforgettable events.
              </p>
            </div>
            
            <div style={styles.videoContainer}>
              <video style={styles.storyVideo} controls preload="metadata" muted>
                <source src={trinixVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{...styles.section, background: '#f9fafb'}}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>17+</span>
              <span style={styles.statLabel}>Years Experience</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>25+</span>
              <span style={styles.statLabel}>Countries Served</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>100K+</span>
              <span style={styles.statLabel}>Active Users</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>500+</span>
              <span style={styles.statLabel}>Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
