import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(0, 0, 0, 0.05)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none'
    },
    navContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '72px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      transition: 'transform 0.2s ease'
    },
    logoImg: {
      height: '42px',
      width: 'auto',
      transition: 'all 0.2s ease'
    },
    navLinks: {
      display: window.innerWidth <= 1024 ? 'none' : 'flex',
      alignItems: 'center',
      gap: '40px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      fontSize: '15px',
      fontFamily: "'Inter', system-ui, sans-serif",
      letterSpacing: '0.01em',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '8px 0',
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    activeLink: {
      color: '#1e293b',
      fontWeight: '600'
    },
    navLinkHover: {
      color: '#1e293b'
    },
    contactButton: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      fontFamily: "'Inter', system-ui, sans-serif",
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: '0.025em',
      boxShadow: '0 2px 8px rgba(30, 41, 59, 0.15)'
    },
    
    // Mobile Menu
    mobileMenuButton: {
      display: window.innerWidth <= 1024 ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '24px',
      height: '24px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0'
    },
    hamburgerLine: {
      width: '24px',
      height: '2px',
      background: '#374151',
      borderRadius: '1px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: '1px'
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: -1
    },
    mobileNavLinks: {
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    mobileNavLink: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      fontSize: '16px',
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: '12px 0',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'color 0.2s ease'
    },
    mobileContactButton: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '16px 24px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '16px',
      textAlign: 'center',
      marginTop: '8px',
      transition: 'all 0.2s ease'
    }
  };

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Our Thinking', path: '/our-thinking' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Career', path: '/career' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add CSS for underline animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link-underline::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .nav-link-underline:hover::after,
      .nav-link-underline.active::after {
        width: 100%;
      }
      
      .nav-link-underline.active::after {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Logo Only */}
        <Link 
          to="/" 
          style={styles.logoContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img 
            src="/logo.jpg" 
            alt="Trinix" 
            style={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul style={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link-underline ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === item.path ? styles.activeLink : {})
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#1e293b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to="/contact" 
              style={styles.contactButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 16px rgba(30, 41, 59, 0.25)';
                e.target.style.background = 'linear-gradient(135deg, #334155 0%, #475569 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(30, 41, 59, 0.15)';
                e.target.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)';
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button style={styles.mobileMenuButton} onClick={toggleMenu}>
          <div style={{
            ...styles.hamburgerLine,
            transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
            transformOrigin: '1px'
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            opacity: isMenuOpen ? 0 : 1,
            transform: isMenuOpen ? 'translateX(20px)' : 'translateX(0)'
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
            transformOrigin: '1px'
          }}></div>
        </button>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.mobileNavLink,
                  ...(location.pathname === item.path ? { color: '#1e293b', fontWeight: '600' } : {})
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = '#1e293b'}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              style={styles.mobileContactButton}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #334155 0%, #475569 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
