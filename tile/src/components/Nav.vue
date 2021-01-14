<template>
  <div>
      <div id="logo" align="center" class="bg-warning">
       <b-nav-item to="/" style="list-style-type: none">
      <img src="/images/nav-logo.png" width="20%" alt="navlogo"/>
      </b-nav-item>
      </div>
      
<div id="navlinks">
  <b-nav align="center bg-warning">
    <b-nav-item class="mx-4" to="/scoreboard">Leaderboard</b-nav-item>
    <b-nav-item class="mx-4" to="/play">Play</b-nav-item>
    <b-nav-item class="mx-4" to="/login">Login</b-nav-item>
    <b-nav-item class="mx-4" to="/register">Register</b-nav-item>
  </b-nav>
</div>
      <!-- <b-navbar-brand to="/">
      <img src="/images/nav-logo.png" width="60%" alt="navlogo"/>
      </b-navbar-brand> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav li a {
    color: black !important;
}
</style>