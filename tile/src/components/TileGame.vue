<template>
  <div class>
    <!-- Play -->
    <h1>MONSTERS MATCH</h1>
    <button type="button" class="btn btn-info" v-on:click="loadTiles">
      Start
    </button>
    <table class="table">
      <tbody>
        <tr v-for="(row, rindex) in board" :key="rindex">
          <td v-for="(col, cindex) in row" :key="cindex">
              <!-- the && sugar syntax is needed because when page loads at created,
              axios is still loading and causes a delay
              as such, to vue, tile[] is undefined -->
            <img :src="tiles[cindex * 8 + rindex] && tiles[cindex * 8 + rindex].imageUrl" width="40%" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <table class="table">
      <thead class="table-header">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tiles" v-bind:key="t._id">
          <img v-bind:src="t.imageUrl" alt="img" height="80px" />
          <td>
            {{ t.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  //   created: async function () {
  //     let response = await axios.get(
  //       "https://3000-e476020e-f0fb-4276-a53d-413c0ee348dd.ws-us03.gitpod.io/tile"
  //     );
  //     console.log(response.data);
  //     this.tiles = response.data;
  //   },
  data: function () {
    return {
      tiles: [],
      board: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
      ],
    };
  },
  methods: {
    loadTiles: async function () {
      let response = await axios.get(
        "https://3000-e476020e-f0fb-4276-a53d-413c0ee348dd.ws-us03.gitpod.io/tile"
      );
      this.tiles = response.data;
    },
    shuffle: function () {
    let defaultTiles = [];
    
    }
  },
};
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
  margin: auto;
}
</style>