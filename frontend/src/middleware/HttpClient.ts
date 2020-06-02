import axios, { AxiosStatic } from 'axios';

// axios.defaults.baseURL = process.env.BACKEND_BASE_URL
// axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
// axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

const HttpClient = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  timeout: 5000,
  xsrfCookieName: 'xsrf-token',
  xsrfHeaderName: 'x-xsrf-token',
});

HttpClient.interceptors.response.use(
  response => response.data,
  error => {
    console.log('Erro http');
    console.log(error.response);
    console.log(error.toJSON());

    console.log(Object.keys(error));

    throw error;
  },
);

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

export default HttpClient;
