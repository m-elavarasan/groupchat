import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:8085'
})
export default {
  async fetchGroups(mobile) {
    try {
      const response = await API.get(`/showGroup?mobilenum=${mobile}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};
