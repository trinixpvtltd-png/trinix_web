import React, { useEffect, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
      padding: '120px 0 100px',
      position: 'relative'
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
      lineHeight: '1.1'
    },
    heroHighlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400'
    },

    section: {
      padding: '100px 0',
      background: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginTop: '80px'
    },
    teamCard: {
      background: 'white',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid #f1f5f9',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
      position: 'relative'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      margin: '0 auto 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      color: 'white',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.3)'
    },
    memberName: {
      fontSize: '1.5rem',
      color: '#1e293b',
      marginBottom: '8px',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif"
    },
    memberRole: {
      fontSize: '1.1rem',
      color: '#6366f1',
      marginBottom: '20px',
      fontWeight: '500'
    },
    memberBio: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '0.9375rem',
      marginBottom: '24px'
    },
    skillsSection: {
      marginTop: '24px',
      padding: '20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },
    skillsTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px'
    },
    skillsTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      justifyContent: 'center'
    },
    skillTag: {
      background: 'white',
      color: '#475569',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: '500',
      border: '1px solid #e2e8f0'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '20px'
    },
    socialLink: {
      width: '36px',
      height: '36px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'all 0.2s ease'
    }
  };

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      initial: 'SJ',
      bio: 'Visionary leader with 15+ years in technology innovation. Passionate about driving digital transformation across industries and building scalable solutions that impact millions of users globally. Expert in strategic planning and business development.',
      skills: ['Strategic Planning', 'Digital Transformation', 'Business Development', 'Team Leadership', 'Investor Relations'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'sarah@trinix.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      initial: 'MC',
      bio: 'Technology architect with expertise in cloud computing, AI, and scalable system design. Leads our technical innovation and engineering excellence across multiple development teams with a focus on cutting-edge solutions.',
      skills: ['Cloud Architecture', 'AI/ML Systems', 'Scalable Design', 'Technical Leadership', 'DevOps'],
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'michael@trinix.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      initial: 'ER',
      bio: 'Creative director specializing in user experience design and brand development. Creates intuitive and beautiful interfaces that users love while maintaining accessibility and usability standards across all platforms.',
      skills: ['UX/UI Design', 'Brand Development', 'Design Systems', 'User Research', 'Prototyping'],
      social: {
        linkedin: 'https://linkedin.com',
        dribbble: 'https://dribbble.com',
        email: 'emily@trinix.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      initial: 'DK',
      bio: 'Operations expert focused on process optimization and project management. Ensures seamless delivery of client solutions and operational excellence while maintaining quality and efficiency standards.',
      skills: ['Process Optimization', 'Project Management', 'Quality Assurance', 'Team Coordination', 'Client Relations'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'david@trinix.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Business Development',
      initial: 'LT',
      bio: 'Strategic partnership specialist with a track record of building lasting client relationships and expanding market reach globally. Expert in identifying growth opportunities and building strategic alliances.',
      skills: ['Strategic Partnerships', 'Client Relations', 'Market Expansion', 'Sales Strategy', 'Business Growth'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'lisa@trinix.com'
      }
    },
    {
      name: 'James Wilson',
      role: 'Lead Developer',
      initial: 'JW',
      bio: 'Full-stack development expert with deep knowledge in modern frameworks and emerging technologies. Mentors our development team and ensures code quality and best practices across all projects.',
      skills: ['Full-stack Development', 'Modern Frameworks', 'Code Review', 'Team Mentoring', 'Architecture'],
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'james@trinix.com'
      }
    },
    {
      name: 'Anna Martinez',
      role: 'Head of Marketing',
      initial: 'AM',
      bio: 'Marketing strategist with expertise in digital campaigns, brand management, and customer acquisition across multiple channels. Drives brand awareness and lead generation through data-driven marketing strategies.',
      skills: ['Digital Marketing', 'Brand Management', 'Customer Acquisition', 'Analytics', 'Content Strategy'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'anna@trinix.com'
      }
    },
    {
      name: 'Robert Chang',
      role: 'Security Director',
      initial: 'RC',
      bio: 'Cybersecurity expert specializing in enterprise security, compliance, and risk management. Protects our clients\' digital assets and ensures security best practices across all our solutions and infrastructure.',
      skills: ['Enterprise Security', 'Compliance', 'Risk Management', 'Threat Analysis', 'Security Architecture'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'robert@trinix.com'
      }
    },
    {
      name: 'Sophie Williams',
      role: 'Data Science Lead',
      initial: 'SW',
      bio: 'Data scientist and AI researcher with experience in machine learning, predictive analytics, and business intelligence solutions. Leads our data science initiatives and helps clients unlock insights from their data.',
      skills: ['Machine Learning', 'Predictive Analytics', 'Business Intelligence', 'Data Visualization', 'AI Research'],
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'sophie@trinix.com'
      }
    }
  ];

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      [data-animate] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      [data-animate].visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            Meet Our <span style={styles.heroHighlight}>Team</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Passionate innovators, leaders, and visionaries driving technological change 
            and delivering exceptional results for clients worldwide.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                style={styles.teamCard}
                data-animate 
                id={`member-${index}`}
                className={isVisible[`member-${index}`] ? 'visible' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={styles.avatar}>{member.initial}</div>
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
                <p style={styles.memberBio}>{member.bio}</p>
                
                <div style={styles.skillsSection}>
                  <h4 style={styles.skillsTitle}>Expertise</h4>
                  <div style={styles.skillsTags}>
                    {member.skills.map((skill, idx) => (
                      <span key={idx} style={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.socialLinks}>
                  <a href={member.social.linkedin} style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                    💼
                  </a>
                  {member.social.github && (
                    <a href={member.social.github} style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      🐱
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      🐦
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a href={member.social.dribbble} style={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      🎨
                    </a>
                  )}
                  <a href={`mailto:${member.social.email}`} style={styles.socialLink}>
                    ✉️
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
