<template>
  <div>
    <div id="logo" align="center" class="mb-0">
      <b-nav-item to="/" style="list-style-type: none">
        <img src="images/nav-logo.png" width="15%" alt="navlogo" />
      </b-nav-item>
    </div>

    <div id="navlinks" class="mt-0">
      <b-nav align="center">
        <b-nav-item class="mx-4" to="/scoreboard">Leaderboard</b-nav-item>
        <!-- <b-nav-item class="mx-4" to="/play">Start Playing</b-nav-item> -->
        <!-- <b-nav-item class="mx-4" to="/login">Login</b-nav-item> -->
        <!-- <b-nav-item class="mx-4" to="/register">Register</b-nav-item> -->
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
  letter-spacing: 0.3em;
}

a:hover {
  color: orange !important;
  text-decoration-line: underline;
}

@media only screen and ( max-width: 736px ) {
a.responsive { font-size: 0.7em; }
}
</style>