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
  }
}
