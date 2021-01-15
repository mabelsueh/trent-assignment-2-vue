<template>
  <div>
    <div class="container">
      <h1 class="mt-4">Leaderboard (Top 20)</h1>
      <b-table-simple hover class="">
        <b-thead class="header">
          <b-tr>
            <b-th>Rank</b-th>
            <b-th>Username</b-th>
            <b-th>Score</b-th>
            <b-th>Date Played</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(s,i) in scoreSort.slice(0, 20)" v-bind:key="s._id">
            <b-td>{{ i+1 }}</b-td>
            <b-td>{{ s.username }}</b-td>
            <b-td>{{ s.score }}</b-td>
            <b-td>{{ s.datePlayed }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      scoreboard: [],
    };
  },
  created: async function () {
    let response = await axios.get(
      "https://mseh-trent-assignment-2.herokuapp.com/scoreboard"
    );
    this.scoreboard = response.data;
  },
  computed: {
    scoreSort: function () {
      let scoreSort = this.scoreboard.slice(0);
      scoreSort.sort(function (x, y) {
        return y.score - x.score;
      });
      return scoreSort;
    },
  },
};
</script>

<style scoped>
.container {
    text-align: center;
}
.table {
    color: white;
}
h1 {
    color: white;
}
</style>