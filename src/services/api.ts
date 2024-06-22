import axios from 'axios'

export default axios.create({
  baseURL: 'https://cdn-dev.preoday.com',
  timeout: 50000
})
