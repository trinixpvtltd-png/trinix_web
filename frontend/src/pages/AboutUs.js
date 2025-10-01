import React from 'react';
import trinixVideo from './video.mp4';
import Footer from '../components/Footer';

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
    },

    // Updated Timeline Section Styles - Light Theme
    timelineSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    timelineSectionTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '16px',
      color: '#1e293b'
    },
    timelineSectionSubtitle: {
      fontSize: '1.25rem',
      textAlign: 'center',
      marginBottom: '80px',
      color: '#64748b',
      maxWidth: '600px',
      margin: '0 auto 80px'
    },
    timelineContainer: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 20px'
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '4px',
      background: 'linear-gradient(180deg, #e2e8f0, #6366f1, #e2e8f0)',
      transform: 'translateX(-50%)',
      borderRadius: '2px'
    },
    timelineItem: {
      position: 'relative',
      marginBottom: '100px',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    timelineItemLeft: {
      justifyContent: 'flex-end'
    },
    timelineItemRight: {
      justifyContent: 'flex-start'
    },
    timelineCard: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '32px',
      width: '380px',
      position: 'relative',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    timelineCardLeft: {
      marginRight: '80px'
    },
    timelineCardRight: {
      marginLeft: '80px'
    },
    timelineDot: {
      position: 'absolute',
      left: '50%',
      width: '3px',
      height: '30px',
      background: '#e2e8f0',
      transform: 'translateX(-50%)',
      zIndex: 2
    },
    timelineYear: {
      fontSize: '1.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '12px',
      display: 'block'
    },
    timelineTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '12px',
      lineHeight: '1.3'
    },
    timelineDescription: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.6'
    },

    // Mobile Timeline Styles - Light Theme
    timelineMobile: {
      display: window.innerWidth <= 768 ? 'block' : 'none'
    },
    timelineDesktop: {
      display: window.innerWidth <= 768 ? 'none' : 'block'
    },
    timelineMobileItem: {
      marginBottom: '40px',
      paddingLeft: '60px',
      position: 'relative'
    },
    timelineMobileLine: {
      position: 'absolute',
      left: '20px',
      top: '0',
      bottom: '0',
      width: '2px',
      background: '#e2e8f0'
    },
    timelineMobileDot: {
      position: 'absolute',
      left: '12px',
      top: '8px',
      width: '16px',
      height: '16px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderRadius: '50%',
      border: '3px solid white',
      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.2)'
    },
    timelineMobileCard: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
    }
  };

  const timelineData = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Trinix was established with a vision to revolutionize digital solutions.',
      position: 'left'
    },
    {
      year: '2012',
      title: 'First Major Platform',
      description: 'Launched our first enterprise platform serving 10,000+ users.',
      position: 'right'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Expanded operations to 15+ countries across Asia and Europe.',
      position: 'left'
    },
    {
      year: '2023',
      title: 'Platform Evolution',
      description: 'Introduced Eventify, SOS, and MedGo platforms serving 50,000+ users.',
      position: 'right'
    }
  ];

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

      {/* Timeline Section - Light Theme */}
      <section style={styles.timelineSection}>
        <div style={styles.container}>
          <h2 style={styles.timelineSectionTitle}>
            Our <span style={styles.highlight}>Journey</span>
          </h2>
          <p style={styles.timelineSectionSubtitle}>
            Key milestones that have shaped our growth and success over the years.
          </p>

          {/* Desktop Timeline */}
          <div style={styles.timelineDesktop}>
            <div style={styles.timelineContainer}>
              <div style={styles.timelineLine}></div>
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.timelineItem,
                    ...(item.position === 'left' ? styles.timelineItemLeft : styles.timelineItemRight)
                  }}
                >
                  <div 
                    style={{
                      ...styles.timelineCard,
                      ...(item.position === 'left' ? styles.timelineCardLeft : styles.timelineCardRight)
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-8px)';
                      e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
                      e.target.style.borderColor = '#6366f1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                      e.target.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <span style={styles.timelineYear}>{item.year}</span>
                    <h3 style={styles.timelineTitle}>{item.title}</h3>
                    <p style={styles.timelineDescription}>{item.description}</p>
                  </div>
                  <div style={styles.timelineDot}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div style={styles.timelineMobile}>
            <div style={styles.timelineContainer}>
              <div style={styles.timelineMobileLine}></div>
              {timelineData.map((item, index) => (
                <div key={index} style={styles.timelineMobileItem}>
                  <div style={styles.timelineMobileDot}></div>
                  <div style={styles.timelineMobileCard}>
                    <span style={styles.timelineYear}>{item.year}</span>
                    <h3 style={styles.timelineTitle}>{item.title}</h3>
                    <p style={styles.timelineDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;