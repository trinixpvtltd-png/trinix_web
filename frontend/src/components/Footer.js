import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#1e293b',
            paddingTop: '64px',
            paddingBottom: '32px'
        },
        footerContainer: {
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px'
        },
        footerGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            marginBottom: '48px'
        },
        footerSection: {
            display: 'flex',
            flexDirection: 'column'
        },
        footerTitle: {
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '24px'
        },
        footerLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            marginBottom: '12px',
            transition: 'color 0.2s ease'
        },
        footerBottom: {
            borderTop: '1px solid #334155',
            paddingTop: '32px'
        },
        footerBottomContent: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        footerBottomLinks: {
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        footerBottomLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.875rem',
            transition: 'color 0.2s ease'
        },
        copyrightText: {
            color: '#94a3b8',
            fontSize: '0.875rem'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerContainer}>
                <div style={styles.footerGrid}>
                    {/* Company Info */}
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>Trinix</h3>
                        <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
                            Empowering businesses through innovative technology solutions and digital transformation.
                        </p>
                    </div>

                    {/* Services */}
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>Services</h3>
                        <Link
                            to="/what-we-do"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Web Development
                        </Link>
                        <Link
                            to="/what-we-do"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Mobile Apps
                        </Link>
                        <Link
                            to="/what-we-do"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Cloud Solutions
                        </Link>
                        <Link
                            to="/what-we-do"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            AI & ML
                        </Link>
                        <Link
                            to="/what-we-do"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Consulting
                        </Link>
                    </div>

                    {/* Company */}
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>Company</h3>
                        <Link
                            to="/about"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/who-we-are"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Our Team
                        </Link>
                        <Link
                            to="/career"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Careers
                        </Link>
                        <Link
                            to="/our-thinking"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/research"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Research
                        </Link>
                    </div>

                    {/* Contact & Legal */}
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>Contact</h3>
                        <Link
                            to="/contact"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/projects"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            Our Work
                        </Link>
                        <a
                            href="mailto:hello@trinix.com"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            hello@trinix.com
                        </a>
                        <a
                            href="tel:+1-555-123-4567"
                            style={styles.footerLink}
                            onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                        >
                            +1 (555) 123-4567
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div style={styles.footerBottom}>
                    <div style={styles.footerBottomContent}>
                        <div style={styles.footerBottomLinks}>
                            <a
                                href="#"
                                style={styles.footerBottomLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                style={styles.footerBottomLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                style={styles.footerBottomLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Cookie Policy
                            </a>
                            <span style={styles.copyrightText}>
                                © 2025 Trinix. All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;