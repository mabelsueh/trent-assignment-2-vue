<template>
  <div>
    <h1>Leaderboard</h1>
    <button v-on:click="loadScoreboard">View</button>
    <div v-for="s in scoreboard" v-bind:key="s._id">
        <!-- use bootstrap-vue or something -->
        <h5>Username: {{ s.username }}</h5>
        <h5>Time Taken: {{ s.scoreInSeconds }}</h5>
        <h5>Date Played: {{ s.datePlayed }}</h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      'scoreboard': [],
    };
  },

  methods: {
    loadScoreboard: async function () {
      let response = await axios.get(
        "https://3000-e476020e-f0fb-4276-a53d-413c0ee348dd.ws-us03.gitpod.io/scoreboard"
      );
      this.scoreboard = response.data;
    },
  },
};
</script>

<style scoped>
</style>