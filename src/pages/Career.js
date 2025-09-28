import React, { useState } from 'react';

const Career = () => {
  const [activeTab, setActiveTab] = useState('full-time');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setShowApplicationForm(true);
  };

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
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
      marginBottom: '24px'
    },
    highlight: {
      background: 'linear-gradient(135deg, #00d9ff, #0099cc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      maxWidth: '768px',
      margin: '0 auto 60px',
      lineHeight: '1.6',
      opacity: 0.9
    },
    section: {
      padding: '80px 0'
    },
    tabButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '60px',
      flexWrap: 'wrap'
    },
    tabButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    activeTab: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderColor: 'transparent'
    },
    jobGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px'
    },
    jobCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease'
    },
    jobTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '8px',
      color: 'white'
    },
    jobType: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '500',
      display: 'inline-block',
      marginBottom: '16px'
    },
    jobDescription: {
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.6',
      marginBottom: '24px'
    },
    applyButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      width: '100%'
    }
  };

  const jobCategories = [
    { id: 'full-time', label: 'Full-Time Positions' },
    { id: 'internships', label: 'Internships' },
    { id: 'part-time', label: 'Part-Time & Contract' }
  ];

  const jobListings = {
    'full-time': [
      {
        title: 'Senior Full Stack Developer',
        type: 'Full-Time',
        description: 'Join our engineering team to build scalable web applications and drive technical innovation with cutting-edge technologies.',
        location: 'Remote / Silicon Valley',
        salary: '$120k - $180k'
      },
      {
        title: 'Product Manager',
        type: 'Full-Time',
        description: 'Lead product strategy and roadmap development while working closely with engineering, design, and business teams.',
        location: 'Hybrid / Silicon Valley',
        salary: '$130k - $200k'
      },
      {
        title: 'UX/UI Designer',
        type: 'Full-Time',
        description: 'Create intuitive and beautiful user experiences for our digital products while conducting user research and prototyping.',
        location: 'Remote / Silicon Valley',
        salary: '$100k - $150k'
      }
    ],
    'internships': [
      {
        title: 'Software Engineering Intern',
        type: 'Summer 2025',
        description: 'Work alongside senior engineers to develop features for our core platform. Perfect opportunity to gain real-world experience.',
        location: 'Hybrid / Silicon Valley',
        salary: '$5k - $8k/month'
      },
      {
        title: 'Data Science Intern',
        type: 'Summer 2025',
        description: 'Analyze user data and build machine learning models to improve our products and user experience.',
        location: 'Remote / Silicon Valley',
        salary: '$4.5k - $7k/month'
      }
    ],
    'part-time': [
      {
        title: 'Technical Writer (Contract)',
        type: 'Part-Time',
        description: 'Create technical documentation, API guides, and developer resources for our platform.',
        location: 'Remote',
        salary: '$50 - $80/hour'
      }
    ]
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Join Our <span style={styles.highlight}>Team</span>
          </h1>
          <p style={styles.subtitle}>
            Build the future of technology with passionate innovators. We offer competitive packages, 
            remote work options, and opportunities for growth at every level.
          </p>

          {/* Job Category Tabs */}
          <div style={styles.tabButtons}>
            {jobCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === category.id ? styles.activeTab : {})
                }}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div style={styles.jobGrid}>
            {jobListings[activeTab]?.map((job, index) => (
              <div key={index} style={styles.jobCard}>
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <span style={styles.jobType}>{job.type}</span>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px'}}>
                  {job.location} • {job.salary}
                </p>
                <p style={styles.jobDescription}>{job.description}</p>
                <button 
                  style={styles.applyButton}
                  onClick={() => handleApplyClick(job)}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
