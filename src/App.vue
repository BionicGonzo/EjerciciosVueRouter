<template>
  <div id="app">
    <nav>
      <!-- Ruta ESTÁTICA -->
      <router-link to="/">Inicio</router-link> •
      <!-- Ruta ESTÁTICA -->
      <router-link to="/servicios">Servicios</router-link> •
      <!-- Ruta DINÁMICA -->
      <router-link to="/blog/1">Blog</router-link> •
      <!-- Ruta NOMBRADA -->
      <router-link :to="{name: 'contacto'}">Contacto</router-link>
    </nav>
    <img src="./assets/logo.png" alt="Vue logo">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
