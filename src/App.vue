<template>
  <div id="app">
    <navbar></navbar>
    <b-container fluid>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </b-container>
  </div>
</template>

<script>
import navbar from "../src/components/nav/navBar";

export default {
  components: {
    navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h5 {
  text-align: left;
}
ul {
  li {
    text-align: left;
  }
}
</style>
