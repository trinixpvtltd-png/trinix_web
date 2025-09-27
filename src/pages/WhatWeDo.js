import React from 'react';

const WhatWeDo = () => {
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '50px 0'
    },
    serviceCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00a8ff, #0078d4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    serviceIcon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      display: 'block',
      textAlign: 'center'
    },
    serviceTitle: {
      fontSize: '1.8rem',
      color: '#0078d4',
      marginBottom: '15px',
      fontWeight: '600',
      textAlign: 'center'
    },
    serviceDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '1.1rem',
      marginBottom: '20px',
      textAlign: 'center'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0
    },
    featureItem: {
      padding: '8px 0',
      color: '#555',
      fontSize: '0.95rem',
      display: 'flex',
      alignItems: 'center'
    },
    checkmark: {
      color: '#0078d4',
      marginRight: '10px',
      fontWeight: 'bold'
    }
  };

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'Content Management Systems', 'API Development']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Maintenance & Support']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to enhance business agility and reduce costs.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Security & Compliance', 'Cost Optimization']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence to automate processes and gain insights.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbots & Virtual Assistants', 'Data Mining']
    },
    {
      icon: '🔐',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Identity Management', '24/7 Monitoring']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>What We Do</h1>
        <p style={styles.heroSubtitle}>
          Comprehensive technology solutions designed to transform your business and accelerate growth
        </p>
      </section>

      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={styles.serviceCard} 
            className="slide-right"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
            <ul style={styles.featuresList}>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={styles.featureItem}>
                  <span style={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
