import Vue from 'vue';
import { AxiosStatic } from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import httpClient from '@/middleware/httpClient';

Vue.config.productionTip = false;
Vue.prototype.$axios = httpClient;

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: AxiosStatic;
//   }
// }

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
