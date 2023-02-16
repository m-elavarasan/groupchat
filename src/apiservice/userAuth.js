import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8081'
})

export default {
  async handleLogin(mobileNum, password) {
    const response = await API.post('/loginUser', {
      mobileNum,
      password
    })

    return response.data
  },
  async handleLogout() {
    try {
      const response = await API.post('/logoutUser')
    } catch (error) {
      alert(error.response.data);
    }
    localStorage.removeItem("userData");
    this.loggedIn = false;
    window.location.reload();
    console.log(localStorage.getItem("userData"));  
  },
  
}
