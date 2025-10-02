// API service for communicating with the backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        confirm_password: userData.confirmPassword,
        phone: userData.phone || '',
        company: userData.company || '',
        role: 'user'
      })
    });
  }

  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  }

  // User methods
  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Project methods
  async getProjects() {
    return this.request('/projects');
  }

  async createProject(projectData) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData)
    });
  }

  async updateProject(id, projectData) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    });
  }

  async deleteProject(id) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE'
    });
  }

  // Research methods
  async getResearches() {
    return this.request('/researches');
  }

  async createResearch(researchData) {
    return this.request('/researches', {
      method: 'POST',
      body: JSON.stringify(researchData)
    });
  }

  async updateResearch(id, researchData) {
    return this.request(`/researches/${id}`, {
      method: 'PUT',
      body: JSON.stringify(researchData)
    });
  }

  async deleteResearch(id) {
    return this.request(`/researches/${id}`, {
      method: 'DELETE'
    });
  }

  // Job methods
  async getJobs() {
    return this.request('/jobs');
  }

  async createJob(jobData) {
    return this.request('/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData)
    });
  }

  async updateJob(id, jobData) {
    return this.request(`/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData)
    });
  }

  async deleteJob(id) {
    return this.request(`/jobs/${id}`, {
      method: 'DELETE'
    });
  }

  // Dashboard methods
  async getDashboardStats() {
    return this.request('/dashboard/stats');
  }

  async getUserIdeas() {
    return this.request('/dashboard/ideas');
  }

  async submitIdea(ideaData) {
    return this.request('/dashboard/ideas', {
      method: 'POST',
      body: JSON.stringify(ideaData)
    });
  }

  // Chat methods
  async sendChatMessage(message, sessionId) {
    return this.request('/chat', {
      method: 'POST',
      body: JSON.stringify({
        question: message,
        sessionId: sessionId || `session-${Date.now()}`
      })
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
