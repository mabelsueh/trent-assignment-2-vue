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
      compareTiles: new Stack(),
      checkPosition: [],
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
    //   @start: clear stack??????????????????????????????????????
    selectTile: function (t, c, r) {
      console.log("starting length is: " + this.compareTiles.getLength());
      console.log("current selected tile is: " + t.name);
      console.log("t/c/r are: ");
      console.log(t);
      console.log(c);
      console.log(r);

      let position = c * 6 + r;
      if (this.compareTiles.getLength() < 2) {
        if (this.checkPosition[0] != position) {
          this.compareTiles.push(t.name);
          this.checkPosition.push(position);
          let selectedCard1 = this.compareTiles.items[0];

          console.log("card 1 is " + selectedCard1);
          console.log("position recorded is: " + this.checkPosition[0]);
          console.log(position);
          console.log("end of card 1");
        }
      }

      console.log("see stack below: ");
      console.log(this.compareTiles);
      console.log("current length is: " + this.compareTiles.getLength());
      console.log("last selected tile is: " + this.compareTiles.peek());

      // prevent selecting same card using cid & rid (cause they are duplicates)

      // check for match via peek using another method????????????????????????
      // paul's uno discard
      //   checkCanDiscard: function (card) {
      // a card will be a key-value pair of suit and color
      // example:
      // {
      //  value: 3,
      //  suit: 'red'
      // }
      //   let topCard = this.discard.peek();
      //   if (card.suit == topCard.suit || card.value == topCard.value) {
      //     return true;
      //   } else {
      //     return false;
      //   }

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