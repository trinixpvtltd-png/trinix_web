import React from 'react';

const Career = () => {
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
    benefitsSection: {
      background: '#f8f9fa',
      padding: '50px 40px',
      borderRadius: '15px',
      margin: '50px 0'
    },
    benefitsTitle: {
      fontSize: '2.5rem',
      color: '#0078d4',
      textAlign: 'center',
      marginBottom: '40px'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px'
    },
    benefitCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    benefitIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    benefitTitle: {
      fontSize: '1.2rem',
      color: '#0078d4',
      marginBottom: '10px',
      fontWeight: '600'
    },
    benefitText: {
      color: '#666',
      lineHeight: 1.6
    },
    jobsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '25px',
      margin: '50px 0'
    },
    jobCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00a8ff, #0078d4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    jobHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '20px'
    },
    jobTitle: {
      fontSize: '1.5rem',
      color: '#0078d4',
      fontWeight: '600',
      marginBottom: '5px'
    },
    jobDepartment: {
      color: '#666',
      fontSize: '1rem'
    },
    jobType: {
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    jobDescription: {
      color: '#555',
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px'
    },
    skillTag: {
      background: 'rgba(0, 168, 255, 0.1)',
      color: '#0078d4',
      padding: '5px 12px',
      borderRadius: '15px',
      fontSize: '0.85rem',
      fontWeight: '500'
    },
    applyButton: {
      background: 'linear-gradient(135deg, #00a8ff, #0078d4)',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', text: 'Industry-leading compensation packages with performance bonuses' },
    { icon: '🏥', title: 'Health Benefits', text: 'Comprehensive medical, dental, and vision insurance coverage' },
    { icon: '🏖️', title: 'Flexible PTO', text: 'Unlimited paid time off to maintain work-life balance' },
    { icon: '🎓', title: 'Learning Budget', text: 'Annual budget for conferences, courses, and professional development' },
    { icon: '🏠', title: 'Remote Work', text: 'Hybrid work options with flexible remote work arrangements' },
    { icon: '🚀', title: 'Career Growth', text: 'Clear advancement paths and mentorship programs' }
  ];

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications and drive technical innovation. You\'ll work with cutting-edge technologies and collaborate with cross-functional teams.',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      type: 'Full-time',
      description: 'Create intuitive and beautiful user experiences for our digital products. You\'ll conduct user research, design interfaces, and prototype solutions.',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      type: 'Full-time',
      description: 'Build and maintain our cloud infrastructure while implementing CI/CD pipelines and ensuring system reliability and scalability.',
      skills: ['AWS/Azure', 'Kubernetes', 'Terraform', 'Jenkins', 'Monitoring', 'Security']
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      type: 'Full-time',
      description: 'Analyze complex data sets to derive insights and build predictive models that drive business decisions and product improvements.',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Visualization']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      description: 'Lead product strategy and roadmap development while working closely with engineering, design, and business teams to deliver exceptional products.',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Stories', 'Roadmapping']
    }
  ];

  return (
    <div style={styles.pageContainer} className="fade-in">
      <section style={styles.heroSection} className="slide-up">
        <h1 style={styles.heroTitle}>Join Our Team</h1>
        <p style={styles.heroSubtitle}>
          Build the future of technology with passionate innovators who are changing the world
        </p>
      </section>

      <section style={styles.benefitsSection} className="slide-up">
        <h2 style={styles.benefitsTitle}>Why Work at Trinix?</h2>
        <div style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              style={styles.benefitCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.benefitIcon}>{benefit.icon}</div>
              <h3 style={styles.benefitTitle}>{benefit.title}</h3>
              <p style={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{...styles.benefitsTitle, background: 'none', padding: '0', margin: '50px 0 30px'}}>
          Open Positions
        </h2>
        <div style={styles.jobsGrid}>
          {jobs.map((job, index) => (
            <div 
              key={index} 
              style={styles.jobCard} 
              className="slide-right"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.jobHeader}>
                <div>
                  <h3 style={styles.jobTitle}>{job.title}</h3>
                  <p style={styles.jobDepartment}>{job.department}</p>
                </div>
                <span style={styles.jobType}>{job.type}</span>
              </div>
              <p style={styles.jobDescription}>{job.description}</p>
              <div style={styles.skillsList}>
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={styles.skillTag}>{skill}</span>
                ))}
              </div>
              <button 
                style={styles.applyButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0, 120, 212, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
