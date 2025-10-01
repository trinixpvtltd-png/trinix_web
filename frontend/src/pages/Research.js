import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmitProposal = () => {
    navigate('/login');
  };

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '120px 0 80px',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    title: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      color: '#111827',
      marginBottom: '24px'
    },
    highlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto 60px',
      lineHeight: '1.6'
    },
    section: {
      padding: '80px 0'
    },
    searchAndFilterContainer: {
      display: 'flex',
      gap: '16px',
      marginBottom: '40px',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    },
    searchContainer: {
      display: 'flex',
      flex: '1',
      minWidth: '300px',
      gap: '12px'
    },
    searchBox: {
      flex: '1',
      padding: '14px 18px',
      borderRadius: '10px',
      border: '2px solid #e5e7eb',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    searchButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '14px 24px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
      whiteSpace: 'nowrap'
    },
    filterToggleButton: {
      background: 'white',
      color: '#374151',
      padding: '14px 24px',
      borderRadius: '10px',
      border: '2px solid #e5e7eb',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      whiteSpace: 'nowrap'
    },
    filterContainer: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      marginBottom: '32px',
      border: '2px solid #e5e7eb',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      transform: showFilters ? 'translateY(0)' : 'translateY(-10px)',
      opacity: showFilters ? 1 : 0,
      visibility: showFilters ? 'visible' : 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      maxHeight: showFilters ? '200px' : '0',
      overflow: 'hidden'
    },
    filterHeader: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    closeFilterButton: {
      background: 'none',
      border: 'none',
      color: '#6b7280',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '60px',
      flexWrap: 'wrap'
    },
    filterButton: {
      background: 'white',
      color: '#374151',
      padding: '12px 24px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '0.9375rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    activeFilter: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      borderColor: 'transparent'
    },
    paperGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px'
    },
    paperCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid #e5e7eb',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    paperCategory: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      display: 'inline-block',
      marginBottom: '16px'
    },
    paperTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '12px',
      lineHeight: '1.4'
    },
    paperAuthors: {
      color: '#6366f1',
      fontSize: '0.9375rem',
      marginBottom: '16px',
      fontWeight: '500'
    },
    paperAbstract: {
      color: '#4b5563',
      lineHeight: '1.6',
      fontSize: '0.9375rem',
      marginBottom: '20px'
    },
    paperMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '16px',
      borderTop: '1px solid #f3f4f6'
    },
    paperDate: {
      color: '#6b7280',
      fontSize: '0.875rem'
    },
    downloadButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    contributeSection: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      padding: '100px 0',
      color: 'white',
      textAlign: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    contributeTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '800',
      marginBottom: '24px'
    },
    contributeText: {
      fontSize: '1.25rem',
      color: '#e2e8f0',
      maxWidth: '800px',
      margin: '0 auto 40px',
      lineHeight: '1.6'
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: '#0ea5e9',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none'
    },
    footer: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: '#e2e8f0',
      padding: '80px 0 40px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
      gap: '40px',
      marginBottom: '60px'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '20px'
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9375rem',
      transition: 'color 0.2s ease'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      padding: '60px 0'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '20px'
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9375rem',
      transition: 'color 0.2s ease'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '32px 0'
    },
    footerBottomContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    footerBottomLinks: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center'
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

  const categories = [
    { id: 'all', label: 'All Research' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'web', label: 'Web Development' }
  ];

  const researchPapers = [
    {
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      title: 'Enhancing Natural Language Processing with Transformer-Based Architectures in Enterprise Applications',
      authors: 'Sarah Johnson, Michael Chen, David Kim',
      abstract: 'This paper explores the implementation of advanced transformer architectures in enterprise-level natural language processing applications, demonstrating significant improvements in accuracy and efficiency across multiple domains including customer service automation, document analysis, and real-time language translation.',
      date: 'September 2025',
      downloads: 1247
    },
    {
      category: 'security',
      categoryLabel: 'Cybersecurity',
      title: 'Zero-Trust Architecture Implementation: A Comprehensive Framework for Modern Enterprise Security',
      authors: 'Robert Chang, Emily Rodriguez',
      abstract: 'A detailed analysis of zero-trust security implementation strategies, including practical frameworks and case studies from enterprise deployments. This research provides actionable insights for organizations looking to implement comprehensive security models.',
      date: 'August 2025',
      downloads: 892
    },
    {
      category: 'cloud',
      categoryLabel: 'Cloud Computing',
      title: 'Serverless Computing Optimization: Performance Analysis and Cost-Effective Scaling Strategies',
      authors: 'Michael Chen, Lisa Thompson',
      abstract: 'This research presents comprehensive optimization techniques for serverless computing environments, focusing on performance metrics and cost reduction strategies. The study includes real-world case studies and benchmarking results.',
      date: 'July 2025',
      downloads: 1156
    },
    {
      category: 'data',
      categoryLabel: 'Data Analytics',
      title: 'Real-Time Data Processing at Scale: Advanced Techniques for High-Velocity Data Streams',
      authors: 'Sophie Williams, David Kim, James Wilson',
      abstract: 'An in-depth exploration of real-time data processing methodologies, presenting novel approaches to handle high-velocity data streams with minimal latency. The paper includes performance comparisons and implementation guidelines.',
      date: 'June 2025',
      downloads: 743
    },
    {
      category: 'web',
      categoryLabel: 'Web Development',
      title: 'Modern Frontend Architecture: Component-Based Design Patterns for Scalable Web Applications',
      authors: 'James Wilson, Emily Rodriguez',
      abstract: 'This paper examines contemporary frontend architecture patterns, providing guidelines for building maintainable and scalable web applications. It covers state management, component design, and performance optimization strategies.',
      date: 'May 2025',
      downloads: 1389
    },
    {
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      title: 'Cross-Platform Mobile Development: Performance Optimization and User Experience Enhancement',
      authors: 'Lisa Thompson, David Kim',
      abstract: 'A comprehensive study of cross-platform mobile development frameworks, focusing on performance optimization techniques and UX best practices. The research includes comparative analysis of different frameworks and their trade-offs.',
      date: 'April 2025',
      downloads: 967
    }
  ];

  const handleSearch = () => {
    // Search functionality is already handled by the filteredPapers logic
    // This function can be used for additional search actions if needed
    console.log('Searching for:', searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredPapers = researchPapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Research & <span style={styles.highlight}>Publications</span>
          </h1>
          <p style={styles.subtitle}>
            Cutting-edge research and insights from our team of experts. Explore our latest findings 
            in AI, cybersecurity, cloud computing, and emerging technologies that shape the future.
          </p>
        </div>
      </section>

      {/* Research Papers Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Search and Filter Container */}
          <div style={styles.searchAndFilterContainer}>
            {/* Search Container */}
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search research papers, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                style={styles.searchBox}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }}
              />
              <button
                style={styles.searchButton}
                onClick={handleSearch}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.3)';
                }}
              >
                🔍 Search
              </button>
            </div>

            {/* Filter Toggle Button */}
            <button
              style={{
                ...styles.filterToggleButton,
                borderColor: showFilters ? '#6366f1' : '#e5e7eb',
                color: showFilters ? '#6366f1' : '#374151'
              }}
              onClick={() => setShowFilters(!showFilters)}
              onMouseEnter={(e) => {
                if (!showFilters) {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.color = '#6366f1';
                }
              }}
              onMouseLeave={(e) => {
                if (!showFilters) {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.color = '#374151';
                }
              }}
            >
              🎛️ Filters {showFilters ? '▲' : '▼'}
            </button>
          </div>

          {/* Filter Container - Collapsible */}
          <div style={styles.filterContainer}>
            <div style={styles.filterHeader}>
              <span>Filter by Category</span>
              <button
                style={styles.closeFilterButton}
                onClick={() => setShowFilters(false)}
                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                ✕
              </button>
            </div>
            <div style={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                style={{
                  ...styles.filterButton,
                  ...(selectedCategory === category.id ? styles.activeFilter : {})
                }}
                onClick={() => setSelectedCategory(category.id)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.color = '#6366f1';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {category.label}
              </button>
            ))}
            </div>
          </div>

          {/* Results Count */}
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            {filteredPapers.length === 0 ? (
              <p>No research papers found matching your criteria.</p>
            ) : (
              <p>Showing {filteredPapers.length} of {researchPapers.length} research papers</p>
            )}
          </div>

          {/* Papers Grid */}
          <div style={styles.paperGrid}>
            {filteredPapers.map((paper, index) => (
              <div 
                key={index} 
                style={styles.paperCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <span style={styles.paperCategory}>{paper.categoryLabel}</span>
                <h3 style={styles.paperTitle}>{paper.title}</h3>
                <p style={styles.paperAuthors}>By {paper.authors}</p>
                <p style={styles.paperAbstract}>{paper.abstract}</p>
                <div style={styles.paperMeta}>
                  <span style={styles.paperDate}>{paper.date} • {paper.downloads} downloads</span>
                  <button 
                    style={styles.downloadButton}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    onClick={() => alert('Research paper download started!')}
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute to Research Section */}
      <section style={styles.contributeSection}>
        <div style={styles.container}>
          <h2 style={styles.contributeTitle}>Contribute to Research</h2>
          <p style={styles.contributeText}>
            Have a research idea or want to collaborate? We're always looking for
            talented researchers and innovative projects to advance technology.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onClick={handleSubmitProposal}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Submit Research Proposal →
            </button>
            <button 
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Join Research Team 👥
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                                href="tel:+91-555-123-4567"
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
    </div>
  );
};

export default Research;
