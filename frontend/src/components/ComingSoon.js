import React from 'react';

const ComingSoon = ({ 
  title = "🚀 COMING SOON..!", 
  description = "We're working hard to bring you an amazing experience. Stay tuned for exciting updates and new features!",
  customStyles = {}
}) => {
  const styles = {
    // Coming Soon Banner Styles - Homepage Theme
    comingSoonSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
      padding: '120px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh',
      ...customStyles.section
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      ...customStyles.container
    },
    comingSoonBanner: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '800px',
      margin: '0 auto',
      ...customStyles.banner
    },
    comingSoonTitle: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      marginBottom: '32px',
      lineHeight: '1.1',
      letterSpacing: '-0.025em',
      color: '#1e293b',
      ...customStyles.title
    },
    comingSoonHighlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      ...customStyles.highlight
    },
    comingSoonDescription: {
      fontSize: '1.25rem',
      lineHeight: '1.7',
      color: '#64748b',
      fontWeight: '400',
      maxWidth: '600px',
      margin: '0 auto',
      ...customStyles.description
    },
    // Floating geometric elements for coming soon banner
    comingSoonShape1: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '100px',
      height: '100px',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08))',
      borderRadius: '20px',
      transform: 'rotate(12deg)',
      zIndex: 1,
      animation: 'float1 8s ease-in-out infinite'
    },
    comingSoonShape2: {
      position: 'absolute',
      top: '30%',
      right: '15%',
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.12))',
      borderRadius: '50%',
      zIndex: 1,
      animation: 'float2 6s ease-in-out infinite'
    },
    comingSoonShape3: {
      position: 'absolute',
      bottom: '25%',
      left: '20%',
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))',
      borderRadius: '15px',
      transform: 'rotate(-15deg)',
      zIndex: 1,
      animation: 'float3 7s ease-in-out infinite'
    },
    comingSoonShape4: {
      position: 'absolute',
      bottom: '35%',
      right: '10%',
      width: '90px',
      height: '90px',
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.06), rgba(59, 130, 246, 0.06))',
      borderRadius: '18px',
      transform: 'rotate(25deg)',
      zIndex: 1,
      animation: 'float4 9s ease-in-out infinite'
    }
  };

  // Parse title to handle highlighting
  const renderTitle = () => {
    if (typeof title === 'string' && title.includes('COMING SOON')) {
      const parts = title.split('COMING SOON');
      return (
        <>
          {parts[0]}
          <span style={styles.comingSoonHighlight}>COMING SOON</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <>
      {/* CSS Animations for floating shapes */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: rotate(12deg) translateY(0px); }
            50% { transform: rotate(12deg) translateY(-20px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float3 {
            0%, 100% { transform: rotate(-15deg) translateY(0px); }
            50% { transform: rotate(-15deg) translateY(-25px); }
          }
          @keyframes float4 {
            0%, 100% { transform: rotate(25deg) translateY(0px); }
            50% { transform: rotate(25deg) translateY(-18px); }
          }
        `}
      </style>

      {/* Coming Soon Banner - Homepage Theme */}
      <section style={styles.comingSoonSection}>
        {/* Floating geometric shapes */}
        <div style={styles.comingSoonShape1}></div>
        <div style={styles.comingSoonShape2}></div>
        <div style={styles.comingSoonShape3}></div>
        <div style={styles.comingSoonShape4}></div>
        
        <div style={styles.container}>
          <div style={styles.comingSoonBanner}>
            <h2 style={styles.comingSoonTitle}>
              {renderTitle()}
            </h2>
            <p style={styles.comingSoonDescription}>
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;