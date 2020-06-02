import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import HttpClient from '@/middleware/HttpClient';

Vue.config.productionTip = false;
Vue.prototype.$axios = HttpClient;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('loadUser');
  },
  render: h => h(App),
}).$mount('#app');
