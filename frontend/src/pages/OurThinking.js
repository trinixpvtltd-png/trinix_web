import React, { useEffect, useState } from 'react';

const OurThinking = () => {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
      padding: '120px 0 100px',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '3rem' : '4rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
      lineHeight: '1.1'
    },
    heroHighlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400'
    },

    // Decorative elements
    decorativeShape1: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '80px',
      height: '80px',
      background: 'rgba(99, 102, 241, 0.08)',
      borderRadius: '16px',
      transform: 'rotate(15deg)',
      zIndex: 1,
      animation: 'float 6s ease-in-out infinite'
    },
    decorativeShape2: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '60px',
      height: '60px',
      background: 'rgba(139, 92, 246, 0.1)',
      borderRadius: '50%',
      zIndex: 1,
      animation: 'float 4s ease-in-out infinite reverse'
    },

    section: {
      padding: '100px 0',
      background: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    
    // Filter Categories
    filterSection: {
      marginBottom: '60px'
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    filterButton: {
      background: 'white',
      color: '#64748b',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      fontSize: '0.9375rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    activeFilter: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      borderColor: 'transparent',
      boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)'
    },

    // Blog Posts Grid
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px'
    },
    blogCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
      position: 'relative'
    },
    blogImage: {
      height: '240px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    blogContent: {
      padding: '32px'
    },
    categoryBadge: {
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      color: '#475569',
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      display: 'inline-block',
      marginBottom: '16px',
      border: '1px solid #e2e8f0'
    },
    blogTitle: {
      fontSize: '1.375rem',
      color: '#1e293b',
      marginBottom: '12px',
      fontWeight: '600',
      lineHeight: '1.4',
      cursor: 'pointer',
      transition: 'color 0.2s ease'
    },
    blogExcerpt: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '1rem',
      marginBottom: '24px'
    },
    blogTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px'
    },
    blogTag: {
      background: '#f8fafc',
      color: '#64748b',
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: '500',
      border: '1px solid #f1f5f9'
    },
    blogMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '20px',
      borderTop: '1px solid #f1f5f9',
      fontSize: '0.875rem',
      color: '#64748b'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    authorAvatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: '600'
    },
    readMoreButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'data', label: 'Data Science' },
    { id: 'devops', label: 'DevOps' },
    { id: 'design', label: 'Design' }
  ];

  const blogPosts = [
    {
      category: 'ai',
      categoryLabel: 'Artificial Intelligence',
      title: 'The Future of AI in Business: Transforming Industries Through Intelligent Automation',
      excerpt: 'Exploring how artificial intelligence is reshaping industries and creating new opportunities for innovation and efficiency in the digital age. From predictive analytics to automated customer service, AI is revolutionizing business operations across all sectors.',
      icon: '🤖',
      author: 'Sarah Johnson',
      authorInitial: 'SJ',
      date: 'Sep 25, 2025',
      readTime: '8 min read',
      tags: ['AI Strategy', 'Business Innovation', 'Automation', 'Machine Learning']
    },
    {
      category: 'cloud',
      categoryLabel: 'Cloud Computing',
      title: 'Cloud-First Strategy Guide: Building Scalable Infrastructure for Modern Businesses',
      excerpt: 'Understanding the benefits and challenges of adopting a cloud-first approach in today\'s rapidly evolving digital landscape. Best practices for migration, optimization, and cost management in cloud environments.',
      icon: '☁️',
      author: 'Michael Chen',
      authorInitial: 'MC',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      tags: ['Cloud Strategy', 'Infrastructure', 'Migration', 'AWS', 'Azure']
    },
    {
      category: 'security',
      categoryLabel: 'Cybersecurity',
      title: 'Zero Trust Security Model: Why Traditional Perimeter Defense Is No Longer Enough',
      excerpt: 'Why traditional perimeter-based security models are obsolete and how Zero Trust architecture provides comprehensive protection against modern cyber threats and data breaches in today\'s distributed work environment.',
      icon: '🔐',
      author: 'Robert Chang',
      authorInitial: 'RC',
      date: 'Sep 15, 2025',
      readTime: '10 min read',
      tags: ['Zero Trust', 'Enterprise Security', 'Compliance', 'Risk Management']
    },
    {
      category: 'web',
      categoryLabel: 'Web Development',
      title: 'Modern Frontend Architecture: Component-Based Design Patterns for Scalable Applications',
      excerpt: 'Best practices for structuring large-scale React applications, including state management, component architecture, and performance optimization techniques for modern web development.',
      icon: '⚛️',
      author: 'James Wilson',
      authorInitial: 'JW',
      date: 'Sep 12, 2025',
      readTime: '12 min read',
      tags: ['React', 'Frontend Architecture', 'Component Design', 'Performance']
    },
    {
      category: 'data',
      categoryLabel: 'Data Science',
      title: 'Machine Learning in Production: From Model to Deployment at Scale',
      excerpt: 'A comprehensive guide to deploying machine learning models in production environments, covering MLOps, monitoring, scaling considerations, and best practices for enterprise ML systems.',
      icon: '📊',
      author: 'Sophie Williams',
      authorInitial: 'SW',
      date: 'Sep 8, 2025',
      readTime: '15 min read',
      tags: ['MLOps', 'Data Science', 'Model Deployment', 'Production ML']
    },
    {
      category: 'mobile',
      categoryLabel: 'Mobile Development',
      title: 'Cross-Platform Mobile Development: React Native vs Flutter in 2025',
      excerpt: 'Comprehensive comparison of the leading cross-platform mobile development frameworks, analyzing performance, development experience, and ecosystem maturity for enterprise applications.',
      icon: '📱',
      author: 'Lisa Thompson',
      authorInitial: 'LT',
      date: 'Sep 5, 2025',
      readTime: '9 min read',
      tags: ['React Native', 'Flutter', 'Mobile Development', 'Cross-Platform']
    },
    {
      category: 'devops',
      categoryLabel: 'DevOps',
      title: 'Kubernetes Best Practices: Container Orchestration for Enterprise Applications',
      excerpt: 'Essential Kubernetes patterns and practices for running production workloads at scale, including security, monitoring, and deployment strategies for enterprise environments.',
      icon: '🚢',
      author: 'Michael Chen',
      authorInitial: 'MC',
      date: 'Sep 1, 2025',
      readTime: '11 min read',
      tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Microservices']
    },
    {
      category: 'design',
      categoryLabel: 'Design',
      title: 'Design Systems at Scale: Building Consistent User Experiences Across Products',
      excerpt: 'How to create and maintain design systems that scale across multiple products and teams, ensuring consistency while allowing for innovation and flexibility in enterprise environments.',
      icon: '🎨',
      author: 'Emily Rodriguez',
      authorInitial: 'ER',
      date: 'Aug 28, 2025',
      readTime: '7 min read',
      tags: ['Design Systems', 'UI/UX', 'Component Libraries', 'Brand Consistency']
    },
    {
      category: 'ai',
      categoryLabel: 'Artificial Intelligence',
      title: 'Natural Language Processing in Enterprise: Practical Applications and Implementation',
      excerpt: 'Real-world applications of NLP in enterprise settings, from customer service automation to document analysis, with practical implementation strategies and technology recommendations.',
      icon: '🗣️',
      author: 'Sarah Johnson',
      authorInitial: 'SJ',
      date: 'Aug 25, 2025',
      readTime: '13 min read',
      tags: ['NLP', 'Enterprise AI', 'Customer Service', 'Document Processing']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      [data-animate] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      [data-animate].visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.decorativeShape1}></div>
        <div style={styles.decorativeShape2}></div>
        
        <div style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>
            Our <span style={styles.heroHighlight}>Thinking</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Insights, perspectives, and thought leadership on technology trends shaping the future 
            of business, innovation, and digital transformation across industries.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Category Filters */}
          <div style={styles.filterSection}>
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
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.color = '#64748b';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div style={styles.blogGrid}>
            {filteredPosts.map((post, index) => (
              <article 
                key={index}
                style={styles.blogCard}
                data-animate 
                id={`post-${index}`}
                className={isVisible[`post-${index}`] ? 'visible' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={styles.blogImage}>
                  {post.icon}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)'
                  }}></div>
                </div>
                
                <div style={styles.blogContent}>
                  <span style={styles.categoryBadge}>{post.categoryLabel}</span>
                  <h2 
                    style={styles.blogTitle}
                    onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                  >
                    {post.title}
                  </h2>
                  <p style={styles.blogExcerpt}>{post.excerpt}</p>
                  
                  <div style={styles.blogTags}>
                    {post.tags.map((tag, idx) => (
                      <span key={idx} style={styles.blogTag}>{tag}</span>
                    ))}
                  </div>

                  <div style={styles.blogMeta}>
                    <div style={styles.authorInfo}>
                      <div style={styles.authorAvatar}>{post.authorInitial}</div>
                      <div>
                        <div style={{fontWeight: '500', color: '#1e293b'}}>{post.author}</div>
                        <div style={{fontSize: '0.8125rem'}}>{post.date} • {post.readTime}</div>
                      </div>
                    </div>
                    <button 
                      style={styles.readMoreButton}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 0',
              color: '#64748b'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>📝</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '8px', color: '#1e293b'}}>No articles found</h3>
              <p>Try selecting a different category to see more articles.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OurThinking;
