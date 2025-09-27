import React from 'react';

const HomePage = () => {
  const styles = {
    // Hero section styles
    heroSection: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0078d4 0%, #00a8ff 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 2,
      animation: 'slideUp 0.8s ease-out'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
      fontWeight: '300',
      marginBottom: '40px',
      lineHeight: 1.6,
      opacity: 0.9
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      alignItems: 'center'
    },
    ctaButton: {
      padding: '15px 30px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      width: window.innerWidth <= 768 ? '200px' : 'auto'
    },
    primaryBtn: {
      background: 'white',
      color: '#0078d4'
    },
    secondaryBtn: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },

    // Section styles
    section: {
      padding: '100px 30px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    
    sectionTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: '#0078d4',
      textAlign: 'center',
      marginBottom: '50px',
      letterSpacing: '-1px'
    },

    // About Us section
    aboutSection: {
      background: '#f8f9fa',
      padding: '100px 0'
    },
    aboutContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 30px'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '60px',
      alignItems: 'center'
    },
    aboutText: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#34495e',
      marginBottom: '30px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
      marginTop: '40px'
    },
    statItem: {
      textAlign: 'center',
      padding: '20px',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#0078d4',
      display: 'block'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#7f8c8d',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },

    // Projects section
    projectsSection: {
      padding: '100px 0'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginTop: '50px'
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
      backgroundClip: 'content-box, border-box'
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
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0078d4',
      marginBottom: '15px'
    },
    projectDescription: {
      color: '#5a6c7d',
      lineHeight: 1.6,
      fontSize: '1rem'
    },

    // Team section
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '50px'
    },
    teamCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: 'white',
      fontWeight: 'bold'
    },
    memberName: {
      fontSize: '1.5rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600'
    },
    memberRole: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '15px',
      fontWeight: '500'
    },

    // Services grid
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '50px'
    },
    serviceCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #0078d4, #00a8ff)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '20px'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      color: '#0078d4',
      marginBottom: '15px',
      fontWeight: '600'
    },
    serviceDescription: {
      color: '#5a6c7d',
      lineHeight: 1.6
    },

    // Blog grid
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginTop: '50px'
    },
    blogCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    },
    blogImage: {
      height: '200px',
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: 'white'
    },
    blogContent: {
      padding: '30px'
    },
    blogTitle: {
      fontSize: '1.3rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600'
    },
    blogExcerpt: {
      color: '#5a6c7d',
      lineHeight: 1.6,
      fontSize: '0.95rem'
    },

    // Contact section
    contactSection: {
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      color: 'white',
      padding: '100px 0'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '60px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 30px'
    },
    contactInfo: {
      fontSize: '1.1rem',
      lineHeight: '1.8'
    },
    contactItem: {
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    contactIcon: {
      fontSize: '1.5rem',
      marginRight: '15px'
    }
  };

  const projects = [
    {
      name: 'Eventify Platform',
      description: 'Revolutionary event management platform connecting venues, organizers, and attendees with seamless booking capabilities.',
      icon: '🎭',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)'
    },
    {
      name: 'SOS Emergency Network',
      description: 'Life-saving emergency response system ensuring rapid assistance and safety with 24/7 monitoring.',
      icon: '🚨',
      gradient: 'linear-gradient(135deg, #e67e22, #d35400)'
    },
    {
      name: 'MedGo Healthcare',
      description: 'Healthcare provider network streamlining medical appointments and telemedicine services.',
      icon: '🏥',
      gradient: 'linear-gradient(135deg, #27ae60, #229954)'
    },
    {
      name: 'PropGo Real Estate',
      description: 'Advanced property management and real estate platform with intelligent matching algorithms.',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)'
    }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Chief Executive Officer', initial: 'SJ' },
    { name: 'Michael Chen', role: 'Chief Technology Officer', initial: 'MC' },
    { name: 'Emily Rodriguez', role: 'Head of Design', initial: 'ER' },
    { name: 'David Kim', role: 'Head of Operations', initial: 'DK' },
    { name: 'Lisa Thompson', role: 'Head of Business Development', initial: 'LT' },
    { name: 'James Wilson', role: 'Lead Developer', initial: 'JW' }
  ];

  const services = [
    { icon: '💻', title: 'Web Development', description: 'Custom websites and web applications built with modern technologies for optimal performance.' },
    { icon: '📱', title: 'Mobile Apps', description: 'Native and cross-platform mobile applications that engage users and drive growth.' },
    { icon: '☁️', title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services to enhance business agility.' },
    { icon: '🤖', title: 'AI & Machine Learning', description: 'Intelligent solutions powered by AI to automate processes and gain insights.' },
    { icon: '🔐', title: 'Cybersecurity', description: 'Comprehensive security solutions to protect digital assets and ensure continuity.' },
    { icon: '📊', title: 'Data Analytics', description: 'Transform data into actionable insights with advanced analytics and visualization.' }
  ];

  const blogPosts = [
    { title: 'The Future of AI in Business', excerpt: 'Exploring how artificial intelligence is reshaping industries and creating new opportunities.', icon: '🤖' },
    { title: 'Cloud-First Strategy Guide', excerpt: 'Understanding the benefits of adopting a cloud-first approach in digital transformation.', icon: '☁️' },
    { title: 'Zero Trust Security Model', excerpt: 'Why traditional security models are obsolete and how Zero Trust provides better protection.', icon: '🔐' }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Trinix</h1>
          <p style={styles.heroSubtitle}>
            Innovating the future through cutting-edge technology solutions and strategic business partnerships
          </p>
          <div style={styles.heroButtons}>
            <button style={{...styles.ctaButton, ...styles.primaryBtn}}>Get Started</button>
            <button style={{...styles.ctaButton, ...styles.secondaryBtn}}>Learn More</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <h2 style={styles.sectionTitle}>About Trinix</h2>
          <div style={styles.aboutGrid}>
            <div>
              <p style={styles.aboutText}>
                Founded in 2008, Trinix Pvt. Ltd. has been at the forefront of digital innovation, creating solutions that bridge the gap between technology and human needs.
              </p>
              <p style={styles.aboutText}>
                What started as a small team of passionate developers has grown into a global technology company serving thousands of users across 25+ countries. Our mission is to empower communities through technology, whether it's connecting people during emergencies, streamlining healthcare access, or creating unforgettable events.
              </p>
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>17+</span>
                <span style={styles.statLabel}>Years Experience</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>25+</span>
                <span style={styles.statLabel}>Countries Served</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>100K+</span>
                <span style={styles.statLabel}>Active Users</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>500+</span>
                <span style={styles.statLabel}>Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" style={styles.projectsSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Who We Serve</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '800px', margin: '0 auto 50px'}}>
            Comprehensive solutions serving diverse needs across multiple industries and business sectors
          </p>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={styles.projectCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{...styles.projectIcon, background: project.gradient}}>
                  {project.icon}
                </div>
                <h3 style={styles.projectTitle}>{project.name}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" style={{...styles.section, background: '#f8f9fa', padding: '100px 30px'}}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '800px', margin: '0 auto 50px'}}>
          Meet our passionate team of innovators, leaders, and visionaries driving technological change across industries
        </p>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              style={styles.teamCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.avatar}>{member.initial}</div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" style={{...styles.section, padding: '100px 30px'}}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '800px', margin: '0 auto 50px'}}>
          Comprehensive technology solutions designed to transform businesses and accelerate digital growth
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={styles.serviceCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Thinking Section */}
      <section id="our-thinking" style={{...styles.section, background: '#f8f9fa', padding: '100px 30px'}}>
        <h2 style={styles.sectionTitle}>Our Thinking</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '800px', margin: '0 auto 50px'}}>
          Insights and thought leadership on technology trends shaping the future of business and innovation
        </p>
        <div style={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              style={styles.blogCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.blogImage}>{post.icon}</div>
              <div style={styles.blogContent}>
                <h3 style={styles.blogTitle}>{post.title}</h3>
                <p style={styles.blogExcerpt}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section id="career" style={{...styles.section, padding: '100px 30px'}}>
        <h2 style={styles.sectionTitle}>Join Our Team</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '800px', margin: '0 auto 50px'}}>
          Build the future of technology with passionate innovators who are changing the world through cutting-edge solutions
        </p>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <div style={{...styles.ctaButton, ...styles.primaryBtn, display: 'inline-block', cursor: 'pointer'}}>
            View Open Positions
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" style={styles.contactSection}>
        <div style={styles.contactGrid}>
          <div>
            <h2 style={{...styles.sectionTitle, color: 'white', textAlign: 'left', marginBottom: '30px'}}>
              Contact Us
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9}}>
              Ready to transform your business? Let's start a conversation about your next project and explore how we can help you achieve your goals.
            </p>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div>
                  <strong>Address:</strong><br />
                  123 Tech Plaza, Innovation District<br />
                  Silicon Valley, CA 94025
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <div>
                  <strong>Phone:</strong><br />
                  +1 (555) 123-4567
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  hello@trinix.com
                </div>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{...styles.ctaButton, background: 'white', color: '#0078d4', display: 'inline-block', cursor: 'pointer', marginBottom: '20px'}}>
              Get In Touch
            </div>
            <p style={{opacity: 0.9}}>
              We'll respond within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
