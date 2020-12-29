<template>
  <div>
    <h1>Nested Array</h1>
    <table>
      <tr v-for="(row, rindex) in board" :key="rindex">
        <td v-for="(col, cindex) in row" :key="cindex">
          {{ col }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import Stack from "../data-structures/Stack";

export default {
  data: function () {
    return {
      // board: new Stack (),
      // username: "",
      board: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
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
  mounted: function () {
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        //  this.board[i][j] = Math.floor(Math.random()*10)
        this.$set(this.board[i], j, Math.floor(Math.random() * 10));
      }
    }
  },
  methods: {
    //   change: function () {
    //   this.$set(this.board[i], j, Math.floor(Math.random() * 10));
    },
    //     shuffle: function () {
    //         let colors = ["red", "yellow", "blue", "green"];
    //   let tiles = [];
    //   for (let c of colors) {
    //     for (let i = 0; i <= 7; i++) {
    //       // for each number from 1 to 9
    //       for (let j = 0; j < 2; j++) {
    //         // put that tile onto the deck
    //         tiles.push({
    //           value: i,
    //           color: c,
    //         });
    //       }
    //     }
    //   }
    //   for (let s = 0; s < 20000; s++) {
    //     let firstIndex = Math.floor(Math.random() * tiles.length);
    //     let secondIndex = Math.floor(Math.random() * tiles.length);
    //     let temp = tiles[firstIndex];
    //     tiles[firstIndex] = tiles[secondIndex];
    //     tiles[secondIndex] = temp;
    //   }
    //   for (let tile of tiles) {
    //     this.deck.push(tile);
    //   }
    // },
};
</script>

<style scoped>
/* #Game {
    text-align: center;
    justify-content: center;
} */

td {
  height: 80px;
  width: 80px;
  text-align: center;
  border: 1px solid gray;
}
</style>