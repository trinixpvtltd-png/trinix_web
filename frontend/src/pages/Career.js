import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import api from '../services/api';

const Career = () => {
  const [activeTab, setActiveTab] = useState('full-time');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    resume: '',
    coverLetter: ''
  });

  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole || !(selectedRole._id || selectedRole.id)) {
      alert('No job selected');
      return;
    }
    try {
      const jobId = selectedRole._id || selectedRole.id;
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        portfolio: formData.portfolio,
        resume: formData.resume,
        coverLetter: formData.coverLetter
      };
      await api.applyJob(jobId, payload);
      alert('Application submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', experience: '', portfolio: '', resume: '', coverLetter: '' });
      setShowApplicationForm(false);
    } catch (err) {
      console.error('Submit application error', err);
      alert('Failed to submit application: ' + (err?.message || 'Unknown error'));
    }
  };

  useEffect(() => {
    let mounted = true;
    const loadJobs = async () => {
      setJobsLoading(true);
      try {
        const data = await api.getJobs();
        if (!mounted) return;
        const list = Array.isArray(data?.jobs) ? data.jobs : (Array.isArray(data) ? data : []);
        setJobs(list);
      } catch (e) {
        console.error('Failed to load jobs', e);
      } finally {
        if (mounted) setJobsLoading(false);
      }
    };
    loadJobs();
    return () => { mounted = false; };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
      padding: '160px 0 120px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    title: {
      fontSize: window.innerWidth <= 768 ? '3.5rem' : '4.8rem',
      fontWeight: '800',
      marginBottom: '32px',
      lineHeight: '1.1',
      letterSpacing: '-0.025em',
      color: '#1e293b'
    },
    highlight: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      maxWidth: '800px',
      margin: '0 auto 60px',
      lineHeight: '1.7',
      color: '#64748b',
      fontWeight: '400'
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
      background: 'white',
      color: '#64748b',
      padding: '14px 28px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)'
    },
    activeTab: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderColor: 'transparent',
      color: 'white',
      boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)'
    },
    jobGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px'
    },
    jobCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px 32px',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)'
    },
    jobTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#1e293b'
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
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '24px',
      fontSize: '1rem'
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

  const applicationFormStyles = {
    formOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: showApplicationForm ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    formContainer: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '48px',
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      position: 'relative'
    },
    formTitle: {
      color: '#1e293b',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '32px',
      textAlign: 'center',
      letterSpacing: '-0.025em'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: '#475569',
      marginBottom: '8px',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      color: '#1e293b',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      '&:focus': {
        borderColor: '#6366f1',
        boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)'
      }
    },
    textarea: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      color: '#1e293b',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      '&:focus': {
        borderColor: '#6366f1',
        boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)'
      }
    },
    submitButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: '20px'
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Application Form */}
      <div style={applicationFormStyles.formOverlay} onClick={(e) => {
        if (e.target === e.currentTarget) setShowApplicationForm(false);
      }}>
        <div style={applicationFormStyles.formContainer}>
          <button 
            style={applicationFormStyles.closeButton}
            onClick={() => setShowApplicationForm(false)}
          >
            ×
          </button>
          <h2 style={applicationFormStyles.formTitle}>
            Apply for {selectedRole?.title}
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Full Name *</label>
              <input
                style={applicationFormStyles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Email *</label>
              <input
                style={applicationFormStyles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Phone Number *</label>
              <input
                style={applicationFormStyles.input}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Years of Experience *</label>
              <input
                style={applicationFormStyles.input}
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                placeholder="e.g., 3 years"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Portfolio URL</label>
              <input
                style={applicationFormStyles.input}
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://your-portfolio.com"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Resume Link *</label>
              <input
                style={applicationFormStyles.input}
                type="url"
                name="resume"
                value={formData.resume}
                onChange={handleInputChange}
                required
                placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
              />
            </div>
            <div style={applicationFormStyles.formGroup}>
              <label style={applicationFormStyles.label}>Cover Letter</label>
              <textarea
                style={applicationFormStyles.textarea}
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you'd be a great fit for this position"
              />
            </div>
            <button type="submit" style={applicationFormStyles.submitButton}>
              Submit Application
            </button>
          </form>
        </div>
      </div>

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
            {(jobsLoading ? (jobListings[activeTab] || []) : jobs.filter(j => {
              if (activeTab === 'full-time') return /full/i.test(j.type || j.title || '');
              if (activeTab === 'internships') return /intern/i.test(j.type || j.title || '');
              if (activeTab === 'part-time') return /part/i.test(j.type || j.title || '');
              return true;
            })).map((job, index) => (
              <div key={job._id || job.id || index} style={styles.jobCard}>
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <span style={styles.jobType}>{job.type || 'Position'}</span>
                <p style={{color: '#64748b', marginBottom: '16px'}}>
                  {job.location || 'Location'} • {job.salary || ''}
                </p>
                <p style={styles.jobDescription}>{job.description}</p>
                <button 
                  style={styles.applyButton}
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
