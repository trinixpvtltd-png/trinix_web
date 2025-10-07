import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Research = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('published'); // 'prelisting' | 'published'

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
    // New: Status toggle (Prelisting / Published)
    statusSection: {
      marginBottom: '24px'
    },
    statusButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap',
      marginBottom: '12px'
    },
    statusButton: {
      background: 'white',
      color: '#374151',
      padding: '10px 20px',
      borderRadius: '9999px',
      border: '1px solid #d1d5db',
      fontSize: '0.9375rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)'
    },
    activeStatusButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      borderColor: 'transparent',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
    },
    searchContainer: {
      display: 'flex',
      gap: '12px',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
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
    // Simplified Category Buttons (No Filter Box)
    categorySection: {
      marginBottom: '60px'
    },
    categoryButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      marginBottom: '40px'
    },
    categoryButton: {
      background: 'white',
      color: '#374151',
      padding: '12px 24px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '0.9375rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    activeCategoryButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      borderColor: 'transparent',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
    },
    paperGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: '24px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    paperCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e5e7eb',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      height: 'fit-content'
    },
    paperCategory: {
      background: '#6366f1',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      display: 'inline-block',
      marginBottom: '16px'
    },
    paperTitle: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '12px',
      lineHeight: '1.4'
    },
    paperAuthors: {
      color: '#6366f1',
      fontSize: '0.875rem',
      marginBottom: '16px',
      fontWeight: '500'
    },
    paperAbstract: {
      color: '#4b5563',
      lineHeight: '1.6',
      fontSize: '0.875rem',
      marginBottom: '20px'
    },
    paperFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto'
    },
    paperTags: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    },
    paperTag: {
      background: '#f3f4f6',
      color: '#4b5563',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    readButton: {
      background: '#6366f1',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    resultsCount: {
      textAlign: 'center',
      marginBottom: '32px',
      color: '#6b7280',
      fontSize: '1rem'
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
    { id: 'monetary', label: 'Monetary Theory' },
    { id: 'fintech', label: 'Financial Technology' }
  ];

  const researchPapers = [
    {
      status: 'published',
      category: 'monetary',
      categoryLabel: 'MONETARY THEORY',
      title: 'Reimagining Global Monetary Standards: A Lifespan-Linked and Contribution-Based Framework for Post-Fiat Reserve Currencies',
      authors: 'Saurav and Sanjay Kumar Sharma',
      abstract: 'The foundations of global finance are increasingly strained by the volatility of fiat systems, geopolitical dominance in currency valuation, and the speculative nature of reserve accumulation. This paper proposes a technologically grounded and ethically structured alternative: the Standard Crypto Reserve (SCR), a decentralised, contribution-indexed, and lifespan-anchored reserve currency system. Drawing on institutional economics, modern monetary theory, and blockchain-based governance, SCR redefines reserve legitimacy not through GDP or capital holdings, but through verified human lifespan and measurable national contributions in education, innovation, governance, sustainability, and many such parameters. The proposed framework introduces a dual-vault architecture, comprising global and national reserves, with algorithmically regulated issuance based on a Contribution Index (CI). National currencies are valued proportionally to their SCR reserve and performance across socio-economic indicators. The study contrasts SCR with central bank digital currencies (CBDCs), the IMF\'s Special Drawing Rights (SDRs), and commodity-backed systems, arguing for SCR\'s superiority in terms of structural transparency, ethical scarcity, and economic inclusivity. Empirical support is proposed through dynamic general equilibrium modelling and comparative scenario simulations across pre- and post-crisis economies. By anchoring monetary value to verifiable life and contribution, SCR offers a globally interoperable and inflation-resilient standard, empowering emerging economies through performance-based inclusion and algorithmic trust. This paper advances the discourse on post-fiat reform and proposes SCR as a viable path toward equitable and resilient financial architecture.',
      date: '',
      downloads: 0,
      link: 'https://cnsejournals.org/wp-content/uploads/2025/09/2-MS3AI-2476R1.pdf',
      hideMetadata: true,
      tags: ['SCR', 'Post-Fiat', 'Monetary Reform', 'Blockchain Governance']
    },
    {
      status: 'published',
      category: 'fintech',
      categoryLabel: 'FINANCIAL TECHNOLOGY',
      title: 'A Theoretical and Quantitative Analysis of the Feasibility and Economic Implications of a Standard Crypto Reserve (SCR) as a Global Financial Standard with respect to the present technology',
      authors: 'Saurav and Sanjay Kumar Sharma',
      abstract: 'This paper explores the concept of the Standard Crypto Reserve (SCR) an AI-driven medium as a global financial standard, replacing traditional fiat currencies while ensuring economic stability and sustainability. It evaluates SCR\'s potential impact on inflation, deflation, currency valuation, and international trade. Unlike fiat systems prone to inflation and deflation, SCR eliminates these risks by tying monetary valuation to a universal and immutable metric: Time. The paper also discusses mechanisms to prevent speculation, ensure accessibility, and drive global economic growth.',
      date: '',
      downloads: 0,
      link: 'https://cnsejournals.org/wp-content/uploads/2025/04/2-MS3AI-2461.pdf',
      hideMetadata: true,
      tags: ['SCR', 'Global Financial Standard', 'UPI Integration', 'Time-based Valuation']
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredPapers = researchPapers.filter(paper => {
    const matchesStatus = paper.status === statusFilter;
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const totalForStatus = researchPapers.filter(p => p.status === statusFilter).length;
  const statusLabel = statusFilter === 'prelisting' ? 'prelisting' : 'published';

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

          {/* Status Toggle */}
          <div style={styles.statusSection}>
            <div style={styles.statusButtons}>
              <button
                aria-pressed={statusFilter === 'prelisting'}
                style={{
                  ...styles.statusButton,
                  ...(statusFilter === 'prelisting' ? styles.activeStatusButton : {})
                }}
                onClick={() => setStatusFilter('prelisting')}
                onMouseEnter={(e) => {
                  if (statusFilter !== 'prelisting') {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.color = '#6366f1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (statusFilter !== 'prelisting') {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.color = '#374151';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Preprint
              </button>
              <button
                aria-pressed={statusFilter === 'published'}
                style={{
                  ...styles.statusButton,
                  ...(statusFilter === 'published' ? styles.activeStatusButton : {})
                }}
                onClick={() => setStatusFilter('published')}
                onMouseEnter={(e) => {
                  if (statusFilter !== 'published') {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.color = '#6366f1';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (statusFilter !== 'published') {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.color = '#374151';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Published
              </button>
            </div>
          </div>
          {/*  
          <div style={styles.categorySection}>
            <div style={styles.categoryButtons}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  style={{
                    ...styles.categoryButton,
                    ...(selectedCategory === category.id ? styles.activeCategoryButton : {})
                  }}
                  onClick={() => setSelectedCategory(category.id)}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.borderColor = '#6366f1';
                      e.target.style.color = '#6366f1';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.color = '#374151';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          */}

          {/* Results Count */}
          <div style={styles.resultsCount}>
            {filteredPapers.length === 0 ? (
              <p>No {statusLabel} research papers found matching your criteria.</p>
            ) : (
              <p>Showing {filteredPapers.length} of {totalForStatus} {statusLabel} research papers</p>
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
                <div style={styles.paperFooter}>
                  <div style={styles.paperTags}>
                    {paper.tags && paper.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.paperTag}>{tag}</span>
                    ))}
                  </div>
                  <button 
                    style={styles.readButton}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.background = '#5855eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = '#6366f1';
                    }}
                    onClick={() => window.open(paper.link, '_blank')}
                  >
                    Read Full Article
                  </button>
                </div>
                {!paper.hideMetadata && paper.date && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      {paper.date} • {paper.downloads} downloads
                    </span>
                  </div>
                )}
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

      <Footer />
    </div>
  );
};

export default Research;