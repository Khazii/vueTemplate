<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">
        Vue Template
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/yourview">Example View</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style >
.router-link-exact-active {
  color: #42b983 !important;
}
</style>