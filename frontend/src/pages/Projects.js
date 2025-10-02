import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Projects = () => {
  const [isVisible, setIsVisible] = useState({});
  const [imageLoading, setImageLoading] = useState({});

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
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)'
    },
    projectImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    projectImageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.85), rgba(139, 92, 246, 0.85))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: 'white',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    imageLoader: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#64748b'
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
      image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
      status: 'Live',
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
     
    },
    {
      id: 2,
      category: 'Real Estate',
      title: 'PropGo Platform',
      description: 'Digital platform designed to simplify real estate transactions by connecting Property Owners with Property Agents through a secure and efficient interface. Features verified listings, secure interactions, and streamlined experience for all stakeholders.',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center',
      status: 'Live',
      features: [
        'Verified property listings system',
        'Direct communication between owners and agents',
        'Secure property verification process',
        'Agent subscription management',
        'Real-time property status updates',
        'Advanced search and filtering',
        'Document sharing and storage',
        'Revenue tracking and analytics'
      ],
      liveUrl: 'https://propgo-platform.trinix.com',
      
    },
    {
      id: 3,
      category: 'Emergency Services',
      title: 'SOS Emergency Network',
      description: 'Emergency response system ensuring rapid assistance and safety. Comprehensive platform connecting emergency responders, dispatchers, and civilians through real-time communication and location-based services for immediate crisis response.',
      icon: '�',
      image: 'https://images.pexels.com/photos/249348/pexels-photo-249348.jpeg',
      status: 'Live',
      features: [
        'Real-time emergency alert system',
        'GPS location tracking and mapping',
        'Multi-channel communication platform',
        'Emergency responder dispatch system',
        'Crisis escalation management',
        'Community safety network',
        'Emergency contact management',
        'Incident reporting and analytics'
      ],
      liveUrl: 'https://sos-emergency-network.trinix.com',
     
    },
    {
      id: 4,
      category: 'Healthcare',
      title: 'MedGO Healthcare',
      description: 'HIPAA-compliant telemedicine platform enabling secure video consultations, patient record management, prescription handling, and appointment scheduling. Features end-to-end encryption and healthcare provider verification.',
      icon: '🏥',
      status: 'Beta Testing',
      image: 'https://media.istockphoto.com/id/1354898568/photo/shot-of-an-unrecognisable-businesswoman-using-a-smartphone-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=DE-DP2A_e4TdReJG6MVHppVSvHa7OcOLsnjeTdly4Rk=',
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
                  
                  // Scale the image on hover
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  
                  // Reset image scale
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={styles.projectImage}>
                  {imageLoading[project.id] !== false && (
                    <div style={styles.imageLoader}>
                      {project.icon}
                    </div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      ...styles.projectImg,
                      opacity: imageLoading[project.id] === false ? 1 : 0
                    }}
                    onError={(e) => {
                      setImageLoading(prev => ({ ...prev, [project.id]: 'error' }));
                      e.target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      setImageLoading(prev => ({ ...prev, [project.id]: false }));
                    }}
                  />
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
                      <Link 
                        to={
                          project.title === "Eventify Platform" ? "/projects/eventify" :
                          project.title === "SOS Emergency Network" ? "/projects/sos" :
                          project.title === "MedGO Healthcare" ? "/projects/medgo" :
                          project.title === "PropGo Platform" ? "/projects/propgo" :
                          project.liveUrl
                        }
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
                        Learn More
                      </Link>
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
      <Footer />
    </div>
  );
};

export default Projects;
