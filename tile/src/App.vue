<template>
  <div class="gif">
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

<style>
.gif{
    min-height: 100vh;
    background-image: url("https://media.giphy.com/media/f4IjBQupqojhqQzKk2/giphy.gif") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
}

</style>