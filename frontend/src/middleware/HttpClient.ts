import axios, { AxiosStatic } from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  timeout: 5000,
  xsrfCookieName: 'xsrf-token',
  xsrfHeaderName: 'x-xsrf-token',
});

HttpClient.interceptors.response.use(
  response => response.data,
  error => {
    console.log('Erro http no axios');
    console.log(error.response);
    console.log(error.toJSON());

    throw error;
  },
);

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

export default HttpClient;
