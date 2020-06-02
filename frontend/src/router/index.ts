import Vue from 'vue';
import VueRouter, { RouteConfig, NavigationGuard } from 'vue-router';

import store from '../store';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const authRouteGuard: NavigationGuard = async (_to, _from, next) => {
  if (store.getters.isLoggedIn) {
    return next();
  }

  next({ name: 'Login' });
};

const guestRouteGuard: NavigationGuard = async (_to, _from, next) => {
  if (store.getters.isLoggedIn) {
    return next({ name: 'Dashboard' });
  }

  next();
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: authRouteGuard,
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: guestRouteGuard,
    component: Login,
  },
  {
    path: '/sign-in',
    name: 'Register',
    beforeEnter: guestRouteGuard,
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.FRONTEND_BASE_URL,
  routes,
});

export default router;
