import React from 'react';

const OurThinking = () => {
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      paddingTop: '100px',
      padding: '100px 20px 50px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroSection: {
      textAlign: 'center',
      padding: '80px 0',
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      marginBottom: '50px',
      borderRadius: '15px'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto'
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '50px 0'
    },
    blogCard: {
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00a8ff, #0078d4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    blogImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: 'white'
    },
    blogContent: {
      padding: '30px'
    },
    blogCategory: {
      background: 'rgba(0, 168, 255, 0.1)',
      color: '#0078d4',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500',
      display: 'inline-block',
      marginBottom: '15px'
    },
    blogTitle: {
      fontSize: '1.5rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600',
      lineHeight: '1.3'
    },
    blogExcerpt: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '1rem',
      marginBottom: '20px'
    },
    blogMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: '#888',
      borderTop: '1px solid #f0f0f0',
      paddingTop: '15px'
    },
    readMore: {
      color: '#0078d4',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    },
    insightsSection: {
      background: '#f8f9fa',
      padding: '50px 40px',
      borderRadius: '15px',
      margin: '60px 0'
    },
    insightsTitle: {
      fontSize: '2.5rem',
      color: '#0078d4',
      textAlign: 'center',
      marginBottom: '40px'
    },
    insightsList: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    insightItem: {
      background: 'white',
      padding: '25px',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #0078d4'
    },
    insightTitle: {
      fontSize: '1.3rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600'
    },
    insightText: {
      color: '#666',
      lineHeight: 1.6
    }
  };

  const blogPosts = [
    {
      category: 'Technology Trends',
      title: 'The Future of Artificial Intelligence in Business',
      excerpt: 'Exploring how AI is reshaping industries and creating new opportunities for innovation and efficiency.',
      author: 'Sarah Johnson',
      date: 'Sep 25, 2025',
      icon: '🤖'
    },
    {
      category: 'Digital Transformation',
      title: 'Cloud-First Strategy: A Guide for Modern Enterprises',
      excerpt: 'Understanding the benefits and challenges of adopting a cloud-first approach in today\'s digital landscape.',
      author: 'Michael Chen',
      date: 'Sep 20, 2025',
      icon: '☁️'
    },
    {
      category: 'Cybersecurity',
      title: 'Zero Trust Security: The New Standard',
      excerpt: 'Why traditional perimeter-based security models are obsolete and how Zero Trust architecture provides better protection.',
      author: 'Emily Rodriguez',
      date: 'Sep 15, 2025',
      icon: '🔐'
    },
    {
      category: 'Innovation',
      title: 'Low-Code Development: Democratizing Software Creation',
      excerpt: 'How low-code platforms are enabling non-developers to create powerful applications and accelerate digital initiatives.',
      author: 'David Kim',
      date: 'Sep 10, 2025',
      icon: '⚡'
    },
    {
      category: 'Data Science',
      title: 'Real-Time Analytics: Making Data-Driven Decisions Faster',
      excerpt: 'The importance of real-time data processing and how it\'s transforming business intelligence and decision-making.',
      author: 'Lisa Thompson',
      date: 'Sep 5, 2025',
      icon: '📊'
    },
    {
      category: 'Web Development',
      title: 'Progressive Web Apps: The Future of Mobile Experiences',
      excerpt: 'Understanding how PWAs bridge the gap between web and mobile apps while providing superior user experiences.',
      author: 'James Wilson',
      date: 'Sep 1, 2025',
      icon: '📱'
    }
  ];

  const insights = [
    {
      title: 'Technology is an Enabler, Not a Solution',
      text: 'We believe that technology should serve human needs and business objectives, not drive them. The best solutions are those that seamlessly integrate into existing workflows and enhance human capabilities.'
    },
    {
      title: 'Simplicity is the Ultimate Sophistication',
      text: 'Complex problems often require simple solutions. We strive to create elegant, intuitive systems that hide complexity behind user-friendly interfaces.'
    },
    {
      title: 'Collaboration Drives Innovation',
      text: 'The most breakthrough innovations happen when diverse perspectives come together. We foster collaborative environments both within our team and with our clients.'
    },
    {
      title: 'Continuous Learning is Essential',
      text: 'Technology evolves rapidly, and so must we. We maintain a culture of continuous learning and adaptation to stay ahead of emerging trends and opportunities.'
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>Our Thinking</h1>
        <p style={styles.heroSubtitle}>
          Insights, perspectives, and thought leadership on technology trends shaping the future of business
        </p>
      </section>

      <div style={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <article 
            key={index} 
            style={styles.blogCard} 
            className="slide-right"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={styles.blogImage}>
              {post.icon}
            </div>
            <div style={styles.blogContent}>
              <span style={styles.blogCategory}>{post.category}</span>
              <h3 style={styles.blogTitle}>{post.title}</h3>
              <p style={styles.blogExcerpt}>{post.excerpt}</p>
              <div style={styles.blogMeta}>
                <span>{post.author} • {post.date}</span>
                <a href="#" style={styles.readMore}>Read More →</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section style={styles.insightsSection} className="slide-up">
        <h2 style={styles.insightsTitle}>Our Core Beliefs</h2>
        <div style={styles.insightsList}>
          {insights.map((insight, index) => (
            <div key={index} style={styles.insightItem}>
              <h3 style={styles.insightTitle}>{insight.title}</h3>
              <p style={styles.insightText}>{insight.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurThinking;
