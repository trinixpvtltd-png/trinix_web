import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const AdminIdeaViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading } = useAuth();
  const [idea, setIdea] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const API_ORIGIN = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');
        const url = `${API_ORIGIN}/api/admin/ideas/${encodeURIComponent(id)}`;
        const token = localStorage.getItem('token');
        const { data } = await axios.get(url, { headers: { Authorization: token ? `Bearer ${token}` : undefined } });
        if (!mounted) return;
        setIdea(data?.idea || data);
      } catch (err) {
        setError(err?.response?.data?.message || err.message || 'Failed to load idea');
      }
    }
    if (!loading) load();
    return () => { mounted = false; };
  }, [id, loading]);

  if (error) return (<div style={{padding: 24}}>Error: {error}</div>);
  if (!idea) return (<div style={{padding: 24}}>Loading...</div>);

  return (
    <div style={{padding: 24}}>
      <button onClick={() => navigate(-1)} style={{marginBottom: 12}}>Back</button>
      <h2>{idea.title}</h2>
      <div style={{color: '#64748b', marginBottom: 12}}>{idea.description}</div>
      <div style={{display: 'flex', gap: 12}}>
        <div style={{padding: 6, borderRadius: 6, background: '#f1f5f9'}}>{idea.status}</div>
        <div style={{padding: 6, borderRadius: 6, background: '#f8fafc'}}>{idea.type}</div>
      </div>
    </div>
  );
};

export default AdminIdeaViewPage;
