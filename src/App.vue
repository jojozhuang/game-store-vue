<template>
  <div id="app">
    <div class="container">
      <h2>Vue Tutorial - Product Management</h2>
      <b-button variant="info" to="/">Home</b-button>
      <b-button variant="info" to="/productlist"> List </b-button>
      <b-button variant="info" to="/productadd"> Create </b-button>
    </div>
    <hr />
    <router-view />
    <hr />
    <footer class="container-fluid text-center">
      <p>&copy; 2021 jojozhuang.github.io, All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

.container {
  margin-top: 20px;
}
.btn {
  margin-right: 4px;
}

/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
