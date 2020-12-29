<template>
  <div>
    <Alerts message="I WILL BE MOVED TO LOGIN.VUE!"/>
    <Nav/>
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