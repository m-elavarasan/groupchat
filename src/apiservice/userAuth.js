import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
});

export default {
  async handleLogin({ success, fail, data }) {
    await API.post(`/loginUser`, data)
      .then((res) => {
        console.log("Inside userAuth");
        console.log(res.status == 200);
        console.log(res);
        if (res.status == 200) {
          success(res);
          console.log("success inside userauth");
        }
      })
      .catch((err) => {
        console.log("fail inside userauth");
        console.log(err);
        fail(err.response);
      });
  },
  async handleUpdade({ success, fail, data }) {
    await API.put(
      `/editUser?userid=${data.userid}&username=${data.username}&about=${data.about}`
    )
      .then((res) => {
        console.log("Inside userAuth handleUpdade");
        console.log(res.status == 200);
        console.log(res);
        if (res.status == 200) {
          success(res);
          console.log("success inside userauth handleUpdade");
        }
      })
      .catch((err) => {
        console.log("fail inside userauth handleUpdade");
        console.log(err);
        fail(err.response);
      });
  },
  // async handleLogin(mobileNum, password) {
  //   const response = await API.post('/loginUser', {
  //     mobileNum,
  //     password
  //   })
  //   return response.data
  // },
  // async handleUpdate(userid,username,about)
  // {
  //   const response=await API.put(`/editUser?userid=${userid}&username=${username}&about=${about}`)
  //   return response.data
  // },

  async handleLogout() {
    try {
      const response = await API.post("/logoutUser");
    } catch (error) {
      alert(error.response.data);
    }
    localStorage.removeItem("userData");
    this.loggedIn = false;
    window.location.reload();
    console.log(localStorage.getItem("userData"));
  },
};
