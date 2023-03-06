import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8082",
});

export default {
  fetchContact({ success, fail }) {
    API.get("/displayContacts")
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        console.error(error);
        fail(error);
      });
  },
  createContact(phone, { success, fail }) {
    API.post(`/addUser?mobilenum=${phone}`)
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        fail(error);
      });
  },
  editContact(userId, phone, { success, fail }) {
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
