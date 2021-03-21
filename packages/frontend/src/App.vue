<template>
  <div id="app">
    <nav class="sidebar">
      <header>AdonisJs with Vue.js</header>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li v-if="user">
          <router-link :to="{ name: 'Dashboard' }">
            Dashboard
          </router-link>
        </li>
        <li v-if="!user">
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li>
        <li v-if="user">
          <button @click="logout">Logout</button>
        </li>
        <li v-if="!user">
          <router-link :to="{ name: 'Register' }">
            Sign-in
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="router-content">
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import HttpClient from './services/HttpService'

export default Vue.extend({
  computed: mapState(['user']),
  methods: {
    logout: function async (): void {
      HttpClient.get('/api/logout')
        .then(() => this.$router.push({ name: 'Home' }).catch(() => {}))
        .then(() => this.$store.dispatch('logout'))
    },
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
}

.sidebar {
  position: fixed;
  left: 0px;
  width: 260px;
  height: 100%;
  background: #042331;
  transition: all 0.5s ease;

  header {
    font-size: 22px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #063146;
    user-select: none;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }

    a, button {
      display: block;
      height: 100%;
      width: 100%;
      line-height: 65px;
      font-size: 20px;
      color: white;
      padding-left: 40px;
      box-sizing: border-box;
      border-bottom: 1px solid black;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      transition: 0.4s;

      i {
        margin-right: 16px;
      }
    }

    li:hover a {
      padding-left: 50px;
    }
  }
}

.router-content {
  background: url('./assets/background.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 0.5s;
  margin-left: 260px;
}
</style>
