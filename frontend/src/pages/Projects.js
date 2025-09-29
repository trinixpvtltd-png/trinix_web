import React, { useEffect, useState } from 'react';

const Projects = () => {
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
      position: 'relative',
      overflow: 'hidden'
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
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
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '40px',
      marginTop: '80px'
    },
    projectCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid #f1f5f9',
      transition: 'all 0.4s ease',
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
      position: 'relative'
    },
    projectImage: {
      height: '280px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    projectContent: {
      padding: '40px 32px'
    },
    projectCategory: {
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      color: '#6366f1',
      padding: '6px 14px',
      borderRadius: '8px',
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      display: 'inline-block',
      marginBottom: '16px',
      border: '1px solid #e2e8f0'
    },
    projectTitle: {
      fontSize: '1.75rem',
      color: '#1e293b',
      marginBottom: '16px',
      fontWeight: '700',
      lineHeight: '1.3'
    },
    projectDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginBottom: '24px'
    },
    techStack: {
      marginBottom: '24px'
    },
    techTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    techTag: {
      background: '#f8fafc',
      color: '#475569',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: '500',
      border: '1px solid #f1f5f9'
    },
    projectFeatures: {
      marginBottom: '32px'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      color: '#64748b',
      fontSize: '0.9375rem',
      marginBottom: '8px',
      paddingLeft: '20px',
      position: 'relative',
      lineHeight: '1.5'
    },
    checkIcon: {
      position: 'absolute',
      left: '0',
      top: '2px',
      color: '#10b981',
      fontWeight: '600'
    },
    projectActions: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    primaryAction: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '0.9375rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryAction: {
      background: 'white',
      color: '#6366f1',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '1px solid #6366f1',
      fontSize: '0.9375rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    statusBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(16, 185, 129, 0.9)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    }
  };

  const projects = [
    {
      id: 1,
      category: 'Event Management',
      title: 'Eventify Platform',
      description: 'Comprehensive event management platform featuring multi-user roles (owners, managers, agents), venue search functionality, booking management, and real-time dashboard analytics. Built with modern React architecture and scalable backend infrastructure.',
      icon: '🎪',
      status: 'Live',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Redux', 'Material-UI', 'AWS'],
      features: [
        'Multi-role user management system',
        'Advanced venue search & filtering',
        'Real-time booking management',
        'Interactive dashboard analytics',
        'Payment gateway integration',
        'Automated email notifications',
        'Mobile-responsive design',
        'Admin panel with full control'
      ],
      liveUrl: 'https://eventify-demo.trinix.com',
      githubUrl: 'https://github.com/trinix/eventify'
    },
    {
      id: 2,
      category: 'Productivity Tools',
      title: 'Job Application Tracker',
      description: 'Full-stack application designed to organize and streamline the job search process. Features comprehensive tracking of applications, company information, interview schedules, and progress analytics with an intuitive user interface.',
      icon: '💼',
      status: 'Live',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'JWT', 'Chart.js', 'Bootstrap', 'Heroku'],
      features: [
        'Application status tracking',
        'Company database management',
        'Interview scheduling system',
        'Progress analytics & charts',
        'Document upload & storage',
        'Reminder notifications',
        'Export data functionality',
        'Search & filter capabilities'
      ],
      liveUrl: 'https://job-tracker.trinix.com',
      githubUrl: 'https://github.com/trinix/job-tracker'
    },
    {
      id: 3,
      category: 'E-commerce',
      title: 'Smart Retail Dashboard',
      description: 'Advanced e-commerce management dashboard with inventory tracking, sales analytics, customer management, and automated reporting. Includes AI-powered insights for business optimization and growth strategies.',
      icon: '🛒',
      status: 'In Development',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'Chart.js', 'Stripe', 'Vercel'],
      features: [
        'Real-time inventory management',
        'Sales performance analytics',
        'Customer relationship management',
        'Automated financial reporting',
        'AI-powered business insights',
        'Multi-store management',
        'Integration with payment gateways',
        'Mobile app companion'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/trinix/retail-dashboard'
    },
    {
      id: 4,
      category: 'Healthcare',
      title: 'MedConnect Telemedicine',
      description: 'HIPAA-compliant telemedicine platform enabling secure video consultations, patient record management, prescription handling, and appointment scheduling. Features end-to-end encryption and healthcare provider verification.',
      icon: '🏥',
      status: 'Beta Testing',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io', 'JWT', 'AWS S3', 'Twilio'],
      features: [
        'HIPAA-compliant video consultations',
        'Secure patient record management',
        'Electronic prescription system',
        'Appointment scheduling & reminders',
        'Real-time chat messaging',
        'Document sharing & storage',
        'Insurance verification',
        'Mobile app for patients & doctors'
      ],
      liveUrl: 'https://medconnect-beta.trinix.com',
      githubUrl: null // Private repository
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
            Our <span style={styles.heroHighlight}>Projects</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Showcasing our latest innovations and successful implementations across various industries. 
            Each project represents our commitment to delivering exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={project.id}
                style={styles.projectCard}
                data-animate 
                id={`project-${index}`}
                className={isVisible[`project-${index}`] ? 'visible' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px 0 rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={styles.projectImage}>
                  {project.icon}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)`
                  }}></div>
                  <div style={{
                    ...styles.statusBadge,
                    background: project.status === 'Live' ? 'rgba(16, 185, 129, 0.9)' : 
                               project.status === 'Beta Testing' ? 'rgba(251, 191, 36, 0.9)' : 
                               'rgba(59, 130, 246, 0.9)'
                  }}>
                    {project.status}
                  </div>
                </div>
                
                <div style={styles.projectContent}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  
                  <div style={styles.techStack}>
                    <h4 style={styles.techTitle}>Technologies Used:</h4>
                    <div style={styles.techTags}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} style={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div style={styles.projectFeatures}>
                    <h4 style={styles.techTitle}>Key Features:</h4>
                    <ul style={styles.featuresList}>
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} style={styles.featureItem}>
                          <span style={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={styles.projectActions}>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.primaryAction}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.secondaryAction}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#6366f1';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'white';
                          e.target.style.color = '#6366f1';
                        }}
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
