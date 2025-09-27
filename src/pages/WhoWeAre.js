import React from 'react';

const WhoWeAre = () => {
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
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      margin: '50px 0'
    },
    teamCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      border: '3px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00a8ff, #0078d4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
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
    memberBio: {
      color: '#777',
      lineHeight: 1.6,
      fontSize: '0.95rem'
    },
    valuesSection: {
      background: '#f8f9fa',
      padding: '50px 40px',
      borderRadius: '15px',
      margin: '60px 0'
    },
    valuesTitle: {
      fontSize: '2.5rem',
      color: '#0078d4',
      textAlign: 'center',
      marginBottom: '40px'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px'
    },
    valueCard: {
      textAlign: 'center'
    },
    valueIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    valueTitle: {
      fontSize: '1.3rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600'
    },
    valueText: {
      color: '#666',
      lineHeight: 1.6
    }
  };

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in technology innovation. Passionate about driving digital transformation across industries.',
      initial: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology architect with expertise in cloud computing, AI, and scalable system design. Leads our technical innovation.',
      initial: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director specializing in user experience design and brand development. Creates intuitive and beautiful interfaces.',
      initial: 'ER'
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      bio: 'Operations expert focused on process optimization and project management. Ensures seamless delivery of client solutions.',
      initial: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Business Development',
      bio: 'Strategic partnership specialist with a track record of building lasting client relationships and expanding market reach.',
      initial: 'LT'
    },
    {
      name: 'James Wilson',
      role: 'Lead Developer',
      bio: 'Full-stack development expert with deep knowledge in modern frameworks and emerging technologies. Mentors our dev team.',
      initial: 'JW'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      text: 'Pursuing the highest standards in everything we do, from code quality to client service.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      text: 'Continuously exploring new technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      text: 'Building strong partnerships with clients and fostering teamwork within our organization.'
    },
    {
      icon: '🔒',
      title: 'Integrity',
      text: 'Maintaining transparency, honesty, and ethical practices in all our business relationships.'
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>Who We Are</h1>
        <p style={styles.heroSubtitle}>
          Meet the passionate team behind Trinix's innovative solutions and exceptional client experiences
        </p>
      </section>

      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            style={styles.teamCard} 
            className="slide-right"
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={styles.avatar}>{member.initial}</div>
            <h3 style={styles.memberName}>{member.name}</h3>
            <p style={styles.memberRole}>{member.role}</p>
            <p style={styles.memberBio}>{member.bio}</p>
          </div>
        ))}
      </div>

      <section style={styles.valuesSection} className="slide-up">
        <h2 style={styles.valuesTitle}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} style={styles.valueCard}>
              <div style={styles.valueIcon}>{value.icon}</div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueText}>{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
