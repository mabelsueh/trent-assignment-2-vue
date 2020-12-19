<template>
  <div>
    <h4><router-link to="/scoreboard">Leaderboard</router-link></h4>
    <router-view></router-view>
    <Scoreboard />
  </div>
</template>

<script>
import Scoreboard from "./components/Scoreboard.vue";
export default {
  name: "App",
  components: { Scoreboard },
};
</script>

<style scoped>
</style>