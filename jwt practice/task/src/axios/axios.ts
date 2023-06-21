import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4422/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    // Add any custom headers you want to include
    // For example:
  }
});

// Add an interceptor to update the Authorization header
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken") }`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
