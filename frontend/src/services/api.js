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
      headers: {
        Accept: 'application/json',
        ...this.getAuthHeaders()
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      const text = await response.text();

      // Try to parse JSON, otherwise expose raw text (e.g., HTML error page)
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        data = { raw: text };
      }

      if (!response.ok) {
        const message =
          (data && (data.message || data.error)) ||
          response.statusText ||
          'Request failed';
        const err = new Error(message);
        err.status = response.status;
        err.data = data;
        throw err;
      }

      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async register(userData) {
    return this.request('/users/signup', {
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
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  }

  async logout() {
    return this.request('/users/logout', { method: 'POST' });
  }

  // User methods
  async getCurrentUser() {
    // Prefer consolidated dashboard endpoint for user profile
    return this.request('/users/dashboard');
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
    // Prefer users dashboard summary
    return this.request('/users/dashboard');
  }

  async getDashboardUser() {
    return this.request('/users/dashboard');
  }

  async getUserIdeas() {
    return this.request('/users/ideas');
  }

  async submitIdea(ideaData) {
    return this.request('/users/ideas', {
      method: 'POST',
      body: JSON.stringify(ideaData)
    });
  }

  // Users scoped ideas
  async getMyIdeas() {
    return this.request('/users/ideas/mine');
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
