<template>
  <div class="container">
    <!-- <h1 class="my-4">MONSTERS MATCH</h1> -->
    <!-- <button type="button" class="btn btn-info" v-on:click="loadTiles">
      Start
    </button> -->
    <div class="row d-flex justify-content-center">
      <!-- style="background-image: url('https://media.giphy.com/media/26gQc8wnaYfMtqbxm/giphy.gif'); background-repeat: no-repeat; background-size: cover;" -->
      <table class="table table-borderless mx-auto w-auto mt-3">
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
                width="57%"
                @click="selectTile(newTiles[cindex * 8 + rindex],cindex,rindex)"
              />
              <!-- put behind width -->
              <!-- @click="selectTile(rindex,cindex)" -->

              <!-- numbering for checking -->
              <!-- <p>{{newTiles[cindex * 8 + rindex].name}}</p> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stack from "../data-structures/Stack";
export default {
  data: function () {
    return {
      tiles: new Stack(),
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
      newTiles: [],
    };
  },
  created: async function () {
    let response = await axios.get(
      "https://3000-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/tile"
    );
    this.tiles = response.data;
    this.newTiles = [...this.tiles, ...this.tiles];
    let m = this.newTiles.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.newTiles[m];
      this.newTiles[m] = this.newTiles[i];
      this.newTiles[i] = t;
    }
  },
  methods: {
    selectTile: function (t,c,r) {
        // t.imageUrl="" on success, remove tiles from board
        // check that same tile is not selected via rid & cid
    //   let compareTiles = new Stack();
    //   let selected = this.newTiles[t].name;
    //   compareTiles.push(selected);
      console.log(t,c,r)
    } 
  }
}
</script>

<style scoped>
/* .container {
    background-image: url("https://media.giphy.com/media/26gQc8wnaYfMtqbxm/giphy.gif") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
} */

div {
  text-align: center;
}
</style>