<template>
  <div class="login-root">
    <div class="login-box">
      <h2>Register</h2>

      <div class="input-box">
        <input type="text" class="input-email" v-model="user.email" required />
        <label>Email</label>
      </div>

      <div class="input-box">
        <input type="password" class="input-password" v-model="user.password" required />
        <label>Password</label>
      </div>

      <div class="input-box">
        <input
          type="password"
          class="input-confirmation"
          v-model="user.password_confirmation"
          required
        />
        <label>Confirmation</label>
      </div>

      <input type="submit" class="submit" value="Login" @click="submitForm" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$axios.post('signup', this.user).then(() => {
        this.$router.push({ name: 'Dashboard' });
      });
    },
  },
};
</script>

<style lang="scss">
.login-root {
  display: flex;
  align-items: baseline;
  height: 100%;
  width: 100%;
}

.login-box {
  padding: 70px 0;
  margin: auto;
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);
  border-radius: 10px;

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .input-box {
    position: relative;

    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      letter-spacing: 1px;
      outline: none;
      background: transparent;
      border-bottom: 1px solid #fff;
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }

    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      left: 0;
      color: #03a9f4;
      font-size: 13px;
    }
  }

  .submit {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
</style>
