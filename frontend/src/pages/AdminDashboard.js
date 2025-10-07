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
  
  const openAddJob = () => {
    setJobForm({ title: '', location: '', type: '', description: '', salary: '', is_active: true });
    setShowJobModal(true);
  };

  const createJob = async () => {
    try {
      const urlPath = `admin/jobs`;
      const payload = { ...jobForm };
      const { data } = await http.post(urlPath, payload, getAuthConfig());
      alert(data?.message || 'Job created');
      setShowJobModal(false);
      // Optionally refresh lists or stats
    } catch (err) {
      console.error('createJob error', err?.response || err);
      alert('Failed to create job: ' + (err?.response?.data?.message || err?.message || 'unknown'));
    }
  };
  
  // Users list fetched from backend
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState('');

  // Replace mock stats and idea/application fixtures with backend-driven state.
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalIdeas: 0,
    publishedIdeas: 0,
    pendingIdeas: 0,
    totalApplications: 0,
    newApplications: 0
  });
  const [ideas, setIdeas] = useState([]);
  const [ideasLoading, setIdeasLoading] = useState(false);
  const [ideasError, setIdeasError] = useState('');
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState('');
  const [selectedJobForApplicants, setSelectedJobForApplicants] = useState(null);
  // Selected idea for detail modal
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  // Selected user for view/edit
  const [selectedUser, setSelectedUser] = useState(null);
  const [userEditing, setUserEditing] = useState(false);
  const [userSaving, setUserSaving] = useState(false);

  // Add job modal state
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', location: '', type: '', description: '', salary: '', is_active: true });

  // Ideas filter state
  const [ideaFilter, setIdeaFilter] = useState('all'); // 'all', 'project', 'research'

  // Applicants filter state
  const [applicantFilter, setApplicantFilter] = useState('all'); // 'all', 'pending', 'approved', 'rejected'

  // Axios base (normalize /api)
  const RAW_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const API_BASE_URL = (() => {
    let trimmed = RAW_BASE.replace(/\/$/, '');
    if (!/\/api(\b|\/)/.test(trimmed)) trimmed = `${trimmed}/api`;
    // ensure trailing slash so calling http.get('admin/users') works as expected
    return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
  })();
  const http = axios.create({ baseURL: API_BASE_URL, headers: { Accept: 'application/json' } });
  const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return { headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) } };
  };
  // Derive API origin (e.g. http://localhost:5000) to build full absolute URLs when needed
  const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '');

  // Idea actions: view, publish/unpublish, delete
  const viewIdea = async (id) => {
    setDetailLoading(true);
    try {
  const safeId = encodeURIComponent(String(id));
  const detailUrl = `${API_ORIGIN}/api/admin/ideas/${safeId}`;
  console.debug('viewIdea request:', { detailUrl, headers: getAuthConfig().headers });
  const { data } = await axios.get(detailUrl, getAuthConfig());
      const idea = data?.idea || data;
      setSelectedIdea({
        id: idea._id || idea.id,
        title: idea.title,
        description: idea.description || idea.abstract || '',
        userName: idea.user_id ? `${idea.user_id.first_name || ''} ${idea.user_id.last_name || ''}`.trim() : (idea.user_name || 'Unknown'),
        type: idea.type,
        category: idea.category,
        status: idea.status,
        created_at: idea.created_at || idea.published_at || idea.createdAt || ''
      });
    } catch (err) {
      // If admin detail endpoint is not available or user not authorized, fall back to the ideas we already loaded (public list)
      const status = err?.response?.status;
      if ((status === 404 || status === 401 || status === 403) && Array.isArray(ideas)) {
        const local = ideas.find(x => x.id === id || x._id === id);
        if (local) {
          setSelectedIdea(local);
          setDetailLoading(false);
          return;
        }
      }
      alert('Failed to load idea: ' + (err?.response?.data?.message || err.message));
    } finally {
      setDetailLoading(false);
    }
  };

  const closeModal = () => setSelectedIdea(null);

  const togglePublish = async (id, publish) => {
    try {
  const safeId = encodeURIComponent(String(id));
  const url = `${API_ORIGIN}/api/admin/ideas/${safeId}/publish`;
  console.debug('togglePublish request:', { url, publish, headers: getAuthConfig().headers });
  await axios.post(url, { publish }, getAuthConfig());
      setIdeas(prev => prev.map(i => i.id === id ? { ...i, status: publish ? 'Published' : 'Prelisted' } : i));
      setStats(prev => ({ ...prev, publishedIdeas: publish ? prev.publishedIdeas + 1 : Math.max(0, prev.publishedIdeas - 1) }));
    } catch (err) {
      console.error('togglePublish error', err?.response || err);
      alert('Failed to change publish state: ' + (err?.response?.data?.message || err.message));
    }
  };

  const deleteIdea = async (id) => {
    if (!window.confirm('Delete this idea? This action cannot be undone.')) return;
    try {
  const safeId = encodeURIComponent(String(id));
  const urlPath = `admin/ideas/${safeId}`; // relative to http.baseURL
  console.debug('deleteIdea request:', { urlPath, headers: getAuthConfig().headers });
  // use the preconfigured http instance so baseURL and headers are consistent
  await http.delete(urlPath, getAuthConfig());
  // remove any matching idea (handle either id or _id stored in objects)
  setIdeas(prev => prev.filter(i => String(i.id || i._id || '') !== String(id)));
  setStats(prev => ({ ...prev, totalIdeas: Math.max(0, (prev.totalIdeas || 1) - 1) }));
      // feedback
      alert('Idea deleted');
    } catch (err) {
      console.error('deleteIdea error', err?.response || err);
      alert('Failed to delete idea: ' + (err?.response?.data?.message || err.message));
    }
  };

  // Admin: view user details (fetch by id)
  const viewUser = async (id) => {
    try {
      const safeId = encodeURIComponent(String(id));
      const urlPath = `admin/users/${safeId}`;
      console.debug('viewUser request:', { urlPath, headers: getAuthConfig().headers });
      const { data } = await http.get(urlPath, getAuthConfig());
      const u = data?.user || data;
      setSelectedUser({
        id: u._id || u.id,
        first_name: u.first_name,
        last_name: u.last_name,
        email: u.email,
        company: u.company,
        role: u.role,
        verified: !!u.verified,
        created_at: u.created_at,
        last_login: u.last_login
      });
      setUserEditing(false);
    } catch (err) {
      console.error('viewUser error', err?.response || err);
      const status = err?.response?.status;
      // fallback: if admin detail endpoint isn't available (404) or authorization fails, use local list
      if ((status === 404 || status === 401 || status === 403) && Array.isArray(users)) {
        const local = users.find(u => String(u.id) === String(id) || String(u._id || '') === String(id));
        if (local) {
          setSelectedUser({
            id: local.id,
            first_name: local.name ? local.name.split(' ')[0] : '',
            last_name: local.name ? local.name.split(' ').slice(1).join(' ') : '',
            email: local.email,
            company: local.company || '',
            role: local.role || 'user',
            verified: local.status === 'Active',
            created_at: local.joinDate,
            last_login: local.lastLogin
          });
          return setUserEditing(false);
        }
      }
      alert('Failed to load user: ' + (err?.response?.data?.message || err.message));
    }
  };

  const closeUserModal = () => setSelectedUser(null);

  const startEditUser = (id) => {
    // if this user is already loaded, switch to edit mode; otherwise fetch then edit
    if (selectedUser && String(selectedUser.id) === String(id)) {
      setUserEditing(true);
      return;
    }
    // Try to fetch details then open edit. If fetch fails but a fallback populated selectedUser,
    // allow editing that fallback.
    (async () => {
      try {
        await viewUser(id);
        setUserEditing(true);
      } catch (err) {
        console.error('startEditUser error', err);
        if (selectedUser && String(selectedUser.id) === String(id)) {
          setUserEditing(true);
        } else {
          alert('Unable to start editing user: ' + (err?.response?.data?.message || err.message));
        }
      }
    })();
  };

  const saveUser = async () => {
    if (!selectedUser) return;
    setUserSaving(true);
    try {
      const safeId = encodeURIComponent(String(selectedUser.id));
      const payload = {
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
        company: selectedUser.company,
        role: selectedUser.role,
        verified: !!selectedUser.verified
      };
  const relativePath = `admin/users/${safeId}`;
  // Ensure API_ORIGIN has no trailing slash, then append /api/ + relativePath
  const absoluteUrl = `${API_ORIGIN.replace(/\/$/, '')}/api/${relativePath}`;
      console.debug('saveUser request', { absoluteUrl, relativePath, payload, headers: getAuthConfig().headers, baseURL: http.defaults?.baseURL });
      const { data } = await axios.put(absoluteUrl, payload, getAuthConfig());
      alert(data?.message || 'User updated');
      // refresh list
      setUsers(prev => prev.map(u => String(u.id) === String(selectedUser.id) ? ({ ...u, name: [selectedUser.first_name, selectedUser.last_name].filter(Boolean).join(' '), email: selectedUser.email, status: selectedUser.verified ? 'Active' : 'Inactive' }) : u));
      setUserEditing(false);
      setSelectedUser(null);
    } catch (err) {
      console.error('saveUser error', err?.response || err);
      const status = err?.response?.status;
      if (status === 404) {
        const attempted = err?.config?.url || 'unknown URL';
        alert('Failed to save user: Not found (404). Attempted: ' + attempted);
      } else {
        alert('Failed to save user: ' + (err?.response?.data?.message || err.message));
      }
    } finally {
      setUserSaving(false);
    }
  };

  // Delete job function
  const deleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job? This action cannot be undone.')) return;
    try {
      const safeId = encodeURIComponent(String(jobId));
      const urlPath = `admin/jobs/${safeId}`;
      console.debug('deleteJob request:', { urlPath, headers: getAuthConfig().headers });
      await http.delete(urlPath, getAuthConfig());
      // Remove job from local state
      setJobs(prev => prev.filter(j => String(j._id || j.id) !== String(jobId)));
      alert('Job deleted successfully');
    } catch (err) {
      console.error('deleteJob error', err?.response || err);
      alert('Failed to delete job: ' + (err?.response?.data?.message || err.message));
    }
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
          id: String(u._id || u.id || ''),
          name: [u.first_name, u.last_name].filter(Boolean).join(' ') || u.email,
          email: u.email,
          joinDate: u.created_at ? new Date(u.created_at).toISOString().split('T')[0] : '',
          lastLogin: u.last_login ? new Date(u.last_login).toISOString().replace('T', ' ').slice(0, 19) : '—',
          totalIdeas: 0, // Placeholder; can be populated with another endpoint later
          status: u.verified ? 'Active' : 'Inactive'
        }));
        setUsers(mapped);
        // backend returns total in envelope; prefer it for accurate count
        if (typeof data?.total === 'number') {
          setStats(prev => ({ ...prev, totalUsers: data.total }));
        } else {
          setStats(prev => ({ ...prev, totalUsers: mapped.length }));
        }
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

  // Load job applications summary for admin (total and recent/new applications)
  useEffect(() => {
    let mounted = true;
    async function loadJobApplications() {
      try {
        const { data } = await http.get('admin/jobs', getAuthConfig());
        if (!mounted) return;
        // Backend returns totalApplications when available; fall back to summing job.applicationCount or job.applications
        let totalApplications = 0;
        if (typeof data?.totalApplications === 'number') {
          totalApplications = data.totalApplications;
        } else if (Array.isArray(data?.jobs)) {
          totalApplications = data.jobs.reduce((sum, j) => sum + (j.applicationCount || (Array.isArray(j.applications) ? j.applications.length : 0)), 0);
        }

        // Compute new applications in the last 7 days
        let newApplications = 0;
        if (Array.isArray(data?.jobs)) {
          const cutoff = new Date();
          cutoff.setDate(cutoff.getDate() - 7);
          data.jobs.forEach(job => {
            const apps = Array.isArray(job.applications) ? job.applications : [];
            apps.forEach(a => {
              const appliedAt = a?.applied_at || a?.appliedAt || a?.appliedAt || a?.appliedAt;
              const dt = appliedAt ? new Date(appliedAt) : null;
              if (dt && !isNaN(dt) && dt > cutoff) newApplications += 1;
            });
          });
        }

  setStats(prev => ({ ...prev, totalApplications, newApplications }));
  // store jobs for admin views
  if (Array.isArray(data?.jobs)) setJobs(data.jobs);
      } catch (err) {
        // If admin endpoint not accessible (403/401), ignore and keep zeros — other parts handle redirects
        console.debug('loadJobApplications error', err?.response || err?.message || err);
      }
    }
    loadJobApplications();
    return () => { mounted = false; };
  }, []);

  // Load idea stats (public endpoint)
  useEffect(() => {
    let mounted = true;
    async function loadIdeaStats() {
      setIdeasLoading(true);
      setIdeasError('');
      try {
        const { data } = await http.get('users/ideas');
        if (!mounted) return;
        const list = Array.isArray(data?.ideas) ? data.ideas : [];
        // Map to a lightweight view model
        const mapped = list.map(it => ({
          id: String(it._id || it.id || ''),
          title: it.title,
          description: it.description,
          userName: it.user_id ? `${it.user_id.first_name || ''} ${it.user_id.last_name || ''}`.trim() : (it.user_name || 'Unknown'),
          type: it.type,
          category: it.category,
          status: it.status,
          created_at: it.created_at
        }));
        setIdeas(mapped);
        const totalIdeas = mapped.length;
        const publishedIdeas = mapped.filter(i => i.status === 'Published').length;
        const pendingIdeas = mapped.filter(i => i.status === 'Prelisted').length;
        setStats(prev => ({ ...prev, totalIdeas, publishedIdeas, pendingIdeas }));
      } catch (e) {
        setIdeasError(e?.response?.data?.message || e.message || 'Failed to load ideas');
      } finally {
        if (mounted) setIdeasLoading(false);
      }
    }
    loadIdeaStats();
    return () => { mounted = false; };
  }, []);


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

      .action-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
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
            </div>
            
            <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px'}}>Recent Activity</h3>
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
              <div style={{marginBottom: '12px', fontSize: '0.9375rem', color: '#64748b'}}>
                Recent activity will appear here when available from backend events. This card is a placeholder until the backend provides an activity feed or audit logs.
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
                      <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                        <button type="button" onClick={() => viewUser(user.id)} style={{...styles.actionButton, ...styles.viewButton}} className="action-button view-button">
                          View
                        </button>
                        <button type="button" onClick={() => startEditUser(user.id)} style={{...styles.actionButton, ...styles.editButton}} className="action-button edit-button">
                          Edit
                        </button>
                      </div>
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
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h2 style={styles.contentTitle}>📋 Job Applications</h2>
              <div>
                <button
                  onClick={openAddJob}
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                    color: 'white',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  + Add Job
                </button>
              </div>
            </div>
            <div style={{marginBottom: '12px', color: '#475569'}}>
              Below is the jobs list — click "View Applicants" to see applicants for a job. Approve or reject applicants from the modal.
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statCardNumber}>{stats.totalApplications}</div>
                <div style={styles.statCardLabel}>Total Applications</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statCardNumber}>{stats.newApplications}</div>
                <div style={styles.statCardLabel}>New Applications</div>
              </div>
            </div>

            <div style={{marginTop: '18px'}}>
              <h3 style={{marginBottom: '8px'}}>Jobs</h3>
              <table style={styles.table}>
                <thead style={styles.tableHeader}><tr>
                  <th style={styles.tableHeaderCell}>Title</th>
                  <th style={styles.tableHeaderCell}>Location</th>
                  <th style={styles.tableHeaderCell}>Type</th>
                  <th style={styles.tableHeaderCell}>Applicants</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr></thead>
                <tbody>
                  {Array.isArray(jobs) && jobs.map(j => (
                    <tr key={j._id || j.id} style={styles.tableRow}>
                      <td style={styles.tableCell}>{j.title}</td>
                      <td style={styles.tableCell}>{j.location}</td>
                      <td style={styles.tableCell}>{j.type}</td>
                      <td style={styles.tableCell}>{Array.isArray(j.applications) ? j.applications.length : 0}</td>
                      <td style={styles.tableCell}>
                        <div style={{display: 'flex', gap: '8px'}}>
                          <button onClick={() => setSelectedJobForApplicants(j)} style={{...styles.actionButton, ...styles.viewButton}}>View Applicants</button>
                          <button onClick={() => deleteJob(j._id || j.id)} style={{...styles.actionButton, ...styles.deleteButton}}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!jobsLoading && Array.isArray(jobs) && jobs.length === 0 && (
                    <tr><td style={styles.tableCell} colSpan={5}>No jobs found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Applicants modal */}
            {selectedJobForApplicants && (
              <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={() => setSelectedJobForApplicants(null)}>
                <div style={{width: '900px', maxWidth: '98%', background: 'white', borderRadius: '10px', padding: '20px'}} onClick={e => e.stopPropagation()}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
                    <h3 style={{margin: 0}}>Applicants for: {selectedJobForApplicants.title}</h3>
                    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <label style={{fontSize: '0.875rem', color: '#64748b', fontWeight: '500'}}>Filter:</label>
                        <select 
                          value={applicantFilter} 
                          onChange={(e) => setApplicantFilter(e.target.value)}
                          style={{
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: '1px solid #e2e8f0',
                            fontSize: '0.875rem',
                            background: 'white',
                            cursor: 'pointer',
                            minWidth: '100px'
                          }}
                        >
                          <option value="all">All Status</option>
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                      <button onClick={() => setSelectedJobForApplicants(null)} style={{...styles.actionButton}}>Close</button>
                    </div>
                  </div>
                  <div style={{maxHeight: '70vh', overflow: 'auto'}}>
                    <div style={{display: 'grid', gap: '16px'}}>
                      {(Array.isArray(selectedJobForApplicants.applications) ? selectedJobForApplicants.applications : [])
                        .filter(app => applicantFilter === 'all' || app.status === applicantFilter)
                        .map(app => (
                        <div key={app._id || app.id} style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          background: '#f8fafc'
                        }}>
                          <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start'}}>
                            <div>
                              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                                <div style={{
                                  width: '48px',
                                  height: '48px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '1.25rem',
                                  fontWeight: '600'
                                }}>
                                  {app.name ? app.name.split(' ').map(n => n[0]).join('').substring(0, 2) : '?'}
                                </div>
                                <div>
                                  <h4 style={{margin: 0, fontSize: '1.125rem', fontWeight: '600', color: '#1e293b'}}>{app.name}</h4>
                                  <p style={{margin: 0, color: '#64748b', fontSize: '0.875rem'}}>{app.email}</p>
                                </div>
                                <span style={{...styles.badge, ...(app.status === 'approved' ? styles.badgePublished : app.status === 'rejected' ? styles.badgeInactive : styles.badgePending)}}>{app.status}</span>
                              </div>
                              
                              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px'}}>
                                <div>
                                  <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Phone</label>
                                  <p style={{margin: '4px 0 0 0', color: '#374151'}}>{app.phone || '—'}</p>
                                </div>
                                <div>
                                  <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Applied</label>
                                  <p style={{margin: '4px 0 0 0', color: '#374151'}}>{app.applied_at ? new Date(app.applied_at).toLocaleDateString() : '—'}</p>
                                </div>
                                <div>
                                  <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Experience</label>
                                  <p style={{margin: '4px 0 0 0', color: '#374151'}}>{app.experience || '—'}</p>
                                </div>
                              </div>

                              {/* Always show additional information section */}
                              <div style={{marginBottom: '16px'}}>
                                <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px'}}>Additional Information</label>
                                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                                  {/* Portfolio Link */}
                                  <div style={{minWidth: '120px'}}>
                                    <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px'}}>Portfolio</label>
                                    {app.portfolio ? (
                                      <a href={app.portfolio} target="_blank" rel="noopener noreferrer" style={{
                                        ...styles.actionButton,
                                        ...styles.viewButton,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        marginRight: '0'
                                      }}>📁 View Portfolio</a>
                                    ) : (
                                      <span style={{fontSize: '0.875rem', color: '#94a3b8'}}>Not provided</span>
                                    )}
                                  </div>

                                  {/* Resume Link */}
                                  <div style={{minWidth: '120px'}}>
                                    <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px'}}>Resume</label>
                                    {app.resume ? (
                                      <a href={app.resume} target="_blank" rel="noopener noreferrer" style={{
                                        ...styles.actionButton,
                                        ...styles.viewButton,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        marginRight: '0'
                                      }}>📄 View Resume</a>
                                    ) : (
                                      <span style={{fontSize: '0.875rem', color: '#94a3b8'}}>Not provided</span>
                                    )}
                                  </div>
                                </div>

                                {/* Cover Letter Section */}
                                <div style={{marginTop: '16px'}}>
                                  <label style={{fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '8px'}}>Cover Letter</label>
                                  {app.coverLetter ? (
                                    <div style={{fontSize: '0.875rem', color: '#374151', background: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', lineHeight: '1.5'}}>
                                      {app.coverLetter.length > 300 ? app.coverLetter.substring(0, 300) + '...' : app.coverLetter}
                                    </div>
                                  ) : (
                                    <div style={{fontSize: '0.875rem', color: '#94a3b8', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0'}}>
                                      No cover letter provided
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                              {app.status !== 'approved' && (
                                <button onClick={async () => {
                                  try {
                                    const url = `admin/jobs/${selectedJobForApplicants._id}/applications/${app._id}/review`;
                                    await http.patch(url, { action: 'approve' }, getAuthConfig());
                                    const updated = (selectedJobForApplicants.applications || []).map(a => a._id === app._id ? { ...a, status: 'approved', reviewed_at: new Date().toISOString() } : a);
                                    setSelectedJobForApplicants(prev => ({ ...prev, applications: updated }));
                                    setJobs(prevJobs => prevJobs.map(jj => (jj._id === selectedJobForApplicants._id ? { ...jj, applications: updated } : jj)));
                                  } catch (err) {
                                    alert('Failed to approve: ' + (err?.response?.data?.message || err.message || 'Unknown'));
                                  }
                                }} style={{...styles.actionButton, ...styles.viewButton}}>✓ Approve</button>
                              )}
                              {app.status !== 'rejected' && (
                                <button onClick={async () => {
                                  try {
                                    const url = `admin/jobs/${selectedJobForApplicants._id}/applications/${app._id}/review`;
                                    await http.patch(url, { action: 'reject' }, getAuthConfig());
                                    const updatedR = (selectedJobForApplicants.applications || []).map(a => a._id === app._id ? { ...a, status: 'rejected', reviewed_at: new Date().toISOString() } : a);
                                    setSelectedJobForApplicants(prev => ({ ...prev, applications: updatedR }));
                                    setJobs(prevJobs => prevJobs.map(jj => (jj._id === selectedJobForApplicants._id ? { ...jj, applications: updatedR } : jj)));
                                  } catch (err) {
                                    alert('Failed to reject: ' + (err?.response?.data?.message || err.message || 'Unknown'));
                                  }
                                }} style={{...styles.actionButton, ...styles.deleteButton}}>✗ Reject</button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      {(!selectedJobForApplicants.applications || 
                        selectedJobForApplicants.applications.length === 0 || 
                        selectedJobForApplicants.applications.filter(app => applicantFilter === 'all' || app.status === applicantFilter).length === 0) && (
                        <div style={{textAlign: 'center', padding: '40px', color: '#64748b'}}>
                          {(!selectedJobForApplicants.applications || selectedJobForApplicants.applications.length === 0) 
                            ? 'No applicants yet.' 
                            : `No ${applicantFilter} applicants found.`}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'ideas':
        return (
          <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px'}}>
              <h2 style={styles.contentTitle}>💡 Ideas Management</h2>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <label style={{fontSize: '0.875rem', color: '#64748b', fontWeight: '500'}}>Filter by Type:</label>
                <select 
                  value={ideaFilter} 
                  onChange={(e) => setIdeaFilter(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.875rem',
                    background: 'white',
                    cursor: 'pointer',
                    minWidth: '120px'
                  }}
                >
                  <option value="all">All Types</option>
                  <option value="project">Project</option>
                  <option value="research">Research</option>
                </select>
              </div>
            </div>
            {ideasLoading && <div style={{marginBottom: '12px', color: '#334155'}}>Loading ideas...</div>}
            {ideasError && <div style={{marginBottom: '12px', color: '#b91c1c'}}>Error: {ideasError}</div>}
            <table style={styles.table}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={styles.tableHeaderCell}>Title</th>
                  <th style={styles.tableHeaderCell}>User</th>
                  <th style={styles.tableHeaderCell}>Type</th>
                  <th style={styles.tableHeaderCell}>Category</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Date</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ideas
                  .filter(i => ideaFilter === 'all' || i.type === ideaFilter)
                  .map(i => (
                  <tr key={i.id} style={styles.tableRow} className="table-row">
                    <td style={styles.tableCell}>
                      <div>
                        <div style={{fontWeight: '500', marginBottom: '4px'}}>{i.title}</div>
                        <div style={{fontSize: '0.8125rem', color: '#64748b'}}>
                          {i.description ? (i.description.substring(0, 80) + '...') : ''}
                        </div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>{i.userName}</td>
                    <td style={styles.tableCell}>
                      <span style={{...styles.badge, ...(i.type === 'research' ? styles.badgeResearch : styles.badgeProject)}}>{i.type}</span>
                    </td>
                    <td style={styles.tableCell}>{i.category}</td>
                    <td style={styles.tableCell}>
                      <span style={{...styles.badge, ...(i.status === 'Published' ? styles.badgePublished : styles.badgePending)}}>{i.status}</span>
                    </td>
                    <td style={styles.tableCell}>{i.date ? i.date : (i.created_at ? new Date(i.created_at).toISOString().split('T')[0] : '')}</td>
                    <td style={styles.tableCell}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <button type="button" onClick={() => viewIdea(i.id)} style={{...styles.actionButton, ...styles.viewButton}} className="action-button view-button">View</button>
                        {/* Publish toggle: single control */}
                        {(() => {
                          // Determine admin availability from stored user payload if present
                          let storedUser = null;
                          try { storedUser = JSON.parse(localStorage.getItem('user') || 'null'); } catch (e) { storedUser = null; }
                          const isAdmin = storedUser && storedUser.role === 'admin';
                          return (
                            <label style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
                              <input
                                type="checkbox"
                                checked={i.status === 'Published'}
                                aria-checked={i.status === 'Published'}
                                onChange={(e) => togglePublish(i.id, e.target.checked)}
                                disabled={!isAdmin}
                              />
                              <span style={{fontSize: '0.85rem'}}>{i.status === 'Published' ? 'Published' : 'Prelisted'}</span>
                            </label>
                          );
                        })()}
                        <button onClick={() => deleteIdea(i.id)} style={{...styles.actionButton, ...styles.deleteButton}}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!ideasLoading && ideas.filter(i => ideaFilter === 'all' || i.type === ideaFilter).length === 0 && (
                  <tr>
                    <td style={styles.tableCell} colSpan={7}>
                      {ideaFilter === 'all' ? 'No ideas found.' : `No ${ideaFilter} ideas found.`}
                    </td>
                  </tr>
                )}
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
            {/* Logout removed from sidebar to keep navbar responsible for sign-out */}
          </ul>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {renderContent()}
        </div>

        {/* Global modals for idea and user so they show regardless of active tab */}
        {/* Idea detail modal */}
        {selectedIdea && (
          <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={closeModal}>
            <div style={{width: '760px', maxWidth: '95%', background: 'white', borderRadius: '10px', padding: '24px'}} onClick={e => e.stopPropagation()}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                <h3 style={{margin: 0}}>{selectedIdea.title}</h3>
                <div>
                  <button type="button" onClick={closeModal} style={{...styles.actionButton}}>Close</button>
                </div>
              </div>
              <div style={{color: '#374151', marginBottom: '8px'}}>By: {selectedIdea.userName}</div>
              <div style={{marginBottom: '12px', color: '#64748b'}}>{selectedIdea.description}</div>
              <div style={{display: 'flex', gap: '12px'}}>
                <div style={{...styles.badge, ...(selectedIdea.status === 'Published' ? styles.badgePublished : styles.badgePending)}}>{selectedIdea.status}</div>
                <div style={{...styles.badge, ...(selectedIdea.type === 'research' ? styles.badgeResearch : styles.badgeProject)}}>{selectedIdea.type}</div>
              </div>
            </div>
          </div>
        )}

        {/* User detail / edit modal */}
        {selectedUser && (
          <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={closeUserModal}>
            <div style={{width: '640px', maxWidth: '95%', background: 'white', borderRadius: '10px', padding: '24px'}} onClick={e => e.stopPropagation()}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                <h3 style={{margin: 0}}>{userEditing ? 'Edit User' : 'User Details'}</h3>
                <div>
                  <button type="button" onClick={closeUserModal} style={{...styles.actionButton}}>Close</button>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>First name</label>
                  {userEditing ? (
                    <input value={selectedUser.first_name || ''} onChange={e => setSelectedUser(s => ({ ...s, first_name: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.first_name}</div>
                  )}
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Last name</label>
                  {userEditing ? (
                    <input value={selectedUser.last_name || ''} onChange={e => setSelectedUser(s => ({ ...s, last_name: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.last_name}</div>
                  )}
                </div>
                <div style={{gridColumn: '1 / -1'}}>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Email</label>
                  {userEditing ? (
                    <input value={selectedUser.email || ''} onChange={e => setSelectedUser(s => ({ ...s, email: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.email}</div>
                  )}
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Company</label>
                  {userEditing ? (
                    <input value={selectedUser.company || ''} onChange={e => setSelectedUser(s => ({ ...s, company: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.company || '—'}</div>
                  )}
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Role</label>
                  {userEditing ? (
                    <select value={selectedUser.role || 'user'} onChange={e => setSelectedUser(s => ({ ...s, role: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.role}</div>
                  )}
                </div>
                <div>
                  <label style={{display: 'block', fontSize: '0.85rem', color: '#64748b'}}>Verified</label>
                  {userEditing ? (
                    <input type="checkbox" checked={!!selectedUser.verified} onChange={e => setSelectedUser(s => ({ ...s, verified: e.target.checked }))} />
                  ) : (
                    <div style={{padding: '8px 0'}}>{selectedUser.verified ? 'Yes' : 'No'}</div>
                  )}
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px'}}>
                {userEditing ? (
                  <>
                    <button type="button" onClick={() => { setUserEditing(false); }} style={{...styles.actionButton}}>Cancel</button>
                    <button type="button" onClick={saveUser} disabled={userSaving} style={{...styles.actionButton, ...styles.editButton}}>{userSaving ? 'Saving...' : 'Save'}</button>
                  </>
                ) : (
                  <button type="button" onClick={() => startEditUser(selectedUser.id)} style={{...styles.actionButton, ...styles.editButton}}>Edit</button>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Add Job modal */}
        {showJobModal && (
          <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={() => setShowJobModal(false)}>
            <div style={{width: '760px', maxWidth: '95%', background: 'white', borderRadius: '10px', padding: '24px'}} onClick={e => e.stopPropagation()}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                <h3 style={{margin: 0}}>Create Job</h3>
                <div>
                  <button type="button" onClick={() => setShowJobModal(false)} style={{...styles.actionButton}}>Close</button>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Title</label>
                  <input value={jobForm.title} onChange={e => setJobForm(f => ({ ...f, title: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Location</label>
                  <input value={jobForm.location} onChange={e => setJobForm(f => ({ ...f, location: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Type</label>
                  <select value={jobForm.type} onChange={e => setJobForm(f => ({ ...f, type: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}}>
                    <option value="">Select job type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="internship">Internship</option>
                    <option value="part-time">Part-Time</option>
                  </select>
                </div>
                <div>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Salary</label>
                  <input value={jobForm.salary} onChange={e => setJobForm(f => ({ ...f, salary: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} />
                </div>
                <div style={{gridColumn: '1 / -1'}}>
                  <label style={{fontSize: '0.85rem', color: '#64748b'}}>Description</label>
                  <textarea value={jobForm.description} onChange={e => setJobForm(f => ({ ...f, description: e.target.value }))} style={{width: '100%', padding: '8px', marginTop: '6px'}} rows={6} />
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px'}}>
                <button type="button" onClick={() => setShowJobModal(false)} style={{...styles.actionButton}}>Cancel</button>
                <button type="button" onClick={createJob} style={{...styles.actionButton, ...styles.editButton}}>Create Job</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;