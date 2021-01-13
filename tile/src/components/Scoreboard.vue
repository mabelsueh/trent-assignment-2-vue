<template>
  <div>
    <h1>Leaderboard</h1>
    <b-table-simple class="table">
        <b-thead class="header">

            <b-tr>
                <b-th>Username</b-th>
                <b-th>Score</b-th>
                <b-th>Date Played</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="s in scoreboard.slice(0,10)" v-bind:key="s._id">
        <b-td>{{ s.username }}</b-td>
        <b-td>{{ s.score }}</b-td>
        <b-td>{{ s.datePlayed }}</b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>


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
  created: async function () {
      let response = await axios.get(
        "https://3000-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/scoreboard"
      );
      this.scoreboard = response.data;
    },
};
</script>

<style scoped>
#Scoreboard{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>