import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard = () => {
  // Normalize API base URL and ensure it contains /api
  const RAW_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const API_BASE_URL = (() => {
    const trimmed = RAW_BASE.replace(/\/$/, '');
    return /\/api(\b|\/)/.test(trimmed) ? trimmed : `${trimmed}/api`;
  })();
  const http = axios.create({ baseURL: API_BASE_URL, headers: { Accept: 'application/json' } });
  const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    };
  };
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ totalIdeas: 0, publishedIdeas: 0, pendingIdeas: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [newIdea, setNewIdea] = useState({
    type: 'research',
    title: '',
    description: '',
    category: 'Other',
    tags: '',
    priority: 'medium',
    expectedOutcome: '',
    resources: ''
  });

  const [userIdeas, setUserIdeas] = useState([]);
  const [recentIdeas, setRecentIdeas] = useState([]);

  // Navigation and auth
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      navigate('/login');
    }
  };

  const styles = {
    pageContainer: {
      marginTop: '80px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    
    // Modern Header Design
    header: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderBottom: '1px solid #e2e8f0',
      padding: '32px 0',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    userProfile: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.75rem',
      fontWeight: '700',
      border: '3px solid white',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
    },
    userInfo: {
      flex: 1
    },
    userName: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '4px'
    },
    userEmail: {
      color: '#64748b',
      fontSize: '1rem',
      marginBottom: '4px'
    },
    userMeta: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      display: 'flex',
      gap: '16px'
    },
    headerStats: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center'
    },
    statCard: {
      background: 'white',
      padding: '20px 24px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #f1f5f9',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      minWidth: '120px'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#6366f1',
      display: 'block',
      lineHeight: '1'
    },
    statLabel: {
      fontSize: '0.8125rem',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: '600',
      marginTop: '4px'
    },

    // Main Layout
    mainContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 32px',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: '40px'
    },

    // Enhanced Sidebar
    sidebar: {
      background: 'white',
      borderRadius: '20px',
      padding: '32px',
      height: 'fit-content',
      border: '1px solid #f1f5f9',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
      position: 'sticky',
      top: '120px'
    },
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '2px solid #f1f5f9'
    },
    sidebarNav: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    navItem: {
      marginBottom: '8px'
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 20px',
      borderRadius: '12px',
      textDecoration: 'none',
      color: '#64748b',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      border: '2px solid transparent'
    },
    navLinkActive: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      transform: 'translateX(4px)',
      boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
    },
    navIcon: {
      fontSize: '1.25rem',
      width: '24px',
      textAlign: 'center'
    },

    // Enhanced Content Area
    content: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
      minHeight: '600px'
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f8fafc'
    },
    contentTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    contentSubtitle: {
      color: '#64748b',
      fontSize: '1rem',
      marginTop: '4px'
    },

    // Form Styles
    formContainer: {
      maxWidth: '800px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', system-ui, sans-serif",
      outline: 'none',
      boxSizing: 'border-box',
      background: '#fafbfc'
    },
    textarea: {
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      minHeight: '140px',
      resize: 'vertical',
      fontFamily: "'Inter', system-ui, sans-serif",
      outline: 'none',
      boxSizing: 'border-box',
      background: '#fafbfc',
      lineHeight: '1.6'
    },
    select: {
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: "'Inter', system-ui, sans-serif",
      outline: 'none',
      boxSizing: 'border-box',
      background: '#fafbfc'
    },

    // Enhanced Buttons
    submitButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '16px 32px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
    },
    secondaryButton: {
      background: 'white',
      color: '#6366f1',
      padding: '16px 32px',
      border: '2px solid #6366f1',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },

    // Enhanced Idea Cards
    ideasGrid: {
      display: 'grid',
      gap: '32px'
    },
    ideaCard: {
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '32px',
      background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    ideaCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '20px'
    },
    ideaTitle: {
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '12px',
      lineHeight: '1.4'
    },
    ideaType: {
      padding: '6px 16px',
      borderRadius: '8px',
      fontSize: '0.8125rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    ideaTypeResearch: {
      background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
      color: '#1d4ed8'
    },
    ideaTypeProject: {
      background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
      color: '#166534'
    },
    ideaDescription: {
      color: '#64748b',
      lineHeight: '1.7',
      marginBottom: '24px',
      fontSize: '1rem'
    },
    ideaTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px'
    },
    ideaTag: {
      background: '#f1f5f9',
      color: '#475569',
      padding: '4px 12px',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      fontWeight: '500'
    },
    ideaMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '20px',
      borderTop: '1px solid #f1f5f9',
      fontSize: '0.875rem',
      color: '#64748b'
    },
    statusBadge: {
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '0.8125rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    statusPublished: {
      background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
      color: '#166534'
    },
    statusPending: {
      background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      color: '#92400e'
    },
    statusDraft: {
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      color: '#475569'
    },


  };
  // Helpers
  const normalizeIdea = (i) => ({
    id: i.id || i._id,
    type: i.type,
    title: i.title,
    description: i.description,
    category: i.category,
    status: i.status,
    date: i.date || (i.created_at ? new Date(i.created_at).toISOString().split('T')[0] : ''),
    views: i.views || 0,
    priority: i.priority || 'medium',
    tags: Array.isArray(i.tags) ? i.tags : (typeof i.tags === 'string' ? i.tags.split(',').map(t => t.trim()).filter(Boolean) : [])
  });

  // Load user profile, stats, and ideas from /api/users endpoints (via axios)
  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const dashRes = await http.get('/users/dashboard', getAuthConfig());
        const dash = dashRes?.data || {};
        if (!isMounted) return;

        const u = dash.user || {};
        const fullName = [u.first_name, u.last_name].filter(Boolean).join(' ') || 'User';
        const avatar = (u.first_name?.[0] || '') + (u.last_name?.[0] || '');
        setUser({
          name: fullName,
          email: u.email,
          company: u.company || '—',
          joinDate: u.created_at ? new Date(u.created_at).toLocaleString('en-US', { month: 'long', year: 'numeric' }) : '—',
          avatar: avatar || 'U'
        });

        const s = dash.stats || {};
        setStats({
          totalIdeas: s.totalIdeas || 0,
          publishedIdeas: s.publishedIdeas || 0,
          pendingIdeas: s.pendingIdeas || 0
        });

        const r = Array.isArray(dash.recentIdeas) ? dash.recentIdeas : [];
        setRecentIdeas(r.map(normalizeIdea));

        // Fetch full list of user's ideas
        const mineRes = await http.get('/users/ideas/mine', getAuthConfig());
        const mine = mineRes?.data || {};
        const ideas = Array.isArray(mine.ideas) ? mine.ideas : (Array.isArray(mine?.data?.ideas) ? mine.data.ideas : []);
        setUserIdeas(ideas.map(normalizeIdea));
      } catch (e) {
        // If dashboard route is not found, try to at least load user info from /auth/me
        if (e?.response?.status === 404) {
          try {
            const meRes = await http.get('/auth/me', getAuthConfig());
            const u = meRes?.data?.user || meRes?.data || {};
            const fullName = [u.first_name, u.last_name].filter(Boolean).join(' ') || 'User';
            const avatar = (u.first_name?.[0] || '') + (u.last_name?.[0] || '');
            setUser({
              name: fullName,
              email: u.email,
              company: u.company || '—',
              joinDate: u.created_at ? new Date(u.created_at).toLocaleString('en-US', { month: 'long', year: 'numeric' }) : '—',
              avatar: avatar || 'U'
            });
            setStats({ totalIdeas: 0, publishedIdeas: 0, pendingIdeas: 0 });
            setRecentIdeas([]);
            // Try to load user ideas (may still 404 depending on backend), ignore on error
            try {
              const mineRes = await http.get('/users/ideas/mine', getAuthConfig());
              const mine = mineRes?.data || {};
              const ideas = Array.isArray(mine.ideas) ? mine.ideas : (Array.isArray(mine?.data?.ideas) ? mine.data.ideas : []);
              setUserIdeas(ideas.map(normalizeIdea));
            } catch (_) {}
            setError('');
          } catch (innerErr) {
            setError(innerErr?.message || 'Failed to load dashboard');
          }
        } else {
          setError(e.message || 'Failed to load dashboard');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  // Add CSS (must be declared before any early returns to satisfy hooks rules)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .dashboard-input:focus,
      .dashboard-textarea:focus,
      .dashboard-select:focus {
        border-color: #6366f1 !important;
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1) !important;
        background: white !important;
      }
      
      .submit-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4);
      }
      
      .secondary-button:hover {
        background: #6366f1 !important;
        color: white !important;
      }
      
      .idea-card:hover {
        transform: translateY(-4px);
        border-color: rgba(99, 102, 241, 0.3);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
      }
      
      .overview-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      }
      
      .nav-link:hover:not(.active) {
        background: #f8fafc;
        color: #6366f1;
        border-color: #e2e8f0;
      }

      @media (max-width: 1024px) {
        .main-container {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }
        
        .header-container {
          flex-direction: column !important;
          gap: 24px !important;
          text-align: center !important;
        }
        
        .header-stats {
          flex-wrap: wrap !important;
          justify-content: center !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <span>Loading dashboard…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', color: '#b91c1c' }}>
        <span>Failed to load: {error}</span>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation aligned with backend Joi schema
    const title = (newIdea.title || '').trim();
    const description = (newIdea.description || '').trim();
    const category = (newIdea.category || '').trim();
    if (!title || !description || !category || !newIdea.type) {
      alert('Please fill in all required fields');
      return;
    }
    if (title.length < 2) {
      alert('Title must be at least 2 characters long');
      return;
    }
    if (description.length < 10) {
      alert('Description must be at least 10 characters long');
      return;
    }
    const allowedCategories = ['AI & ML','Healthcare','Fintech','Education','Smart Cities','Sustainability','Blockchain','IoT','Other'];
    if (!allowedCategories.includes(category)) {
      alert('Please select a valid category');
      return;
    }
    try {
      await http.post('/users/ideas', {
        type: newIdea.type,
        title,
        description,
        category,
        tags: typeof newIdea.tags === 'string' ? newIdea.tags.trim() : newIdea.tags,
        priority: newIdea.priority,
        expected_outcome: (newIdea.expectedOutcome || '').trim(),
        resources: (newIdea.resources || '').trim()
      }, getAuthConfig());

      // Refresh dashboard summary and ideas
      const dashRes = await http.get('/users/dashboard', getAuthConfig());
      const dash = dashRes?.data || {};
      const s = dash.stats || {};
      setStats({
        totalIdeas: s.totalIdeas || 0,
        publishedIdeas: s.publishedIdeas || 0,
        pendingIdeas: s.pendingIdeas || 0
      });
      const r = Array.isArray(dash.recentIdeas) ? dash.recentIdeas : [];
      setRecentIdeas(r.map(normalizeIdea));

      const mineRes = await http.get('/users/ideas/mine', getAuthConfig());
      const mine = mineRes?.data || {};
      const ideas = Array.isArray(mine.ideas) ? mine.ideas : (Array.isArray(mine?.data?.ideas) ? mine.data.ideas : []);
      setUserIdeas(ideas.map(normalizeIdea));

      setNewIdea({
        type: 'research',
        title: '',
        description: '',
        category: 'Other',
        tags: '',
        priority: 'medium',
        expectedOutcome: '',
        resources: ''
      });
      alert('Idea submitted successfully! 🎉');
      setActiveTab('my-ideas');
    } catch (err) {
      const msg = err?.response?.data?.message
        || (Array.isArray(err?.response?.data?.errors) && err.response.data.errors[0]?.message)
        || err?.message
        || 'Failed to submit idea';
      alert(msg);
    }
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <div style={styles.contentHeader}>
              <div>
                <h2 style={styles.contentTitle}>
                  <span>📊</span>
                  Dashboard Overview
                </h2>
                <p style={styles.contentSubtitle}>
                  Track your innovation journey and idea submissions
                </p>
              </div>
            </div>

            <div style={{marginBottom: '32px'}}>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🚀</span>
                Recent Ideas
              </h3>
              
              <div style={styles.ideasGrid}>
                {recentIdeas.slice(0, 2).map(idea => (
                  <div key={idea.id} style={styles.ideaCard} className="idea-card">
                    <div style={styles.ideaCardHeader}>
                      <div style={{flex: 1}}>
                        <h4 style={styles.ideaTitle}>{idea.title}</h4>
                        <span style={{
                          ...styles.ideaType,
                          ...(idea.type === 'research' ? styles.ideaTypeResearch : styles.ideaTypeProject)
                        }}>
                          {idea.type}
                        </span>
                      </div>
                    </div>
                    <p style={styles.ideaDescription}>{idea.description}</p>
                    <div style={styles.ideaTags}>
                      {idea.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} style={styles.ideaTag}>{tag}</span>
                      ))}
                    </div>
                    <div style={styles.ideaMeta}>
                      <span>{idea.date} • {idea.category}</span>
                      <span style={{
                        ...styles.statusBadge,
            ...(idea.status === 'Published' ? styles.statusPublished : 
              idea.status === 'Prelisted' ? styles.statusPending : styles.statusDraft)
                      }}>
                        {idea.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '32px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px'}}>Ready to share your next big idea?</h3>
              <p style={{color: '#64748b', marginBottom: '20px'}}>Submit your research concepts and project proposals to our innovation community.</p>
              <button
                style={styles.submitButton}
                className="submit-button"
                onClick={() => setActiveTab('submit')}
              >
                <span>💡</span>
                Submit New Idea
              </button>
            </div>
          </div>
        );

      case 'submit':
        return (
          <div>
            <div style={styles.contentHeader}>
              <div>
                <h2 style={styles.contentTitle}>
                  <span>💡</span>
                  Submit New Idea
                </h2>
                <p style={styles.contentSubtitle}>
                  Share your innovative research or project concept with our community
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={styles.formContainer}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Idea Type *</label>
                  <select
                    value={newIdea.type}
                    onChange={(e) => setNewIdea({...newIdea, type: e.target.value})}
                    style={styles.select}
                    className="dashboard-select"
                  >
                    <option value="research">🔬 Research Idea</option>
                    <option value="project">🚀 Project Concept</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Category *</label>
                  <select
                    value={newIdea.category}
                    onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
                    style={styles.select}
                    className="dashboard-select"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="AI & ML">🤖 AI & Machine Learning</option>
                    <option value="Healthcare">🏥 Healthcare</option>
                    <option value="Fintech">💰 Financial Technology</option>
                    <option value="Education">🎓 Education Technology</option>
                    <option value="Smart Cities">🏙️ Smart Cities</option>
                    <option value="Sustainability">🌱 Sustainability</option>
                    <option value="Blockchain">⛓️ Blockchain</option>
                    <option value="IoT">📡 Internet of Things</option>
                    <option value="Other">🔧 Other</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Idea Title *</label>
                <input
                  type="text"
                  value={newIdea.title}
                  onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
                  style={styles.input}
                  className="dashboard-input"
                  placeholder="Enter a compelling title for your idea"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Detailed Description *</label>
                <textarea
                  value={newIdea.description}
                  onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
                  style={styles.textarea}
                  className="dashboard-textarea"
                  placeholder="Provide a comprehensive description of your idea, including the problem it solves, your proposed solution, and potential impact..."
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Expected Outcome</label>
                <textarea
                  value={newIdea.expectedOutcome}
                  onChange={(e) => setNewIdea({...newIdea, expectedOutcome: e.target.value})}
                  style={styles.textarea}
                  className="dashboard-textarea"
                  placeholder="Describe the expected results, benefits, and long-term impact of this idea..."
                />
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Tags</label>
                  <input
                    type="text"
                    value={newIdea.tags}
                    onChange={(e) => setNewIdea({...newIdea, tags: e.target.value})}
                    style={styles.input}
                    className="dashboard-input"
                    placeholder="e.g., AI, automation, healthcare (comma separated)"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Priority Level</label>
                  <select
                    value={newIdea.priority}
                    onChange={(e) => setNewIdea({...newIdea, priority: e.target.value})}
                    style={styles.select}
                    className="dashboard-select"
                  >
                    <option value="low">🟢 Low Priority</option>
                    <option value="medium">🟡 Medium Priority</option>
                    <option value="high">🔴 High Priority</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Required Resources</label>
                <textarea
                  value={newIdea.resources}
                  onChange={(e) => setNewIdea({...newIdea, resources: e.target.value})}
                  style={styles.textarea}
                  className="dashboard-textarea"
                  placeholder="List any specific resources, tools, or expertise needed to implement this idea..."
                />
              </div>

              <div style={{display: 'flex', gap: '16px', paddingTop: '24px', borderTop: '1px solid #f1f5f9'}}>
                <button type="submit" style={styles.submitButton} className="submit-button">
                  <span>🚀</span>
                  Submit Idea
                </button>
                <button 
                  type="button" 
                  style={styles.secondaryButton} 
                  className="secondary-button"
                  onClick={() => setActiveTab('overview')}
                >
                  <span>↩️</span>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        );

      case 'my-ideas':
        return (
          <div>
            <div style={styles.contentHeader}>
              <div>
                <h2 style={styles.contentTitle}>
                  <span>📝</span>
                  My Ideas
                </h2>
                <p style={styles.contentSubtitle}>
                  Manage and track all your submitted ideas and their progress
                </p>
              </div>
              <button
                style={styles.submitButton}
                className="submit-button"
                onClick={() => setActiveTab('submit')}
              >
                <span>➕</span>
                New Idea
              </button>
            </div>

            <div style={styles.ideasGrid}>
              {userIdeas.map(idea => (
                <div key={idea.id} style={styles.ideaCard} className="idea-card">
                  <div style={styles.ideaCardHeader}>
                    <div style={{flex: 1}}>
                      <h4 style={styles.ideaTitle}>{idea.title}</h4>
                      <span style={{
                        ...styles.ideaType,
                        ...(idea.type === 'research' ? styles.ideaTypeResearch : styles.ideaTypeProject)
                      }}>
                        {idea.type}
                      </span>
                    </div>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        background: idea.priority === 'high' ? '#fee2e2' : idea.priority === 'medium' ? '#fef3c7' : '#dcfce7',
                        color: idea.priority === 'high' ? '#991b1b' : idea.priority === 'medium' ? '#92400e' : '#166534'
                      }}>
                        {idea.priority} priority
                      </span>
                    </div>
                  </div>
                  <p style={styles.ideaDescription}>{idea.description}</p>
                  <div style={styles.ideaTags}>
                    {idea.tags.map((tag, idx) => (
                      <span key={idx} style={styles.ideaTag}>{tag}</span>
                    ))}
                  </div>
                  <div style={styles.ideaMeta}>
                    <span>{idea.date} • {idea.category}</span>
                    <span style={{
                      ...styles.statusBadge,
            ...(idea.status === 'Published' ? styles.statusPublished : 
              idea.status === 'Prelisted' ? styles.statusPending : styles.statusDraft)
                    }}>
                      {idea.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {userIdeas.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '80px 40px',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '2px dashed #e2e8f0'
              }}>
                <span style={{fontSize: '4rem', marginBottom: '20px', display: 'block'}}>💡</span>
                <h3 style={{fontSize: '1.375rem', fontWeight: '700', marginBottom: '12px', color: '#1e293b'}}>
                  No ideas submitted yet
                </h3>
                <p style={{color: '#64748b', marginBottom: '24px', fontSize: '1rem'}}>
                  Start your innovation journey by submitting your first idea
                </p>
                <button
                  style={styles.submitButton}
                  className="submit-button"
                  onClick={() => setActiveTab('submit')}
                >
                  <span>🚀</span>
                  Submit Your First Idea
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Enhanced Header */}
      <div style={styles.header}>
        <div style={styles.headerContainer} className="header-container">
              <div style={styles.userProfile}>
                <div style={styles.avatar}>{user?.avatar}</div>
            <div style={styles.userInfo}>
                  <h1 style={styles.userName}>Welcome back, {user?.name}!</h1>
                  <p style={styles.userEmail}>{user?.email}</p>
              <div style={styles.userMeta}>
                    <span>📅 Member since {user?.joinDate}</span>
                    <span>🏢 {user?.company}</span>
              </div>
            </div>
          </div>
          <div style={styles.headerStats} className="header-stats">
            <div style={styles.statCard}>
                  <span style={styles.statNumber}>{stats.totalIdeas}</span>
              <span style={styles.statLabel}>Total Ideas</span>
            </div>
            <div style={styles.statCard}>
                  <span style={styles.statNumber}>{stats.publishedIdeas}</span>
              <span style={styles.statLabel}>Published</span>
            </div>
            <div style={styles.statCard}>
                  <span style={styles.statNumber}>{stats.pendingIdeas}</span>
              <span style={styles.statLabel}>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContainer} className="main-container">
        {/* Enhanced Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Navigation</h3>
          <ul style={styles.sidebarNav}>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'overview' ? styles.navLinkActive : {})
                }}
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <span style={styles.navIcon}>📊</span>
                Overview
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'submit' ? styles.navLinkActive : {})
                }}
                className={`nav-link ${activeTab === 'submit' ? 'active' : ''}`}
                onClick={() => setActiveTab('submit')}
              >
                <span style={styles.navIcon}>💡</span>
                Submit Idea
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'my-ideas' ? styles.navLinkActive : {})
                }}
                className={`nav-link ${activeTab === 'my-ideas' ? 'active' : ''}`}
                onClick={() => setActiveTab('my-ideas')}
              >
                <span style={styles.navIcon}>📝</span>
                My Ideas ({userIdeas.length})
              </div>
            </li>
            {/* Logout removed from sidebar to keep navbar responsible for sign-out */}
          </ul>
        </div>

        {/* Enhanced Content */}
        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;