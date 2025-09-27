import React from 'react';

const WhoWeServe = () => {
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
    clientsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '50px 0'
    },
    clientCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00a8ff, #0078d4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    clientIcon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      display: 'block'
    },
    clientTitle: {
      fontSize: '1.8rem',
      color: '#0078d4',
      marginBottom: '15px',
      fontWeight: '600'
    },
    clientDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '1.1rem',
      marginBottom: '20px'
    },
    clientServices: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center'
    },
    serviceTag: {
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    }
  };

  const clients = [
    {
      icon: '🏢',
      title: 'Enterprise Corporations',
      description: 'Large-scale businesses seeking digital transformation and operational efficiency through cutting-edge technology solutions.',
      services: ['Digital Transformation', 'Cloud Migration', 'Enterprise Software', 'Data Analytics']
    },
    {
      icon: '🏪',
      title: 'Small & Medium Businesses',
      description: 'Growing companies looking to scale their operations with cost-effective and scalable technology infrastructure.',
      services: ['Website Development', 'E-commerce', 'Business Automation', 'Digital Marketing']
    },
    {
      icon: '🏥',
      title: 'Healthcare Organizations',
      description: 'Medical institutions requiring secure, compliant, and efficient digital health solutions for better patient care.',
      services: ['Health Tech', 'Patient Management', 'Telemedicine', 'Data Security']
    },
    {
      icon: '🎓',
      title: 'Educational Institutions',
      description: 'Schools, colleges, and universities embracing digital learning and administrative management systems.',
      services: ['E-learning Platforms', 'Student Management', 'Virtual Classrooms', 'Educational Apps']
    },
    {
      icon: '🏦',
      title: 'Financial Services',
      description: 'Banks, fintech companies, and financial institutions requiring secure and innovative financial technology solutions.',
      services: ['Fintech Solutions', 'Mobile Banking', 'Payment Systems', 'Blockchain']
    },
    {
      icon: '🏭',
      title: 'Manufacturing & Industrial',
      description: 'Manufacturing companies looking to optimize production processes through smart technology and IoT solutions.',
      services: ['IoT Solutions', 'Industrial Automation', 'Supply Chain', 'Quality Control']
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>Who We Serve</h1>
        <p style={styles.heroSubtitle}>
          Empowering diverse industries with tailored technology solutions that drive growth and innovation
        </p>
      </section>

      <div style={styles.clientsGrid}>
        {clients.map((client, index) => (
          <div 
            key={index} 
            style={styles.clientCard} 
            className="slide-right"
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={styles.clientIcon}>{client.icon}</div>
            <h3 style={styles.clientTitle}>{client.title}</h3>
            <p style={styles.clientDescription}>{client.description}</p>
            <div style={styles.clientServices}>
              {client.services.map((service, serviceIndex) => (
                <span key={serviceIndex} style={styles.serviceTag}>{service}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeServe;
