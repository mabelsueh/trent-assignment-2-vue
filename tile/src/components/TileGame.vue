<template>
  <div class="container">
    <!-- <button type="button" class="btn btn-info" v-on:click="loadTiles">
      Start
    </button> -->
    <div class="row d-flex justify-content-center">
      <table class="table table-borderless mx-auto w-auto mt-2">
        <tbody>
          <tr v-for="(row, rindex) in board" :key="rindex">
            <td v-for="(col, cindex) in row" :key="cindex">
              <!-- the && sugar syntax is needed because when page loads at created,
              axios is still loading and causes a delay
              as such, to vue, tile[] is undefined -->
              <img
                :src="
                  newTiles[cindex * 6 + rindex] &&
                  newTiles[cindex * 6 + rindex].imageUrl
                "
                width="60%"
                @click="
                  selectTile(newTiles[cindex * 6 + rindex], cindex, rindex)
                "
              />

              <!-- numbering for checking -->
              <!-- <p>{{newTiles[cindex * 6 + rindex].name}}</p> -->
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
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ],
      newTiles: [],
    };
  },
  created: async function () {
    let response = await axios.get(
      "https://mseh-trent-assignment-2.herokuapp.com/tile"
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
    //   @start, create new Stack array ( & clear stack??)
    selectTile: function (t, c, r) {
        // t = newTiles[cindex * 6 + rindex], c = cid, r = rid
      let compareTiles = new Stack();
      console.log(compareTiles);
      // select card 1, assign to var selectedCard1 & push to stack
      let selectedCard1 = this.newTiles[t].name;
      console.log(this.newTiles[t])
      compareTiles.push(selectedCard1);
      console.log(compareTiles);
      
      // select card 2, assign to var selectedCard2 & push to stack
      // prevent selecting same card using cid & rid (cause they are duplicates)

      // check for match via peek????????????????????????

      // if match, pop both from stack & change t.imageUrl to ""/null

      // if don't match, clear stack

      // t.imageUrl="" on success, remove tiles from board
      // check that same tile is not selected via rid & cid 
      console.log(t, c, r);
    },
  },
};
</script>

<style scoped>
/* .container {
    background-image: url("https://media.giphy.com/media/f4IjBQupqojhqQzKk2/giphy.gif") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
} */

div {
  text-align: center;
}

@media only screen and (max-width: 736px) {
  img.responsive {
    width: 38%;
  }
}
</style>