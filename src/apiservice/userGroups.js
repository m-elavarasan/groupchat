import axios from 'axios';

export default {
  async fetchGroups(mobile) {
    try {
      const response = await axios.get(`http://localhost:8085/showGroup?mobilenum=${mobile}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};
