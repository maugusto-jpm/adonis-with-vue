<template>
  <div class="loading-container">
    <div class="loader-box">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.loading-container {
  display: flex;
  align-items: baseline;
  height: 100vh;
  width: 100%;
  background: url('../assets/background.jpg') no-repeat;
  background-position: center;
  background-size: cover;

  .loader-box {
    padding: 70px 0;
    margin: auto;
    padding: 40px;
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);
    border-radius: 10px;

    .loader {
      margin: auto;
      border: 16px solid #5f5f5f;
      border-radius: 50%;
      border-top: 16px solid #03a9f4;
      border-bottom: 16px solid #03a9f4;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
