<template>
  <div>
    <div id="logo" align="center">
      <b-nav-item to="/" style="list-style-type: none">
        <img src="/images/nav-logo.png" width="15%" alt="navlogo" />
      </b-nav-item>
    </div>

    <div id="navlinks">
      <b-nav align="center">
        <b-nav-item class="mx-4" to="/scoreboard">Leaderboard</b-nav-item>
        <b-nav-item class="mx-4" to="/play">Play</b-nav-item>
        <b-nav-item class="mx-4" to="/login">Login</b-nav-item>
        <b-nav-item class="mx-4" to="/register">Register</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Creepster&display=swap");

#navlinks {
  background-color: black;
}

a {
  color: #edcd33 !important;
  font-family: "Creepster", cursive;
  letter-spacing: 0.2em;
}

a:hover {
  color: orange !important;
  text-decoration-line: underline;
}
</style>