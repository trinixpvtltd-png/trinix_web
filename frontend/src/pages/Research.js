import React, { useState } from 'react';

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredPapers = selectedCategory === 'all' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === selectedCategory);

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
          {/* Category Filters */}
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
    </div>
  );
};

export default Research;
