<template>
  <div>
    <Alerts message="I WILL BE MOVED TO LOGIN.VUE!"/>
    <Nav/>
    <h3><router-link to="/game">Game</router-link></h3>
    <h4><router-link to="/play">Play</router-link></h4>
    <h4><router-link to="/scoreboard">Leaderboard</router-link></h4>
    <h4><router-link to="/login">Login</router-link></h4>
    <h4><router-link to="/register">Register</router-link></h4>
    <router-view></router-view>
  </div>
</template>

<script>
import Alerts from './components/Alerts.vue'
import Nav from './components/Nav.vue'

export default {
  name: "App",
  components: {Alerts, Nav },
};
</script>

<style scoped>
</style>