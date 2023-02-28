import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8082",
});

export default {
  async fetchContact({ success, fail }) {
    API.get('/displayContacts')
      .then((response) => {
        console.log(response.data)
        success(response.data);
      })
      .catch((error) => {
        console.error(error);
        fail(error);
      });
  },
  async createContact({ success, fail, phone }) {
    API.post(`/addUser?mobilenum=${phone}`)
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        console.error(error);
        fail(error);
      });
  },
  async editContact({ success, fail, userId, phone }) {
    API.put(`editContact?id=${userId}&mobilenum=${phone}`)
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        console.error(error);
        fail(error);
      });
  },
};
