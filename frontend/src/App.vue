<template>
  <div id="app">
    <input type="checkbox" id="menu-checkbox" />
    <label for="menu-checkbox">
      <i class="fas fa-bars" id="open-menu"></i>
      <i class="fas fa-times" id="close-menu"></i>
    </label>
    <nav class="sidebar">
      <header>AdonisJs Blog</header>
      <ul>
        <li>
          <a href="#"><i class="fas fa-qrcode"></i>Dashboard</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-link"></i>Shortcuts</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-stream"></i>Overview</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-calendar-week"></i>Events</a>
        </li>
        <li>
          <a href="#"><i class="far fa-question-circle"></i>About</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-sliders-h"></i>Services</a>
        </li>
        <li>
          <a href="#"><i class="far fa-envelope"></i>Contact</a>
        </li>
      </ul>
    </nav>
    <section class="router-content">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
}

.sidebar {
  position: fixed;
  left: -260px;
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

    a {
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

#menu-checkbox {
  display: none;
}

label[for='menu-checkbox'] {
  #open-menu,
  #close-menu {
    position: absolute;
    background: #042331;
    border-radius: 3px;
    cursor: pointer;
  }

  #open-menu {
    left: 40px;
    top: 25px;
    font-size: 35px;
    color: white;
    padding: 6px 12px;
    transition: all 0.5s;
  }

  #close-menu {
    z-index: 1111;
    left: -210px;
    top: 17px;
    font-size: 30px;
    color: #0a5275;
    padding: 4px 9px;
    transition: all 0.5s ease;
  }
}

#menu-checkbox:checked ~ .sidebar {
  left: 0;
}

#menu-checkbox:checked ~ label[for='menu-checkbox'] {
  #open-menu {
    left: 250px;
    opacity: 0;
    pointer-events: none;
  }

  #close-menu {
    left: 210px;
  }
}

#menu-checkbox:checked ~ .router-content {
  margin-left: 260px;
}

.router-content {
  background: url('./assets/background.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 0.5s;
}
</style>
