import React from 'react';

const AboutUs = () => {
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      paddingTop: '90px',
      padding: '90px 30px 60px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    heroSection: {
      textAlign: 'center',
      padding: '80px 40px',
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      color: 'white',
      marginBottom: '60px',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0, 120, 212, 0.3)'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '2.8rem' : '4rem',
      fontWeight: '800',
      marginBottom: '25px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      letterSpacing: '-1px'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      fontWeight: '300',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
      opacity: '0.95'
    },
    section: {
      margin: '70px 0',
      padding: '50px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease',
      border: '1px solid rgba(0, 120, 212, 0.1)'
    },
    sectionTitle: {
      fontSize: '2.8rem',
      color: '#0078d4',
      marginBottom: '30px',
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-0.5px'
    },
    sectionContent: {
      fontSize: '1.2rem',
      lineHeight: 1.8,
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
      color: '#34495e'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '35px',
      margin: '50px 0'
    },
    projectCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px 35px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #0078d4, #00a8ff)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      position: 'relative',
      overflow: 'hidden'
    },
    projectIcon: {
      width: '70px',
      height: '70px',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: 'white',
      marginBottom: '25px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    },
    projectTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0078d4',
      marginBottom: '15px',
      letterSpacing: '-0.3px'
    },
    projectDescription: {
      color: '#5a6c7d',
      lineHeight: 1.7,
      fontSize: '1.05rem',
      marginBottom: '25px'
    },
    projectStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '15px',
      paddingTop: '20px',
      borderTop: '1px solid #e8ecef'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0078d4',
      display: 'block'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#7f8c8d',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '600'
    }
  };

  const projects = [
    {
      name: 'Eventify Platform',
      description: 'Revolutionary event management platform connecting venues, organizers, and attendees with seamless booking and management capabilities.',
      icon: '🎭',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      stats: [
        { number: '1,250+', label: 'Venues' },
        { number: '3,400+', label: 'Events' },
        { number: '12,500+', label: 'Users' }
      ]
    },
    {
      name: 'SOS Emergency Network',
      description: 'Life-saving emergency response system ensuring rapid assistance and safety with 24/7 monitoring and instant alerts.',
      icon: '🚨',
      gradient: 'linear-gradient(135deg, #e67e22, #d35400)',
      stats: [
        { number: '< 2min', label: 'Response' },
        { number: '95%', label: 'Coverage' },
        { number: '50,000+', label: 'Users' }
      ]
    },
    {
      name: 'MedGo Healthcare',
      description: 'Comprehensive healthcare provider network streamlining medical appointments and patient care with advanced telemedicine features.',
      icon: '🏥',
      gradient: 'linear-gradient(135deg, #27ae60, #229954)',
      stats: [
        { number: '850+', label: 'Doctors' },
        { number: '25,000+', label: 'Patients' },
        { number: '4.8', label: 'Rating' }
      ]
    },
    {
      name: 'PropGo Real Estate',
      description: 'Advanced property management and real estate platform connecting buyers, sellers, and agents with intelligent matching algorithms.',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
      stats: [
        { number: '2,800+', label: 'Properties' },
        { number: '500+', label: 'Agents' },
        { number: '15,000+', label: 'Clients' }
      ]
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>About Trinix</h1>
        <p style={styles.heroSubtitle}>
          Building the future with innovative technology solutions and unwavering commitment to excellence
        </p>
      </section>

      <div 
        style={styles.section} 
        className="slide-right"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.sectionContent}>
          Founded in 2008, Trinix Pvt. Ltd. has been at the forefront of digital innovation, creating solutions that bridge the gap between technology and human needs. What started as a small team of passionate developers has grown into a global technology company serving thousands of users across 25+ countries. Our mission is to empower communities through technology, whether it's connecting people during emergencies, streamlining healthcare access, or creating unforgettable events.
        </p>
      </div>

      <div 
        style={styles.section} 
        className="slide-right"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <h2 style={styles.sectionTitle}>Our Coverage</h2>
        <p style={styles.sectionContent}>
          Comprehensive solutions serving diverse needs across multiple industries. From emergency response systems that save lives to healthcare platforms that connect patients with doctors, and event management tools that create memorable experiences.
        </p>
      </div>

      <section>
        <h2 style={{...styles.sectionTitle, marginBottom: '50px'}}>Our Major Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={styles.projectCard} 
              className="slide-right"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{...styles.projectIcon, background: project.gradient}}>
                {project.icon}
              </div>
              <h3 style={styles.projectTitle}>{project.name}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.projectStats}>
                {project.stats.map((stat, statIndex) => (
                  <div key={statIndex} style={styles.statItem}>
                    <span style={styles.statNumber}>{stat.number}</span>
                    <span style={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
