<template>
  <div>
    <div class="container">
    <div>
    <input type="text" :value="userData.username"/>
    <input type="number" :value="userData.score"/>
    <button class="btn btn-warning btn-sm" @click="updateRecord">Update</button>
    </div>
      <h1 class="mt-4">Leaderboard (Top 20)</h1>
      <b-table-simple class="">
        <b-thead class="header">
          <b-tr>
            <b-th>Rank</b-th>
            <b-th>Username</b-th>
            <b-th>Score</b-th>
            <b-th>Edit</b-th>
            <b-th>Delete</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(s, i) in scoreSort.slice(0, 20)" v-bind:key="s._id">
            <b-td>{{ i + 1 }}</b-td>
            <b-td>{{ s.username }}</b-td>
            <b-td>{{ s.score }}</b-td>
            <b-td
              ><button
                class="btn btn-warning btn-sm"
                type="button"
                @click="editRecord(s._id)"
              >
                Edit
              </button>
            </b-td>
            <b-td
              ><button
                class="btn btn-danger btn-sm"
                type="button"
                @click="deleteRecord(s._id, i)"
              >
                Delete
              </button>
            </b-td>
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
      playerScoreboard: {
          name: "",
          score: ""
      },
      userData: {}
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
  methods: {
    deleteRecord: async function (id, i) {
      await axios.delete(
        "https://mseh-trent-assignment-2.herokuapp.com/scoreboard/" + id
      );
    //   console.log(id);
    //   console.log(i);
      this.scoreboard.splice(i, 1);
      alert("Item deleted");
    },
    editRecord: async function (id) {
      let response = await axios.get(
        "https://mseh-trent-assignment-2.herokuapp.com/scoreboard/" + id 
      ); this.userData = response.data
      
    },
    // updateRecord: async function () {
    //     // await axios.patch(https://8080-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/scoreboard/ + this.userData._id, this.userData
            // )
            // alert("Updated!")
        
    //     console.log(this.userData._id)
    // }
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