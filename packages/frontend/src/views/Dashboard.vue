<template>
  <div class="dashboard">
    <div class="dashboard-panel">
      <h2>Welcome, {{ user.email }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: mapState(['user']),
})
</script>

<style lang="scss">
.dashboard {
  display: flex;
  align-items: baseline;
  height: 100%;
  width: 100%;

  .dashboard-panel {
    padding: 70px 0;
    margin: auto;
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }

  h2 {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
  }
}
</style>
