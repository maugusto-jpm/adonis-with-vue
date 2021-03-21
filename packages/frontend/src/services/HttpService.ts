import store from '@/store'
import axios from 'axios'

const HttpClient = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  timeout: 5000,
  xsrfCookieName: 'xsrf-token',
  xsrfHeaderName: 'x-xsrf-token',
})

HttpClient.interceptors.response.use(
  response => response.data,
  error => {
    console.error('Erro http no axios')
    console.log(error.toJSON())

    return store.dispatch('loadUser')
  },
)

export default HttpClient
