import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about-us');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about-us', 'who-we-serve', 'who-we-are', 'what-we-do', 'our-thinking', 'career', 'contact-us'];
      const scrollPosition = window.scrollY + 150;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(15px)',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '8px 0' : '12px 0',
      boxShadow: isScrolled ? '0 4px 25px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0, 120, 212, 0.1)'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: '#0078d4',
      fontSize: '1.6rem',
      fontWeight: '800',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      letterSpacing: '-0.5px'
    },
    logoIcon: {
      width: '45px',
      height: '45px',
      marginRight: '12px',
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      boxShadow: '0 4px 15px rgba(0, 120, 212, 0.3)'
    },
    logoText: {
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    menu: {
      display: window.innerWidth <= 768 ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex',
      alignItems: 'center',
      gap: '35px',
      position: window.innerWidth <= 768 ? 'fixed' : 'static',
      top: window.innerWidth <= 768 ? '70px' : 'auto',
      left: window.innerWidth <= 768 ? '0' : 'auto',
      right: window.innerWidth <= 768 ? '0' : 'auto',
      background: window.innerWidth <= 768 ? 'white' : 'transparent',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      padding: window.innerWidth <= 768 ? '30px' : '0',
      boxShadow: window.innerWidth <= 768 ? '0 8px 25px rgba(0, 0, 0, 0.1)' : 'none'
    },
    menuItem: {
      color: '#2c3e50',
      fontWeight: '600',
      fontSize: '0.95rem',
      position: 'relative',
      transition: 'all 0.3s ease',
      padding: '12px 18px',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      letterSpacing: '0.3px'
    },
    activeItem: {
      color: '#0078d4',
      background: 'rgba(0, 120, 212, 0.08)',
      transform: 'translateY(-1px)'
    },
    contactBtn: {
      background: 'linear-gradient(135deg, #0078d4, #00a8ff)',
      color: 'white',
      borderRadius: '30px',
      padding: '12px 25px',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      fontSize: '0.95rem',
      marginTop: window.innerWidth <= 768 ? '15px' : '0',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(0, 120, 212, 0.3)',
      letterSpacing: '0.5px'
    },
    mobileToggle: {
      display: window.innerWidth <= 768 ? 'flex' : 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '8px'
    },
    toggleSpan: {
      width: '28px',
      height: '3px',
      background: '#0078d4',
      margin: '3px 0',
      transition: 'all 0.3s ease',
      borderRadius: '3px'
    }
  };

  const menuItems = [
    { key: 'about-us', label: 'About Us' },
    { key: 'who-we-serve', label: 'Who We Serve' },
    { key: 'who-we-are', label: 'Who We Are' },
    { key: 'what-we-do', label: 'What We Do' },
    { key: 'our-thinking', label: 'Our Thinking' },
    { key: 'career', label: 'Career' }
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div 
          style={styles.logo} 
          onClick={scrollToTop}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={styles.logoIcon}>T</div>
          <span style={styles.logoText}>TRINIX</span>
        </div>
        
        <div style={styles.menu}>
          {menuItems.map((item) => (
            <span 
              key={item.key}
              style={{
                ...styles.menuItem, 
                ...(activeSection === item.key ? styles.activeItem : {})
              }}
              onClick={() => scrollToSection(item.key)}
              onMouseEnter={(e) => {
                if (activeSection !== item.key) {
                  e.target.style.color = '#0078d4';
                  e.target.style.background = 'rgba(0, 120, 212, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.key) {
                  e.target.style.color = '#2c3e50';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {item.label}
            </span>
          ))}
          <span 
            style={styles.contactBtn} 
            onClick={() => scrollToSection('contact-us')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 120, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 120, 212, 0.3)';
            }}
          >
            Contact Us
          </span>
        </div>

        <div 
          style={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span style={styles.toggleSpan}></span>
          <span style={styles.toggleSpan}></span>
          <span style={styles.toggleSpan}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
