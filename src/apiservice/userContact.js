import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8082",
});
export default{
  async fetchContact() {
    try {
      const response = await API.get('/displayContacts');
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error);
      return error;
    }
  },
}