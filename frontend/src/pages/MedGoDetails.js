import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
const MedGoDetails = () => {
  const [email, setEmail] = useState('');

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      background: '#ffffff'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '120px 0 80px',
      textAlign: 'center',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    backButton: {
      background: 'white',
      color: '#10b981',
      padding: '12px 20px',
      borderRadius: '8px',
      border: '2px solid #10b981',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '40px'
    },
    heroIcon: {
      width: '120px',
      height: '120px',
      background: 'linear-gradient(135deg, #10b981, #059669)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 32px',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '3.5rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    section: {
      padding: '80px 0'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 60px',
      lineHeight: '1.6'
    },
    featuresSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '80px 0'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '32px',
      marginBottom: '60px'
    },
    featureItem: {
      background: 'white',
      padding: '32px 24px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '16px',
      display: 'block'
    },
    featureTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '8px'
    },
    statsSection: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      padding: '80px 0',
      color: 'white'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '40px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      display: 'block',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '1rem',
      opacity: 0.9
    },
    whyChooseGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: '40px',
      marginBottom: '80px'
    },
    whyChooseCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    whyChooseIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #10b981, #059669)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '24px'
    },
    whyChooseTitle: {
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '16px'
    },
    whyChooseDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem'
    },
    specialtiesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '24px',
      marginBottom: '60px'
    },
    specialtyCard: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    specialtyTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginTop: '12px'
    },
    howItWorksSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '80px 0'
    },
    stepsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
      gap: '40px'
    },
    stepCard: {
      background: 'white',
      padding: '40px 32px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      position: 'relative'
    },
    stepNumber: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #10b981, #059669)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: '0 auto 24px'
    },
    stepTitle: {
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '16px'
    },
    stepDescription: {
      color: '#64748b',
      lineHeight: '1.6'
    },
    earlyAccessSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #374151 100%)',
      padding: '80px 0',
      textAlign: 'center',
      color: 'white'
    },
    earlyAccessTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '24px'
    },
    earlyAccessDescription: {
      fontSize: '1.25rem',
      maxWidth: '600px',
      margin: '0 auto 40px',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    emailForm: {
      display: 'flex',
      gap: '16px',
      maxWidth: '400px',
      margin: '0 auto',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    emailInput: {
      flex: '1',
      minWidth: '250px',
      padding: '16px 20px',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      fontSize: '1rem',
      outline: 'none'
    },
    signupButton: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    disclaimer: {
      fontSize: '0.875rem',
      opacity: 0.8,
      marginTop: '16px'
    }
  };

  const features = [
    { icon: '📅', title: 'Instant appointment booking' },
    { icon: '✅', title: 'Verified healthcare providers' },
    { icon: '👨‍⚕️', title: 'Specialist consultations' },
    { icon: '📱', title: 'Digital health records' }
  ];

  const whyChooseFeatures = [
    {
      icon: '⚡',
      title: 'Easy Booking',
      description: 'Book appointments with top doctors in minutes'
    },
    {
      icon: '📍',
      title: 'Find Nearby',
      description: 'Discover healthcare providers in your area'
    },
    {
      icon: '🩺',
      title: 'Specialist Care',
      description: 'Access to specialists across all medical fields'
    },
    {
      icon: '🌟',
      title: '24/7 Support',
      description: 'Round-the-clock healthcare assistance'
    }
  ];

  const specialties = [
    { icon: '❤️', title: 'Cardiology' },
    { icon: '🧴', title: 'Dermatology' },
    { icon: '🦴', title: 'Orthopedics' },
    { icon: '👶', title: 'Pediatrics' },
    { icon: '🧠', title: 'Neurology' },
    { icon: '🎗️', title: 'Oncology' },
    { icon: '🧘', title: 'Psychiatry' },
    { icon: '⚕️', title: 'General Medicine' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Find Doctor',
      description: 'Search for specialists in your area'
    },
    {
      number: '2',
      title: 'Book Appointment',
      description: 'Choose time slot and book instantly'
    },
    {
      number: '3',
      title: 'Get Care',
      description: 'Visit doctor and get treatment'
    }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! We'll notify you when MedGo is available. Email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
         
          
          <div style={styles.heroIcon}>
            🏥
          </div>
          
          <h1 style={styles.heroTitle}>MedGo Healthcare</h1>
          <p style={styles.heroSubtitle}>
            Connect with top healthcare providers, book appointments instantly, and get the care you deserve. 
            Your health, simplified.
          </p>
        </div>
      </section>

      {/* 
        Healthcare Made Simple Section - Commented Out
        <section style={styles.featuresSection}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Healthcare Made Simple</h2>
            <p style={styles.sectionSubtitle}>
              MedGo connects you with verified healthcare professionals, making it easy to find the right doctor and book appointments that fit your schedule.
            </p>
            
            <div style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  style={styles.featureItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <span style={styles.featureIcon}>{feature.icon}</span>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      */}

      {/* 
        Stats Section - Commented Out
        <section style={styles.statsSection}>
          <div style={styles.container}>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>850+</span>
                <span style={styles.statLabel}>Verified Doctors</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>25K+</span>
                <span style={styles.statLabel}>Happy Patients</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>4.8</span>
                <span style={styles.statLabel}>Average Rating</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>15min</span>
                <span style={styles.statLabel}>Avg Wait Time</span>
              </div>
            </div>
          </div>
        </section>
      */}

      {/* 
        Why Choose MedGo Section - Commented Out
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Why Choose MedGo</h2>
            <p style={styles.sectionSubtitle}>
              Comprehensive healthcare solutions designed for modern patients.
            </p>
            
            <div style={styles.whyChooseGrid}>
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  style={styles.whyChooseCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={styles.whyChooseIcon}>
                    {feature.icon}
                  </div>
                  <h3 style={styles.whyChooseTitle}>{feature.title}</h3>
                  <p style={styles.whyChooseDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      */}

      {/* 
        Medical Specialties Section - Commented Out
        <section style={styles.featuresSection}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Medical Specialties</h2>
            <p style={styles.sectionSubtitle}>
              Access to specialists across all major medical fields.
            </p>
            
            <div style={styles.specialtiesGrid}>
              {specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  style={styles.specialtyCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#10b981';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div style={{fontSize: '2rem'}}>{specialty.icon}</div>
                  <h4 style={styles.specialtyTitle}>{specialty.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      */}

      {/* 
        How It Works Section - Commented Out
        <section style={styles.howItWorksSection}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>How It Works</h2>
            <p style={styles.sectionSubtitle}>
              Simple three-step process to get the care you need.
            </p>
            
            <div style={styles.stepsGrid}>
              {steps.map((step, index) => (
                <div key={index} style={styles.stepCard}>
                  <div style={styles.stepNumber}>{step.number}</div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      */}

      {/* Coming Soon Component for MedGo */}
      <ComingSoon 
        title="🏥 MedGo COMING SOON..!"
        description="We're revolutionizing healthcare with cutting-edge technology. Get ready for seamless doctor appointments, instant consultations, and personalized healthcare management."
      />

      {/* 
        Early Access Section - Commented Out
        <section style={styles.earlyAccessSection}>
          <div style={styles.container}>
            <h2 style={styles.earlyAccessTitle}>Get Early Access</h2>
            <p style={styles.earlyAccessDescription}>
              Be among the first to experience the future of healthcare. Sign up for early access and exclusive updates.
            </p>
            
            <form onSubmit={handleEmailSubmit} style={styles.emailForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.emailInput}
                required
              />
              <button 
                type="submit" 
                style={styles.signupButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Sign Up
              </button>
            </form>
            
            <p style={styles.disclaimer}>
              We'll notify you when MedGo is available in your area
            </p>
          </div>
        </section>
      */}
        <Footer/>
    </div>
  );
};

export default MedGoDetails;