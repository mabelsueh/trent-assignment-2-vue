<template>
  <div >
    <!-- <Alerts message="I WILL BE MOVED TO LOGIN.VUE!"/> -->
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: "App",
  components: {Nav},
};
</script>

<style scoped>
div {
    background-image: url("https://media.giphy.com/media/f4IjBQupqojhqQzKk2/giphy.gif") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
}

</style>