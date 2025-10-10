import React from 'react';
import trinixVideo from './video.mp4';
import Footer from '../components/Footer';

const AboutUs = () => {
  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '20px 0 20px',
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
      lineHeight: '1.6',
      fontWeight: 600
    },
    // MISSION / VISION ROW (matches screenshot layout)
    missionSection: {
      background: '#fff',
      padding: '48px 0',
      borderBottom: '1px solid rgba(0,0,0,0.03)'
    },
    missionRow: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    missionItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px'
    },
    missionIcon: {
      minWidth: '56px',
      height: '56px',
      borderRadius: '50%',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '700',
      boxShadow: '0 8px 20px rgba(99,102,241,0.12)'
    },
    missionTitle: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#0f172a',
      marginBottom: '8px'
    },
    missionText: {
      color: '#475569',
      lineHeight: '1.7',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    },
    // FOUNDERS / MESSAGE SECTION
    foundersSection: {
      background: '#f7fafc',
      padding: '60px 0'
    },
    foundersHeader: {
      textAlign: 'center',
      marginBottom: '28px'
    },
    foundersSubtitle: {
      color: '#6b7280',
      marginTop: '8px'
    },
    founderCardWrap: {
      maxWidth: '1100px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 12px 30px rgba(2,6,23,0.08)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '320px 1fr',
      gap: '0'
    },
    founderImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    founderContent: {
      padding: '28px 40px'
    },
    founderName: {
      fontSize: '1.375rem',
      fontWeight: 800,
      color: '#0f172a'
    },
    founderTitle: {
      color: '#8b5cf6',
      fontWeight: 700,
      margin: '8px 0 18px'
    },
    founderHeading: {
      fontSize: '1.125rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: '12px'
    },
    founderParagraph: {
      color: '#475569',
      lineHeight: '1.7'
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
      year: 'October 2024',
      title: 'First Project: SOS',
      description:
        'We began our journey with the launch of Sankatmochan Outreach Service (SOS), our first major project aimed at building a social-impact platform to connect NGOs, businesses, and communities.',
      position: 'left'
    },
    {
      year: 'March 2025',
      title: 'First Fintech Research Publication',
      description:
        'Our team published its first fintech research paper, exploring innovative models for digital finance and global monetary systems.',
      position: 'right'
    },
    {
      year: 'July 2025',
      title: 'First Subsidiary: Webstitch',
      description:
        'We established Webstitch, our first subsidiary, focused on web development and digital services to support businesses and individuals.',
      position: 'left'
    },
    {
      year: 'August 2025',
      title: 'Birth of Trinix Private Limited',
      description:
        'Recognizing the growing scale of our initiatives, we officially founded Trinix Private Limited as the parent company to bring all our projects and subsidiaries under one unified vision.',
      position: 'right'
    },
    {
      year: 'September 2025',
      title: 'Second Fintech Research Publication',
      description:
        'We achieved another milestone by releasing our second fintech research paper, furthering our contributions to innovative financial technologies and research-driven solutions.',
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
      
      /* Scroll-in reveal animation */
      .timeline-reveal { opacity: 0; transform: translateY(18px); transition: opacity 600ms ease, transform 600ms ease; }
      .timeline-reveal.visible { opacity: 1; transform: translateY(0); }

      /* Subtle shimmer on the center line */
      @keyframes lineShimmer {
        0% { box-shadow: 0 0 10px rgba(99,102,241,0.2); }
        50% { box-shadow: 0 0 26px rgba(139,92,246,0.35); }
        100% { box-shadow: 0 0 10px rgba(99,102,241,0.2); }
      }
      .timeline-line-animated { animation: lineShimmer 2.8s ease-in-out infinite; }

      .timeline-card-hover:hover {
        transform: translateY(-12px) scale(1.02) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
        border-color: rgba(99, 102, 241, 0.3) !important;
      }
      
      .timeline-mobile-card-hover:hover {
        transform: translateY(-8px) scale(1.01) !important;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
      }

      /* Team message card animations */
      .team-card-hover { transition: transform 420ms ease, box-shadow 420ms ease, border-color 420ms ease; }
      .team-card-hover:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18); }
      .team-card-gradient { height: 4px; width: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4); border-radius: 10px 10px 0 0; }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Observe timeline items to add 'visible' class on scroll
  React.useEffect(() => {
    const items = document.querySelectorAll('.js-timeline-item');
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h3 style={styles.title}>
            About <span style={styles.highlight}>Trinix</span>
          </h3>
          <p style={styles.subtitle}>
            We're building the future of digital solutions, one innovation at a time. 
            Discover our journey, meet our team, and learn about our mission to transform 
            how people connect and collaborate in the digital age.
          </p>
        </div>
      </section>

      {/* MISSION / VISION ROW (matches screenshot) */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <div style={styles.missionRow}>
            <div>
              <div style={styles.missionItem}>
                <div style={styles.missionIcon} aria-hidden>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" />
                    <circle cx="12" cy="12" r="5" stroke="rgba(255,255,255,0.95)" strokeWidth="1.3" />
                    <circle cx="12" cy="12" r="2" fill="white" />
                  </svg>
                </div>
                <div>
                  <div style={styles.missionTitle}>Our Mission</div>
                  <div style={styles.missionText}>
                    To preserve, research, and disseminate the ancient wisdomTrinix Private Limited is a dynamic, innovation-driven company dedicated to building transformative solutions 
                    and fostering a culture of progress. We work on a wide range of in-house projects and lead a growing network 
                    of subsidiaries that span industries such as web services, technology development, digital platforms, and 
                    research-driven innovation. Our multidisciplinary approach allows us to combine creativity, cutting-edge 
                    technology, and rigorous research to deliver impactful solutions that address real-world challenges.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={styles.missionItem}>
                <div style={styles.missionIcon} aria-hidden>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 4C7.03 4 2.73 7.11 1 11.5c1.73 4.39 6.03 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.11 16.97 4 12 4z" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" fill="none" />
                    <circle cx="12" cy="11.5" r="2" fill="white" />
                  </svg>
                </div>
                <div>
                  <div style={styles.missionTitle}>Our Vision</div>
                  <div style={styles.missionText}>
                  we believe innovation flourishes when people are empowered. We actively encourage our employees and 
                  teams to transform their ideas into ventures by providing them with logistical support, research infrastructure, 
                  and operational guidance under the Trinix umbrella. This collaborative ecosystem not only nurtures new 
                  startups but also fuels our mission to be a launchpad for pioneering technologies, scientific exploration, and 
                  sustainable business growth. Together, we aim to shape a future where research, creativity, and 
                  entrepreneurship drive meaningful change across industries and communities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TEAM MESSAGE - Single Animated Card */}
      <section style={styles.foundersSection}>
        <div style={styles.container}>
          <div className="timeline-reveal js-timeline-item" style={{...styles.founderCardWrap, padding: 0, display: 'block'}}>
            <div className="team-card-gradient" aria-hidden></div>
            <div className="team-card-hover" style={{...styles.founderContent, padding: '32px 40px'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '8px'}}>
                <h2 style={{fontSize: '1.75rem', fontWeight: 900, margin: 0, color: '#0f172a'}}>Message from our Team</h2>
                <span style={{fontWeight: 700, color: '#8b5cf6'}}>Trinix Pvt. Ltd.</span>
              </div>
              <p style={{...styles.founderParagraph, marginTop: '10px'}}>
                At Trinix, we build technology that serves people. Our journey brings together research,
                engineering, and purposeful design to craft platforms that strengthen communities,
                accelerate businesses, and expand access to opportunity.
              </p>
              <p style={styles.founderParagraph}>
                From SOS to our fintech research and growing subsidiaries, we remain focused on impact
                through innovation—delivering solutions that are dependable, scalable, and human-centered.
              </p>
              <p style={styles.founderParagraph}>
                Thank you for being part of our story. We’re just getting started.
              </p>
            </div>
          </div>
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
                <strong>Founded in 2008, Trinix Pvt. Ltd. has been at the forefront of digital</strong>
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
              <div className="timeline-line-animated" style={styles.timelineLine}></div>
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.timelineItem,
                    ...(item.position === 'left' ? styles.timelineItemLeft : styles.timelineItemRight)
                  }}
                >
                  <div 
                    className={`timeline-card-hover timeline-reveal js-timeline-item`}
                    style={{
                      ...styles.timelineCard,
                      ...(item.position === 'left' ? styles.timelineCardLeft : styles.timelineCardRight),
                      transitionDelay: `${index * 90}ms`
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
                <div key={index} className={`timeline-reveal js-timeline-item`} style={{...styles.timelineMobileItem, transitionDelay: `${index * 90}ms`}}>
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