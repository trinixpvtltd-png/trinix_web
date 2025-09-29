import React, { useEffect, useState } from 'react';

const WhoWeServe = () => {
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
    
    // Decorative elements
    decorativeShape1: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '80px',
      height: '80px',
      background: 'rgba(99, 102, 241, 0.08)',
      borderRadius: '16px',
      transform: 'rotate(15deg)',
      zIndex: 1,
      animation: 'float 6s ease-in-out infinite'
    },
    decorativeShape2: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '60px',
      height: '60px',
      background: 'rgba(139, 92, 246, 0.1)',
      borderRadius: '50%',
      zIndex: 1,
      animation: 'float 4s ease-in-out infinite reverse'
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
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '32px',
      marginTop: '80px'
    },
    industryCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px 32px',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px'
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginRight: '16px',
      filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.1))'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e293b',
      lineHeight: '1.3'
    },
    cardDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginBottom: '24px'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 24px 0'
    },
    featureItem: {
      color: '#475569',
      fontSize: '0.9375rem',
      marginBottom: '10px',
      paddingLeft: '20px',
      position: 'relative',
      lineHeight: '1.5'
    },
    featureBullet: {
      position: 'absolute',
      left: '0',
      top: '2px',
      color: '#6366f1',
      fontWeight: '600'
    },
    benefitsSection: {
      marginTop: '32px',
      padding: '24px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
    },
    benefitsTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px'
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    benefitItem: {
      color: '#64748b',
      fontSize: '0.9375rem',
      marginBottom: '8px',
      paddingLeft: '20px',
      position: 'relative'
    },
    checkIcon: {
      position: 'absolute',
      left: '0',
      top: '2px',
      color: '#10b981',
      fontWeight: '600'
    }
  };

  const industries = [
    {
      icon: '🏢',
      title: 'Enterprise Corporations',
      description: 'Large-scale businesses seeking digital transformation and operational efficiency through cutting-edge technology solutions that scale with their growth.',
      features: [
        'Enterprise Resource Planning (ERP) Integration',
        'Digital Workflow Automation & Process Optimization',
        'Advanced Data Analytics & Business Intelligence',
        'Cloud Migration & Infrastructure Modernization',
        'Compliance Management & Security Frameworks',
        'Custom API Development & Third-party Integrations'
      ],
      benefits: [
        'Reduced operational costs by up to 40%',
        'Improved decision-making through real-time insights',
        'Enhanced employee productivity and satisfaction',
        'Streamlined compliance and risk management'
      ]
    },
    {
      icon: '🏪',
      title: 'Small & Medium Businesses',
      description: 'Growing companies looking to scale their operations with cost-effective and scalable technology infrastructure that grows with their business.',
      features: [
        'Professional Website Development & E-commerce',
        'Customer Relationship Management (CRM) Systems',
        'Digital Marketing Automation & SEO',
        'Cloud-based Collaboration Tools',
        'Basic Security & Data Protection',
        'Mobile-responsive Design & Applications'
      ],
      benefits: [
        'Increased online visibility and customer reach',
        'Automated marketing campaigns that convert',
        'Better customer data management and insights',
        'Cost-effective technology solutions that scale'
      ]
    },
    {
      icon: '🏥',
      title: 'Healthcare Organizations',
      description: 'Medical institutions requiring secure, compliant, and efficient digital health solutions for better patient care and operational excellence.',
      features: [
        'HIPAA Compliant Systems & Data Protection',
        'Electronic Health Records (EHR) Integration',
        'Telemedicine Platforms & Patient Portals',
        'Medical Device Integration & IoT Solutions',
        'Healthcare Analytics & Reporting Systems',
        'Appointment Scheduling & Practice Management'
      ],
      benefits: [
        'Improved patient outcomes and satisfaction',
        'Reduced administrative overhead and costs',
        'Enhanced data security and compliance',
        'Better care coordination and communication'
      ]
    },
    {
      icon: '🎓',
      title: 'Educational Institutions',
      description: 'Schools, colleges, and universities embracing digital learning and administrative management systems for modern education delivery.',
      features: [
        'Learning Management Systems (LMS)',
        'Student Information Systems & Portals',
        'Virtual Classroom & Video Conferencing',
        'Campus Management & Administrative Tools',
        'Educational Content Management Platforms',
        'Assessment & Grading Automation'
      ],
      benefits: [
        'Enhanced student engagement and learning outcomes',
        'Streamlined administrative processes',
        'Better parent-teacher communication',
        'Data-driven insights for academic improvement'
      ]
    },
    {
      icon: '🏦',
      title: 'Financial Services',
      description: 'Banks, fintech companies, and financial institutions requiring secure and innovative financial technology solutions for modern banking.',
      features: [
        'Core Banking Software Solutions',
        'Payment Processing & Digital Wallets',
        'Fraud Detection & Prevention Systems',
        'Regulatory Compliance & Reporting Tools',
        'Mobile Banking & Customer Portals',
        'Investment Management & Trading Platforms'
      ],
      benefits: [
        'Enhanced security and fraud protection',
        'Improved customer experience and retention',
        'Automated compliance and risk management',
        'Reduced operational costs and processing time'
      ]
    },
    {
      icon: '🏭',
      title: 'Manufacturing & Industrial',
      description: 'Manufacturing companies looking to optimize production processes through smart technology, IoT solutions, and Industry 4.0 implementations.',
      features: [
        'IoT & Smart Factory Solutions',
        'Supply Chain Management & Optimization',
        'Production Monitoring & Quality Control',
        'Predictive Maintenance Systems',
        'Inventory Management & Automation',
        'Industrial Data Analytics & Reporting'
      ],
      benefits: [
        'Increased production efficiency and output',
        'Reduced downtime and maintenance costs',
        'Better quality control and product consistency',
        'Optimized supply chain and inventory management'
      ]
    },
    {
      icon: '🛒',
      title: 'Retail & E-commerce',
      description: 'Retail businesses and e-commerce companies seeking to enhance customer experience and optimize operations through digital innovation.',
      features: [
        'E-commerce Platform Development',
        'Point of Sale (POS) Systems',
        'Inventory Management & Analytics',
        'Customer Analytics & Personalization',
        'Multi-channel Marketing Automation',
        'Supply Chain & Logistics Optimization'
      ],
      benefits: [
        'Increased sales and customer conversion rates',
        'Better inventory management and forecasting',
        'Enhanced customer experience and loyalty',
        'Data-driven marketing and personalization'
      ]
    },
    {
      icon: '🏨',
      title: 'Hospitality & Tourism',
      description: 'Hotels, restaurants, and tourism companies looking to enhance guest experience and streamline operations through technology.',
      features: [
        'Property Management Systems (PMS)',
        'Online Booking & Reservation Platforms',
        'Customer Experience Management',
        'Revenue Management & Analytics',
        'Mobile Apps & Digital Concierge',
        'Integration with Travel Platforms'
      ],
      benefits: [
        'Improved guest satisfaction and reviews',
        'Increased direct bookings and revenue',
        'Streamlined operations and staff efficiency',
        'Better pricing strategies and occupancy rates'
      ]
    },
    {
      icon: '🚛',
      title: 'Logistics & Transportation',
      description: 'Logistics companies and transportation providers seeking to optimize routes, manage fleets, and improve delivery efficiency.',
      features: [
        'Fleet Management & GPS Tracking',
        'Route Optimization & Planning',
        'Warehouse Management Systems',
        'Real-time Delivery Tracking',
        'Driver Management & Safety Systems',
        'Supply Chain Visibility & Analytics'
      ],
      benefits: [
        'Reduced fuel costs and delivery times',
        'Improved customer satisfaction and transparency',
        'Better driver safety and compliance',
        'Optimized warehouse and inventory operations'
      ]
    }
  ];

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
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
        <div style={styles.decorativeShape1}></div>
        <div style={styles.decorativeShape2}></div>
        
        <div style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            Who We <span style={styles.heroHighlight}>Serve</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Empowering diverse industries with tailored technology solutions that drive growth, 
            innovation, and digital transformation across multiple business sectors and organizational scales.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div 
                key={index}
                style={styles.industryCard}
                data-animate 
                id={`industry-${index}`}
                className={isVisible[`industry-${index}`] ? 'visible' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={styles.cardHeader}>
                  <span style={styles.cardIcon}>{industry.icon}</span>
                  <h3 style={styles.cardTitle}>{industry.title}</h3>
                </div>
                
                <p style={styles.cardDescription}>{industry.description}</p>
                
                <div style={{marginBottom: '24px'}}>
                  <h4 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px'}}>Our Solutions:</h4>
                  <ul style={styles.featuresList}>
                    {industry.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={styles.featureBullet}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={styles.benefitsSection}>
                  <h4 style={styles.benefitsTitle}>Key Benefits:</h4>
                  <ul style={styles.benefitsList}>
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} style={styles.benefitItem}>
                        <span style={styles.checkIcon}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;
