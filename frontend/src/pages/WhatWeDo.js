import React, { useEffect, useState } from 'react';

const WhatWeDo = () => {
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
      marginTop: '80px'
    },
    serviceCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px 32px',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
      position: 'relative'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '24px',
      display: 'block',
      filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.1))'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '16px',
      lineHeight: '1.3'
    },
    serviceDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginBottom: '24px'
    },
    techStack: {
      marginBottom: '24px'
    },
    techStackTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '24px'
    },
    techTag: {
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      color: '#475569',
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: '1px solid #e2e8f0'
    },
    processSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      marginTop: '24px'
    },
    processTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '16px'
    },
    processList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    processItem: {
      color: '#64748b',
      fontSize: '0.9375rem',
      marginBottom: '8px',
      paddingLeft: '24px',
      position: 'relative',
      lineHeight: '1.5'
    },
    processNumber: {
      position: 'absolute',
      left: '0',
      top: '0',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
      fontWeight: '600'
    }
  };

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance, scalability, and user experience that drives business growth.',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
      process: [
        'Discovery & Requirements Analysis',
        'UI/UX Design & Prototyping',
        'Frontend & Backend Development',
        'Testing & Quality Assurance',
        'Deployment & Optimization',
        'Maintenance & Support'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms with seamless performance.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'GraphQL', 'AWS Mobile'],
      process: [
        'Market Research & Strategy',
        'UX/UI Design & User Testing',
        'Native/Cross-platform Development',
        'API Integration & Backend',
        'App Store Optimization',
        'Post-launch Analytics & Updates'
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to enhance business agility, reduce operational costs, and ensure high availability and security.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Monitoring Tools'],
      process: [
        'Cloud Readiness Assessment',
        'Architecture Design & Planning',
        'Migration Strategy & Execution',
        'DevOps & CI/CD Implementation',
        'Security & Compliance Setup',
        'Monitoring & Optimization'
      ]
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence to automate processes, gain valuable business insights, and create competitive advantages.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow', 'Jupyter'],
      process: [
        'Data Assessment & Collection',
        'Model Design & Architecture',
        'Training & Validation',
        'Integration & Deployment',
        'Performance Monitoring',
        'Continuous Learning & Improvement'
      ]
    },
    {
      icon: '🔐',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity with 24/7 monitoring and threat detection.',
      technologies: ['SIEM Tools', 'Penetration Testing', 'Vulnerability Scanners', 'Firewalls', 'Encryption', 'Zero Trust', 'SOAR', 'Threat Intel'],
      process: [
        'Security Assessment & Audit',
        'Risk Analysis & Mitigation Planning',
        'Security Framework Implementation',
        'Employee Training & Awareness',
        'Continuous Monitoring Setup',
        'Incident Response & Recovery'
      ]
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools for better decision-making and business intelligence.',
      technologies: ['Power BI', 'Tableau', 'Apache Spark', 'Elasticsearch', 'Python', 'R', 'SQL', 'Data Warehousing'],
      process: [
        'Data Discovery & Mapping',
        'ETL Pipeline Development',
        'Data Warehouse Design',
        'Analytics & Visualization',
        'Dashboard Creation',
        'Training & Knowledge Transfer'
      ]
    },
    {
      icon: '🛠️',
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with automated CI/CD pipelines, infrastructure as code, and monitoring solutions.',
      technologies: ['Jenkins', 'GitLab CI', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'ELK Stack', 'Nagios'],
      process: [
        'Current Process Assessment',
        'CI/CD Pipeline Design',
        'Infrastructure Automation',
        'Monitoring & Alerting Setup',
        'Security Integration',
        'Team Training & Support'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user experiences that convert visitors into customers while maintaining accessibility and usability standards.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Webflow', 'User Testing Tools'],
      process: [
        'User Research & Personas',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing',
        'Design System Creation'
      ]
    },
    {
      icon: '🔗',
      title: 'API Development',
      description: 'Build robust and scalable APIs that enable seamless integration between systems, third-party services, and modern applications.',
      technologies: ['REST', 'GraphQL', 'gRPC', 'OpenAPI', 'Postman', 'Swagger', 'API Gateway', 'Rate Limiting'],
      process: [
        'API Strategy & Planning',
        'Endpoint Design & Documentation',
        'Development & Testing',
        'Security Implementation',
        'Performance Optimization',
        'Monitoring & Analytics'
      ]
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
            What We <span style={styles.heroHighlight}>Do</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Comprehensive technology solutions designed to transform businesses, accelerate digital growth, 
            and create meaningful impact through innovative approaches and cutting-edge technologies.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={styles.serviceCard}
                data-animate 
                id={`service-${index}`}
                className={isVisible[`service-${index}`] ? 'visible' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <span style={styles.serviceIcon}>{service.icon}</span>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                
                <div style={styles.techStack}>
                  <h4 style={styles.techStackTitle}>Technologies:</h4>
                  <div style={styles.techTags}>
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.processSection}>
                  <h4 style={styles.processTitle}>Our Process:</h4>
                  <ul style={styles.processList}>
                    {service.process.map((step, idx) => (
                      <li key={idx} style={styles.processItem}>
                        <span style={styles.processNumber}>{idx + 1}</span>
                        {step}
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

export default WhatWeDo;
