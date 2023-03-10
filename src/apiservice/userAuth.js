import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
});
export default {
  handleLogin({ success, fail, data }) {
    API.post(`/loginUser`, data)
      .then((res) => {
        console.log(res.status == 200);
        console.log(res);
        if (res.status == 200) {
          success(res);
        }
      })
      .catch((err) => {
        console.log(err);
        fail(err.response);
      });
  },
  handleUpdade({ success, fail, data }) {
    API.put(
      `/editUser?userid=${data.userid}&username=${data.username}&about=${data.about}`
    )
      .then((res) => {
        console.log(res.status == 200);
        console.log(res);
        if (res.status == 200) {
          success(res);
        }
      })
      .catch((err) => {
        console.log(err);
        fail(err.response);
      });
  },
  handleLogout(success, fail) {
    API.post("/logoutUser")
      .then((res) => {
        console.log(res.status == 200);
        console.log(res);
        if (res.status == 200) {
          success.success(res);
          localStorage.removeItem("userData");
          this.loggedIn = false;
          window.location.reload();
          console.log(localStorage.getItem("userData"));
        }
      })
      .catch((err) => {
        console.log(err);
        success.fail(err.response);
      });
  },
};
