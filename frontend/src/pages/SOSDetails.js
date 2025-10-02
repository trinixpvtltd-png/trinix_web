import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const SOSDetails = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

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
      color: '#dc2626',
      padding: '12px 20px',
      borderRadius: '8px',
      border: '2px solid #dc2626',
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
      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      margin: '0 auto 32px',
      boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3)'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '16px',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.375rem',
      color: '#64748b',
      maxWidth: '900px',
      margin: '0 auto 24px',
      lineHeight: '1.6',
      fontWeight: '500'
    },
    heroDescription: {
      fontSize: '1.125rem',
      color: '#64748b',
      maxWidth: '1000px',
      margin: '0 auto',
      lineHeight: '1.7'
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
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
      marginBottom: '80px'
    },
    featureCard: {
      background: 'white',
      padding: '32px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    featureCardExpanded: {
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      borderColor: '#dc2626'
    },
    featureHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    featureTitle: {
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    featureIcon: {
      fontSize: '1.5rem'
    },
    expandIcon: {
      fontSize: '1.25rem',
      color: '#64748b',
      transition: 'transform 0.3s ease'
    },
    expandIconRotated: {
      transform: 'rotate(180deg)'
    },
    featureDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginTop: '16px'
    },
    featureContent: {
      marginTop: '24px',
      padding: '24px',
      background: '#f8fafc',
      borderRadius: '12px',
      display: 'none'
    },
    featureContentExpanded: {
      display: 'block'
    },
    workflowSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '80px 0'
    },
    workflowTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      textAlign: 'center'
    },
    workflowSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '60px'
    },
    workflowSteps: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(5, 1fr)',
      gap: '32px',
      position: 'relative'
    },
    workflowStep: {
      background: 'white',
      padding: '32px 24px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      position: 'relative'
    },
    stepNumber: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.125rem',
      fontWeight: '700',
      margin: '0 auto 16px'
    },
    stepTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '8px'
    },
    braceletSection: {
      padding: '80px 0'
    },
    braceletTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      textAlign: 'center'
    },
    braceletSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 60px',
      lineHeight: '1.6'
    },
    tiersGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
      gap: '32px'
    },
    tierCard: {
      background: 'white',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    tierBadge: {
      position: 'absolute',
      top: '24px',
      right: '24px',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    tierBadgePremium: {
      background: '#fef3c7',
      color: '#92400e'
    },
    tierBadgeStandard: {
      background: '#dbeafe',
      color: '#1d4ed8'
    },
    tierBadgeBasic: {
      background: '#dcfce7',
      color: '#166534'
    },
    tierTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px'
    },
    tierSubtitle: {
      color: '#64748b',
      fontSize: '1rem',
      marginBottom: '24px'
    },
    tierDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '32px'
    },
    tierButton: {
      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #374151 100%)',
      padding: '80px 0',
      textAlign: 'center',
      color: 'white'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '24px'
    },
    ctaDescription: {
      fontSize: '1.25rem',
      maxWidth: '600px',
      margin: '0 auto 40px',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  const softwareFeatures = [
    {
      id: 'distress',
      title: 'Distress Signal (SOS) & Media Upload',
      icon: '🚨',
      description: 'Live emergency alerts with location, credentials, and media verification',
      content: 'Advanced emergency alert system that instantly broadcasts distress signals with GPS location, user credentials verification, and real-time media upload capabilities. Features include automatic authority notification, emergency contact alerts, and verified media documentation for evidence and response coordination.'
    },
    {
      id: 'social',
      title: 'Social Media Handle',
      icon: '📱',
      description: 'Multi-level social platform for services, support, and verified content',
      content: 'Comprehensive social networking platform designed for emergency response and community support. Features verified user profiles, emergency service directories, real-time communication channels, and community-driven support networks with content verification systems.'
    },
    {
      id: 'ngos',
      title: 'NGOs & Social Sector',
      icon: '🤝',
      description: 'Verified NGO profiles and platform-led campaigns for social impact',
      content: 'Dedicated platform for NGOs and social organizations with verified profiles, campaign management tools, resource allocation systems, and impact tracking. Includes donation management, volunteer coordination, and campaign analytics for maximum social impact.'
    },
    {
      id: 'transparency',
      title: 'Resource Transparency List',
      icon: '📊',
      description: 'Three comprehensive lists with real-time updates for full accountability',
      content: 'Real-time transparency dashboard featuring resource allocation tracking, fund distribution monitoring, and impact measurement systems. Provides public access to resource utilization data, donation tracking, and outcome metrics for complete accountability.'
    },
    {
      id: 'revelations',
      title: 'Revelations/Exposure',
      icon: '🔍',
      description: 'Anonymous reporting system for public, corporate, and state-sponsored issues',
      content: 'Secure anonymous reporting platform for exposing corruption, malpractice, and systemic issues. Features encrypted communication, identity protection, evidence documentation, and secure whistleblower support with legal protection frameworks.'
    }
  ];

  const workflowSteps = [
    { title: 'SOS Trigger', description: 'Emergency activation' },
    { title: 'Media Verification', description: 'Content validation' },
    { title: 'Authority Response', description: 'Official notification' },
    { title: 'Social & Resource Support', description: 'Community mobilization' },
    { title: 'Transparency Reporting', description: 'Outcome tracking' }
  ];

  const braceletTiers = [
    {
      title: 'Tier 1',
      subtitle: 'Full Sensor Suite',
      badge: 'Premium',
      badgeStyle: 'premium',
      description: 'Complete safety monitoring with all advanced sensors'
    },
    {
      title: 'Tier 2',
      subtitle: 'Reduced Sensors',
      badge: 'Standard',
      badgeStyle: 'standard',
      description: 'Essential safety features with core monitoring capabilities'
    },
    {
      title: 'Tier 3',
      subtitle: 'Essential Safety',
      badge: 'Basic',
      badgeStyle: 'basic',
      description: 'Core safety features for basic emergency response'
    }
  ];

  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
         
          
          <div style={styles.heroIcon}>
            🆘
          </div>
          
          <h1 style={styles.heroTitle}>Sankatmochan Outreach Service (SOS)</h1>
          <p style={styles.heroSubtitle}>
            Empowering communities, enabling transparency, and ensuring rapid, verified emergency response.
          </p>
          <p style={styles.heroDescription}>
            SOS is a comprehensive emergency response platform that combines advanced software capabilities 
            with innovative hardware solutions to create a seamless safety network. From instant distress 
            signals to verified media uploads, from multi-level social coordination to complete resource 
            transparency, SOS ensures that help is always within reach.
          </p>
        </div>
      </section>

      {/* Software Features Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Software Features</h2>
          <p style={styles.sectionSubtitle}>
            Five core software segments working together to create a comprehensive emergency response ecosystem.
          </p>
          
          <div style={styles.featuresGrid}>
            {softwareFeatures.map((feature) => (
              <div 
                key={feature.id} 
                style={{
                  ...styles.featureCard,
                  ...(expandedFeature === feature.id ? styles.featureCardExpanded : {})
                }}
                onClick={() => toggleFeature(feature.id)}
              >
                <div style={styles.featureHeader}>
                  <h3 style={styles.featureTitle}>
                    <span style={styles.featureIcon}>{feature.icon}</span>
                    {feature.title}
                  </h3>
                  <span style={{
                    ...styles.expandIcon,
                    ...(expandedFeature === feature.id ? styles.expandIconRotated : {})
                  }}>
                    ▼
                  </span>
                </div>
                <p style={styles.featureDescription}>{feature.description}</p>
                <div style={{
                  ...styles.featureContent,
                  ...(expandedFeature === feature.id ? styles.featureContentExpanded : {})
                }}>
                  <p style={{color: '#4b5563', lineHeight: '1.6'}}>{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Workflow Section */}
      <section style={styles.workflowSection}>
        <div style={styles.container}>
          <h2 style={styles.workflowTitle}>Complete Workflow</h2>
          <p style={styles.workflowSubtitle}>
            End-to-end emergency response process from trigger to resolution
          </p>
          
          <div style={styles.workflowSteps}>
            {workflowSteps.map((step, index) => (
              <div key={index} style={styles.workflowStep}>
                <div style={styles.stepNumber}>{index + 1}</div>
                <h4 style={styles.stepTitle}>{step.title}</h4>
                <p style={{color: '#64748b', fontSize: '0.875rem'}}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOS Smart Bracelet Section */}
      <section style={styles.braceletSection}>
        <div style={styles.container}>
          <h2 style={styles.braceletTitle}>SOS Smart Bracelet: Always-On Safety</h2>
          <p style={styles.braceletSubtitle}>
            Our innovative hardware extension ensures safety even in low-connectivity or phone-less contexts, 
            making emergency response accessible to everyone regardless of their technological access. The SOS 
            Smart Bracelet operates independently of smartphones, providing continuous monitoring and instant 
            emergency response capabilities through three distinct tiers designed for different needs and accessibility levels.
          </p>
          
          <div style={styles.tiersGrid}>
            {braceletTiers.map((tier, index) => (
              <div key={index} style={styles.tierCard}>
                <span style={{
                  ...styles.tierBadge,
                  ...(tier.badgeStyle === 'premium' ? styles.tierBadgePremium :
                      tier.badgeStyle === 'standard' ? styles.tierBadgeStandard : styles.tierBadgeBasic)
                }}>
                  {tier.badge}
                </span>
                <h3 style={styles.tierTitle}>{tier.title}</h3>
                <p style={styles.tierSubtitle}>{tier.subtitle}</p>
                <p style={styles.tierDescription}>{tier.description}</p>
                <button style={styles.tierButton}>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Join the Mission</h2>
          <p style={styles.ctaDescription}>
            Be part of the solution. Whether you're a volunteer, NGO, supporter, or someone who believes 
            in making communities safer, there's a place for you in the SOS network.
          </p>
          
          <div style={styles.buttonContainer}>
            <a 
              href="https://sos-platform.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 32px rgba(220, 38, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🚀 Start Your Journey
            </a>
            <Link 
              to="/contact" 
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              🤝 Get Involved
            </Link>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default SOSDetails;