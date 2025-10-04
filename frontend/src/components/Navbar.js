import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Check for logged in user
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // Enhanced logout: call context logout (clears token + user), update UI and navigate
  const performLogout = async () => {
    try {
      if (typeof logout === 'function') await logout();
    } catch (_) {
      // ignore
    }
    // ensure local state cleared
    localStorage.removeItem('user');
    setUser(null);
    try {
      navigate('/login');
    } catch (e) {
      window.location.href = '/login';
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const styles = {
    navbar: {
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.06)' : '0 2px 8px rgba(0, 0, 0, 0.02)'
    },
    navContainer: {
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '0 clamp(20px, 5vw, 48px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: isScrolled ? '72px' : '84px',
      transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      padding: '8px 0',
      position: 'relative',
      zIndex: 10
    },
    logoImg: {
      height: isScrolled ? '44px' : '52px',
      width: 'auto',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      maxWidth: '180px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))'
    },
    navLinks: {
      display: window.innerWidth <= 1024 ? 'none' : 'flex',
      alignItems: 'center',
      gap: 'clamp(24px, 3vw, 40px)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    logoutButton: {
      cursor: 'pointer',
      border: '1px solid rgba(30,41,59,0.08)',
      padding: '8px 12px',
      borderRadius: '10px',
      background: 'linear-gradient(90deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))',
      color: '#1e293b',
      fontWeight: 600,
      fontSize: '14px',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap'
    },
    logoutButtonMobile: {
      textAlign: 'left',
      padding: '16px 20px',
      background: 'transparent',
      border: 'none',
      color: '#374151',
      fontWeight: 600,
      fontSize: '18px'
    },
    navLink: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      fontSize: 'clamp(14px, 1.5vw, 15px)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      letterSpacing: '0.01em',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '8px 4px',
      position: 'relative',
      whiteSpace: 'nowrap',
      display: 'inline-block'
    },
    activeLink: {
      color: '#1e293b',
      fontWeight: '600'
    },
    
    // Mobile Menu
    mobileMenuButton: {
      display: window.innerWidth <= 1024 ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      position: 'relative',
      zIndex: 1001
    },
    hamburgerLine: {
      width: '22px',
      height: '2.5px',
      background: '#374151',
      borderRadius: '2px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      margin: '3px 0'
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 999,
      overflow: 'auto'
    },
    mobileNavLinks: {
      padding: '100px 32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      minHeight: '100vh'
    },
    mobileNavLink: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      fontSize: '18px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '16px 20px',
      borderRadius: '12px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'transparent',
      display: 'block'
    },
    mobileNavLinkActive: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
      color: '#1e293b',
      fontWeight: '600'
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
    
    { name: 'Login', path: '/login' }
  ];

  const isAuth = (typeof isAuthenticated === 'function' && isAuthenticated());

  // Hide Login when user is authenticated
  const visibleNavItems = (typeof isAuthenticated === 'function' && isAuthenticated())
    ? navItems.filter(i => i.path !== '/login')
    : navItems;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Add CSS for enhanced animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link-enhanced {
        position: relative;
      }
      
      .nav-link-enhanced::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateX(-50%);
        border-radius: 2px;
      }
      
      .nav-link-enhanced:hover::before {
        width: 100%;
      }
      
      .nav-link-enhanced.active::before {
        width: 100%;
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      }

      .nav-link-enhanced:hover {
        color: #6366f1 !important;
        transform: translateY(-1px);
      }

      .nav-link-enhanced.active:hover {
        color: #1e293b !important;
      }

      .mobile-nav-link-enhanced:hover {
        background: rgba(99, 102, 241, 0.05) !important;
        transform: translateX(4px);
      }

      @media (max-width: 1024px) {
        .navbar-logo {
          height: 40px !important;
          max-width: 160px !important;
        }
      }
      
      @media (max-width: 768px) {
        .navbar-logo {
          height: 36px !important;
          max-width: 140px !important;
        }
      }
      
      @media (max-width: 480px) {
        .navbar-logo {
          height: 32px !important;
          max-width: 120px !important;
        }
      }

      /* Smooth page transitions */
      body {
        transition: overflow 0.3s ease;
      }

      /* Enhanced mobile menu animation */
      @keyframes slideInFromRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Enhanced Logo */}
        <Link 
          to="/" 
          style={styles.logoContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
          }}
        >
          <img 
            src="/logo.jpg" 
            alt="Trinix - Complete Digital Solutions" 
            className="navbar-logo"
            style={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul style={styles.navLinks}>
          {visibleNavItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link-enhanced ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === item.path ? styles.activeLink : {})
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout button (desktop) - shown when authenticated, placed to the right of nav links */}
        {isAuth && (
          <div style={{ display: window.innerWidth <= 1024 ? 'none' : 'block' }}>
            <button
              onClick={performLogout}
              style={styles.logoutButton}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div style={{
            ...styles.hamburgerLine,
            transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0)',
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            opacity: isMenuOpen ? 0 : 1,
            transform: isMenuOpen ? 'translateX(20px)' : 'translateX(0)'
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)',
          }}></div>
        </button>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileNavLinks}>
            {visibleNavItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="mobile-nav-link-enhanced"
                style={{
                  ...styles.mobileNavLink,
                  ...(location.pathname === item.path ? styles.mobileNavLinkActive : {}),
                  animationDelay: isMenuOpen ? `${index * 0.05}s` : '0s'
                }}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}

            {isAuth && (
              <button
                onClick={() => { toggleMenu(); performLogout(); }}
                className="mobile-nav-link-enhanced"
                style={{ ...styles.logoutButtonMobile }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;