<template>
  <div class="container">
    <h1>MONSTERS MATCH</h1>
    <!-- <button type="button" class="btn btn-info" v-on:click="loadTiles">
      Start
    </button> -->
    <table class="table table-borderless">
      <tbody>
        <tr v-for="(row, rindex) in board" :key="rindex">
          <td v-for="(col, cindex) in row" :key="cindex">
            <!-- the && sugar syntax is needed because when page loads at created,
              axios is still loading and causes a delay
              as such, to vue, tile[] is undefined -->
            <img
              :src="
                newTiles[cindex * 8 + rindex] &&
                newTiles[cindex * 8 + rindex].imageUrl
                "
                width="40%"
              
            />
            <p>{{newTiles[cindex * 8 + rindex].name}}</p>
            <!-- <img
              :src="
                board.imageUrl
              "
            /> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/tile"
    );
    this.tiles = response.data;
    this.newTiles = [...this.tiles,...this.tiles];
    console.log(this.newTiles)
    let m = this.newTiles.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.newTiles[m];
      this.newTiles[m] = this.newTiles[i];
      this.newTiles[i] = t;
    }
    // for (let tile of newTiles) {
    //   this.board.push(tile);
    //   console.log(tile);
    // }
  },
  data: function () {
    return {
        tiles: [],
        board: [
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
        ],
        newTiles: []
    //   board: [],
    };
  },
  //   methods: {
  //     loadTiles: async function () {
  //       let response = await axios.get(
  //         "https://3000-e476020e-f0fb-4276-a53d-413c0ee348dd.ws-us03.gitpod.io/tile"
  //       );
  //       this.tiles = response.data;
  //     },
  // //     shuffle: function () {
  // //     let defaultTiles = ...[this.tiles];

  // //     }
  // //   },
  // }
};
</script>

<style scoped>
/* .board {
  display: flex;
  justify-content: center;
  margin: auto;
} */

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-align: center;
}

table {
  margin: auto;
}
</style>