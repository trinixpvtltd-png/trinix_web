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

    // STUNNING PROFESSIONAL TIMELINE SECTION
    timelineSection: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f0f4f8 100%)',
      padding: '120px 0 140px',
      position: 'relative',
      overflow: 'hidden'
    },
    timelineBackgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 80%)
      `,
      pointerEvents: 'none'
    },
    timelineSectionTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '24px',
      color: '#0f172a',
      letterSpacing: '-0.02em',
      position: 'relative',
      zIndex: 2
    },
    timelineSectionSubtitle: {
      fontSize: '1.375rem',
      textAlign: 'center',
      marginBottom: '100px',
      color: '#475569',
      maxWidth: '700px',
      margin: '0 auto 100px',
      lineHeight: '1.7',
      fontWeight: '400'
    },
    timelineContainer: {
      position: 'relative',
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 40px'
    },
    
    // ENHANCED TIMELINE LINE WITH GRADIENT AND GLOW
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '4px',
      background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, #6366f1 20%, #8b5cf6 50%, #6366f1 80%, rgba(99, 102, 241, 0.1) 100%)',
      transform: 'translateX(-50%)',
      borderRadius: '2px',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
      zIndex: 1
    },
    timelineGlowLine: {
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '8px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.1) 20%, rgba(139, 92, 246, 0.15) 50%, rgba(99, 102, 241, 0.1) 80%, transparent 100%)',
      transform: 'translateX(-50%)',
      borderRadius: '4px',
      filter: 'blur(4px)',
      zIndex: 0
    },
    
    timelineItem: {
      position: 'relative',
      marginBottom: '120px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      zIndex: 3
    },
    timelineItemLeft: {
      justifyContent: 'flex-end'
    },
    timelineItemRight: {
      justifyContent: 'flex-start'
    },
    
    // PREMIUM TIMELINE CARDS WITH GLASS MORPHISM
    timelineCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '24px',
      padding: '40px 36px',
      width: '460px',
      position: 'relative',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden'
    },
    timelineCardGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
      borderRadius: '24px 24px 0 0'
    },
    timelineCardLeft: {
      marginRight: '80px'
    },
    timelineCardRight: {
      marginLeft: '80px'
    },
    
    // BEAUTIFUL TYPOGRAPHY WITH ENHANCED STYLING
    timelineYear: {
      fontSize: '1.25rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '12px',
      display: 'block',
      letterSpacing: '0.5px',
      textTransform: 'uppercase'
    },
    timelineTitle: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#0f172a',
      marginBottom: '16px',
      lineHeight: '1.3',
      letterSpacing: '-0.01em'
    },
    timelineDescription: {
      fontSize: '1.0625rem',
      color: '#475569',
      lineHeight: '1.7',
      fontWeight: '400',
      letterSpacing: '0.01em'
    },

    // MOBILE TIMELINE WITH ENHANCED STYLING
    timelineMobile: {
      display: window.innerWidth <= 768 ? 'block' : 'none'
    },
    timelineDesktop: {
      display: window.innerWidth <= 768 ? 'none' : 'block'
    },
    timelineMobileItem: {
      marginBottom: '60px',
      paddingLeft: '80px',
      position: 'relative'
    },
    timelineMobileLine: {
      position: 'absolute',
      left: '30px',
      top: '0',
      bottom: '-20px',
      width: '4px',
      background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.2) 0%, #6366f1 30%, #8b5cf6 70%, rgba(99, 102, 241, 0.2) 100%)',
      borderRadius: '2px',
      boxShadow: '0 0 10px rgba(99, 102, 241, 0.2)'
    },
    timelineMobileCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '20px',
      padding: '32px 28px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    timelineMobileCardGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      borderRadius: '20px 20px 0 0'
    }
  };

  const timelineData = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Trinix was established with a vision to revolutionize digital solutions and create innovative platforms for the modern world.',
      position: 'left'
    },
    {
      year: '2012',
      title: 'First Major Platform',
      description: 'Launched our first enterprise platform, marking our entry into large-scale digital solutions serving 10,000+ users.',
      position: 'right'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Expanded operations globally, establishing presence in 15+ countries across Asia and Europe with localized solutions.',
      position: 'left'
    },
    {
      year: '2023',
      title: 'Platform Evolution',
      description: 'Introduced revolutionary platforms - Eventify, SOS, and MedGo - serving 50,000+ users with cutting-edge technology.',
      position: 'right'
    },
    {
      year: '2025',
      title: 'Innovation Leadership',
      description: 'Leading the industry with AI-powered solutions and sustainable technology initiatives, shaping the future of digital transformation.',
      position: 'left'
    }
  ];

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes timelinePulse {
        0% {
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7), 0 4px 16px rgba(99, 102, 241, 0.3);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(99, 102, 241, 0), 0 4px 16px rgba(99, 102, 241, 0.3);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0), 0 4px 16px rgba(99, 102, 241, 0.3);
        }
      }
      
      @keyframes timelineRing {
        0% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0.8;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.3;
        }
        100% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0.8;
        }
      }
      
      @keyframes mobilePulse {
        0% {
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3), 0 0 0 0 rgba(99, 102, 241, 0.5);
        }
        70% {
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3), 0 0 0 8px rgba(99, 102, 241, 0);
        }
        100% {
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3), 0 0 0 0 rgba(99, 102, 241, 0);
        }
      }
      
      .timeline-card-hover:hover {
        transform: translateY(-12px) scale(1.02) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
        border-color: rgba(99, 102, 241, 0.3) !important;
      }
      
      .timeline-mobile-card-hover:hover {
        transform: translateY(-8px) scale(1.01) !important;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
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

      {/* STUNNING PROFESSIONAL TIMELINE SECTION */}
      <section style={styles.timelineSection}>
        <div style={styles.timelineBackgroundPattern}></div>
        <div style={styles.container}>
          <h2 style={styles.timelineSectionTitle}>
            Our <span style={styles.highlight}>Journey</span>
          </h2>
          <p style={styles.timelineSectionSubtitle}>
            Key milestones that have shaped our growth and success over the years.
          </p>

          {/* ENHANCED DESKTOP TIMELINE */}
          <div style={styles.timelineDesktop}>
            <div style={styles.timelineContainer}>
              <div style={styles.timelineGlowLine}></div>
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
                    className="timeline-card-hover"
                    style={{
                      ...styles.timelineCard,
                      ...(item.position === 'left' ? styles.timelineCardLeft : styles.timelineCardRight)
                    }}
                  >
                    <div style={styles.timelineCardGradient}></div>
                    <span style={styles.timelineYear}>{item.year}</span>
                    <h3 style={styles.timelineTitle}>{item.title}</h3>
                    <p style={styles.timelineDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ENHANCED MOBILE TIMELINE */}
          <div style={styles.timelineMobile}>
            <div style={styles.timelineContainer}>
              <div style={styles.timelineMobileLine}></div>
              {timelineData.map((item, index) => (
                <div key={index} style={styles.timelineMobileItem}>
                  <div className="timeline-mobile-card-hover" style={styles.timelineMobileCard}>
                    <div style={styles.timelineMobileCardGradient}></div>
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