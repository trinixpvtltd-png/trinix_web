import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      navigate('/login');
    }
  };
  
  // Users list fetched from backend
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState('');

  // Axios base (normalize /api)
  const RAW_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const API_BASE_URL = (() => {
    const trimmed = RAW_BASE.replace(/\/$/, '');
    return /\/api(\b|\/)/.test(trimmed) ? trimmed : `${trimmed}/api`;
  })();
  const http = axios.create({ baseURL: API_BASE_URL, headers: { Accept: 'application/json' } });
  const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return { headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) } };
  };

  // Load users when tab is 'users' or on first mount
  useEffect(() => {
    let mounted = true;
    async function loadUsers() {
      setUsersError('');
      setUsersLoading(true);
      try {
  // Important: don't start with '/' or axios will drop '/api' from baseURL
  const { data } = await http.get('admin/users', getAuthConfig());
        const list = Array.isArray(data?.users) ? data.users : [];
        if (!mounted) return;
        // Map backend users to table view model
        const mapped = list.map(u => ({
          id: u._id || u.id,
          name: [u.first_name, u.last_name].filter(Boolean).join(' ') || u.email,
          email: u.email,
          joinDate: u.created_at ? new Date(u.created_at).toISOString().split('T')[0] : '',
          lastLogin: u.last_login ? new Date(u.last_login).toISOString().replace('T', ' ').slice(0, 19) : '—',
          totalIdeas: 0, // Placeholder; can be populated with another endpoint later
          status: u.verified ? 'Active' : 'Inactive'
        }));
        setUsers(mapped);
      } catch (err) {
        const msg = err?.response?.data?.message || err.message || 'Failed to load users';
        setUsersError(msg);
        // Redirect on auth/permission issues
        if (err?.response?.status === 401) navigate('/login');
        if (err?.response?.status === 403) navigate('/dashboard');
      } finally {
        if (mounted) setUsersLoading(false);
      }
    }
    loadUsers();
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [allIdeas] = useState([
    {
      id: 1,
      userId: 1,
      userName: 'John Doe',
      type: 'research',
      title: 'AI in Healthcare Automation',
      description: 'Research on implementing AI-driven automation in healthcare workflows to improve patient care efficiency.',
      category: 'Healthcare',
      status: 'Published',
      date: '2024-09-15',
      views: 156,
      priority: 'high'
    },
    {
      id: 2,
      userId: 1,
      userName: 'John Doe',
      type: 'project',
      title: 'Smart City Traffic Management',
      description: 'IoT-based traffic management system using real-time data analytics to optimize traffic flow.',
      category: 'Smart Cities',
      status: 'Under Review',
      date: '2024-09-28',
      views: 23,
      priority: 'medium'
    },
    {
      id: 3,
      userId: 2,
      userName: 'Sarah Johnson',
      type: 'research',
      title: 'Blockchain in Supply Chain',
      description: 'Implementing blockchain technology for transparent and secure supply chain management.',
      category: 'Blockchain',
      status: 'Published',
      date: '2024-09-20',
      views: 89,
      priority: 'high'
    }
  ]);

  const [stats] = useState({
    totalUsers: 3,
    activeUsers: 2,
    totalIdeas: 15,
    publishedIdeas: 10,
    pendingIdeas: 5,
    todayLogins: 5,
    totalApplications: 8,
    newApplications: 3
  });

  const [applications] = useState([
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex.t@gmail.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Full Stack Developer',
      type: 'Full-Time',
      experience: '5 years',
      appliedDate: '2024-09-28',
      status: 'Under Review',
      resumeLink: 'https://drive.google.com/resume1',
      portfolio: 'https://alexthompson.dev'
    },
    {
      id: 2,
      name: 'Emily Chen',
      email: 'emily.chen@outlook.com',
      phone: '+1 (555) 987-6543',
      position: 'Software Engineering Intern',
      type: 'Internship',
      experience: '1 year',
      appliedDate: '2024-09-29',
      status: 'New',
      resumeLink: 'https://drive.google.com/resume2',
      portfolio: 'https://github.com/emilychen'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.b@yahoo.com',
      phone: '+1 (555) 456-7890',
      position: 'Technical Writer',
      type: 'Part-Time',
      experience: '3 years',
      appliedDate: '2024-09-30',
      status: 'Shortlisted',
      resumeLink: 'https://drive.google.com/resume3',
      portfolio: 'https://michaelbrown.com/portfolio'
    }
  ]);

  const styles = {
    pageContainer: {
      marginTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    header: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '24px 0'
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    adminTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      marginBottom: '4px'
    },
    adminSubtitle: {
      opacity: 0.8,
      fontSize: '0.9375rem'
    },
    headerStats: {
      display: 'flex',
      gap: '32px'
    },
    headerStat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: '700',
      display: 'block'
    },
    statLabel: {
      fontSize: '0.8125rem',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    mainContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '32px 24px',
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '32px'
    },
    sidebar: {
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      height: 'fit-content',
      border: '1px solid #f1f5f9',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
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
      padding: '12px 16px',
      borderRadius: '10px',
      textDecoration: 'none',
      color: '#64748b',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontSize: '0.9375rem',
      fontWeight: '500'
    },
    navLinkActive: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white'
    },
    content: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
    },
    contentTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '24px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #f1f5f9',
      background: 'linear-gradient(135deg, #f8fafc, #ffffff)'
    },
    statCardIcon: {
      fontSize: '2rem',
      marginBottom: '12px'
    },
    statCardNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '4px'
    },
    statCardLabel: {
      color: '#64748b',
      fontSize: '0.875rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '24px'
    },
    tableHeader: {
      background: '#f8fafc',
      borderBottom: '2px solid #e2e8f0'
    },
    tableHeaderCell: {
      padding: '16px 12px',
      textAlign: 'left',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    tableRow: {
      borderBottom: '1px solid #f1f5f9',
      transition: 'background-color 0.2s ease'
    },
    tableCell: {
      padding: '16px 12px',
      fontSize: '0.9375rem',
      color: '#374151'
    },
    badge: {
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    badgeActive: {
      background: '#dcfce7',
      color: '#166534'
    },
    badgeInactive: {
      background: '#fee2e2',
      color: '#991b1b'
    },
    badgePublished: {
      background: '#dcfce7',
      color: '#166534'
    },
    badgePending: {
      background: '#fef3c7',
      color: '#92400e'
    },
    badgeResearch: {
      background: '#dbeafe',
      color: '#1d4ed8'
    },
    badgeProject: {
      background: '#e0e7ff',
      color: '#3730a3'
    },
    badgeNew: {
      background: '#dbeafe',
      color: '#1e40af'
    },
    badgeUnderReview: {
      background: '#fef3c7',
      color: '#92400e'
    },
    badgeShortlisted: {
      background: '#d1fae5',
      color: '#065f46'
    },
    badgeRejected: {
      background: '#fee2e2',
      color: '#991b1b'
    },
    actionButton: {
      background: 'transparent',
      border: '1px solid #e2e8f0',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.8125rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginRight: '12px'
    },
    viewButton: {
      color: '#6366f1',
      borderColor: '#6366f1'
    },
    editButton: {
      color: '#059669',
      borderColor: '#059669'
    },
    deleteButton: {
      color: '#dc2626',
      borderColor: '#dc2626'
    }
  };

  // Add CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .table-row:hover {
        background-color: #f8fafc;
      }
      
      .action-button:hover {
        transform: translateY(-1px);
      }
      
      .view-button:hover {
        background-color: #6366f1;
        color: white;
      }
      
      .edit-button:hover {
        background-color: #059669;
        color: white;
      }
      
      .delete-button:hover {
        background-color: #dc2626;
        color: white;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 style={styles.contentTitle}>🎛️ Admin Overview</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
               
                <div style={styles.statCardNumber}>{stats.totalUsers}</div>
                <div style={styles.statCardLabel}>Total Users</div>
              </div>
              <div style={styles.statCard}>
               
                <div style={styles.statCardNumber}>{stats.activeUsers}</div>
                <div style={styles.statCardLabel}>Active Users</div>
              </div>
              <div style={styles.statCard}>
                
                <div style={styles.statCardNumber}>{stats.totalIdeas}</div>
                <div style={styles.statCardLabel}>Total Ideas</div>
              </div>
              <div style={styles.statCard}>
                
                <div style={styles.statCardNumber}>{stats.publishedIdeas}</div>
                <div style={styles.statCardLabel}>Published Ideas</div>
              </div>
              <div style={styles.statCard}>
                
                <div style={styles.statCardNumber}>{stats.pendingIdeas}</div>
                <div style={styles.statCardLabel}>Pending Review</div>
              </div>
              <div style={styles.statCard}>
                
                <div style={styles.statCardNumber}>{stats.todayLogins}</div>
                <div style={styles.statCardLabel}>Today's Logins</div>
              </div>
            </div>
            
            <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px'}}>Recent Activity</h3>
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
              <div style={{marginBottom: '12px', fontSize: '0.9375rem'}}>
                <span style={{color: '#6366f1', fontWeight: '500'}}>John Doe</span> submitted a new research idea: "AI in Healthcare Automation"
                <span style={{color: '#64748b', marginLeft: '8px'}}>2 hours ago</span>
              </div>
              <div style={{marginBottom: '12px', fontSize: '0.9375rem'}}>
                <span style={{color: '#6366f1', fontWeight: '500'}}>Sarah Johnson</span> logged in
                <span style={{color: '#64748b', marginLeft: '8px'}}>4 hours ago</span>
              </div>
              <div style={{fontSize: '0.9375rem'}}>
                <span style={{color: '#6366f1', fontWeight: '500'}}>Mike Chen</span> project idea "Smart City Traffic" was published
                <span style={{color: '#64748b', marginLeft: '8px'}}>1 day ago</span>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div>
            <h2 style={styles.contentTitle}>👥 User Management</h2>
            {usersLoading && (
              <div style={{marginBottom: '12px', color: '#334155'}}>Loading users...</div>
            )}
            {usersError && (
              <div style={{marginBottom: '12px', color: '#b91c1c'}}>Error: {usersError}</div>
            )}
            <table style={styles.table}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={styles.tableHeaderCell}>User</th>
                  <th style={styles.tableHeaderCell}>Email</th>
                  <th style={styles.tableHeaderCell}>Join Date</th>
                  <th style={styles.tableHeaderCell}>Last Login</th>
                  <th style={styles.tableHeaderCell}>Ideas</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={styles.tableRow} className="table-row">
                    <td style={styles.tableCell}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span style={{fontWeight: '500'}}>{user.name}</span>
                      </div>
                    </td>
                    <td style={styles.tableCell}>{user.email}</td>
                    <td style={styles.tableCell}>{user.joinDate}</td>
                    <td style={styles.tableCell}>{user.lastLogin}</td>
                    <td style={styles.tableCell}>{user.totalIdeas}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.badge,
                        ...(user.status === 'Active' ? styles.badgeActive : styles.badgeInactive)
                      }}>
                        {user.status}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <button style={{...styles.actionButton, ...styles.viewButton}} className="action-button view-button">
                        View
                      </button>
                      <button style={{...styles.actionButton, ...styles.editButton}} className="action-button edit-button">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
                {!usersLoading && users.length === 0 && (
                  <tr>
                    <td style={styles.tableCell} colSpan={7}>No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );

      case 'applications':
        return (
          <div>
            <h2 style={styles.contentTitle}>📋 Job Applications</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statCardIcon}>📥</div>
                <div style={styles.statCardNumber}>{stats.totalApplications}</div>
                <div style={styles.statCardLabel}>Total Applications</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statCardIcon}>🆕</div>
                <div style={styles.statCardNumber}>{stats.newApplications}</div>
                <div style={styles.statCardLabel}>New Applications</div>
              </div>
            </div>
            <table style={styles.table}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={styles.tableHeaderCell}>Applicant</th>
                  <th style={styles.tableHeaderCell}>Position</th>
                  <th style={styles.tableHeaderCell}>Type</th>
                  <th style={styles.tableHeaderCell}>Experience</th>
                  <th style={styles.tableHeaderCell}>Applied Date</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id} style={styles.tableRow} className="table-row">
                    <td style={styles.tableCell}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          {app.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div style={{fontWeight: '500'}}>{app.name}</div>
                          <div style={{fontSize: '0.8125rem', color: '#64748b'}}>{app.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>{app.position}</td>
                    <td style={styles.tableCell}>{app.type}</td>
                    <td style={styles.tableCell}>{app.experience}</td>
                    <td style={styles.tableCell}>{app.appliedDate}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.badge,
                        ...(app.status === 'New' ? styles.badgeNew :
                           app.status === 'Under Review' ? styles.badgeUnderReview :
                           app.status === 'Shortlisted' ? styles.badgeShortlisted :
                           styles.badgeRejected)
                      }}>
                        {app.status}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <button style={{...styles.actionButton, ...styles.viewButton}} className="action-button view-button">
                          View Details
                        </button>
                        <button style={{...styles.actionButton, ...styles.editButton}} className="action-button edit-button">
                          Update Status
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'ideas':
        return (
          <div>
            <h2 style={styles.contentTitle}>💡 Ideas Management</h2>
            <table style={styles.table}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={styles.tableHeaderCell}>Title</th>
                  <th style={styles.tableHeaderCell}>User</th>
                  <th style={styles.tableHeaderCell}>Type</th>
                  <th style={styles.tableHeaderCell}>Category</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Date</th>
                  <th style={styles.tableHeaderCell}>Views</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allIdeas.map(idea => (
                  <tr key={idea.id} style={styles.tableRow} className="table-row">
                    <td style={styles.tableCell}>
                      <div>
                        <div style={{fontWeight: '500', marginBottom: '4px'}}>{idea.title}</div>
                        <div style={{fontSize: '0.8125rem', color: '#64748b'}}>
                          {idea.description.substring(0, 80)}...
                        </div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>{idea.userName}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.badge,
                        ...(idea.type === 'research' ? styles.badgeResearch : styles.badgeProject)
                      }}>
                        {idea.type}
                      </span>
                    </td>
                    <td style={styles.tableCell}>{idea.category}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.badge,
                        ...(idea.status === 'Published' ? styles.badgePublished : styles.badgePending)
                      }}>
                        {idea.status}
                      </span>
                    </td>
                    <td style={styles.tableCell}>{idea.date}</td>
                    <td style={styles.tableCell}>{idea.views}</td>
                    <td style={styles.tableCell}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <button style={{...styles.actionButton, ...styles.viewButton}} className="action-button view-button">
                          View
                        </button>
                        <button style={{...styles.actionButton, ...styles.editButton}} className="action-button edit-button">
                          {idea.status === 'Published' ? 'Unpublish' : 'Publish'}
                        </button>
                        <button style={{...styles.actionButton, ...styles.deleteButton}} className="action-button delete-button">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContainer}>
          <div>
            <h1 style={styles.adminTitle}>🛡️ Admin Dashboard</h1>
            <p style={styles.adminSubtitle}>Trinix Ideas Management System</p>
          </div>
          <div style={styles.headerStats}>
            <div style={styles.headerStat}>
              <span style={styles.statNumber}>{stats.totalUsers}</span>
              <span style={styles.statLabel}>Users</span>
            </div>
            <div style={styles.headerStat}>
              <span style={styles.statNumber}>{stats.totalIdeas}</span>
              <span style={styles.statLabel}>Ideas</span>
            </div>
            <div style={styles.headerStat}>
              <span style={styles.statNumber}>{stats.todayLogins}</span>
              <span style={styles.statLabel}>Today Logins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContainer}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <ul style={styles.sidebarNav}>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'overview' ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveTab('overview')}
              >
                <span>🎛️</span>
                Overview
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'users' ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveTab('users')}
              >
                <span>👥</span>
                Users
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'ideas' ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveTab('ideas')}
              >
                <span>💡</span>
                Ideas
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={{
                  ...styles.navLink,
                  ...(activeTab === 'applications' ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveTab('applications')}
              >
                <span>📝</span>
                Applications
              </div>
            </li>
            <li style={styles.navItem}>
              <div
                style={styles.navLink}
                onClick={handleLogout}
              >
                <span>🚪</span>
                Logout
              </div>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;