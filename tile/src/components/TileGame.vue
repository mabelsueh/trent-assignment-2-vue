<template>
  <div>
    <BeginGame
      class="playerName"
      v-if="gameState == 'input_name'"
      @beginGameEvent="beginGame"
    />
    <div id="game" v-if="gameState == 'player_turn'">
      <div class="container">
        <div class="gamepage">
          <div class="score">
            <h4>Points: {{ points }}</h4>
          </div>
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
                        selectTile(
                          newTiles[cindex * 6 + rindex],
                          cindex,
                          rindex
                        )
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stack from "../data-structures/Stack";
import BeginGame from "./BeginGame";
export default {
  components: {
    BeginGame,
  },
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
      remainingTiles: 36,
      gameState: "",
      newPlayerName: this.playerName,
      points: 0,
      playerScore: {
        name: "",
        score: "",
      },
    };
  },
  props: ["playerName"],
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
    this.gameState = "input_name";
  },
  methods: {
    //   @start: clear stack??????????????????????????????????????
    selectTile: function (t, c, r) {
      //   console.log("starting length is: " + this.compareTiles.getLength());

      let position = c * 6 + r;
      if (this.compareTiles.getLength() < 2) {
        if (this.checkPosition[0] != position) {
          this.compareTiles.push(t.name);
          this.checkPosition.push(position);

          //   console.log("position recorded is: " + this.checkPosition[0]);
          //   console.log("current position is: " + position);
          //   console.log("end of card");
          //   console.log("see stack below: ");
          //   console.log(this.compareTiles);
          //   console.log("current length is: " + this.compareTiles.getLength());
          //   console.log("last selected tile is: " + this.compareTiles.peek());
          //   console.log("end of selection")
        }
        if (
          this.compareTiles.getLength() == 2 &&
          this.compareTiles.items[0] !== this.compareTiles.items[1]
        ) {
          this.compareTiles.clear();
          this.checkPosition = [];
          //   console.log("cards don't match");
          //   console.log("reset checkPosition: " + this.checkPosition[0]);
          //   console.log("after cleared length is: " + this.compareTiles.getLength());
        } else if (
          this.compareTiles.getLength() == 2 &&
          this.compareTiles.items[0] == this.compareTiles.items[1]
        ) {
          this.compareTiles.items.pop();
          this.compareTiles.items.pop();
          this.checkPosition = [];
          t.imageUrl = "";
          this.remainingTiles -= 2;
          this.points += 20;
          //   console.log("cards match!");
          //   console.log("reset checkPosition: " + this.checkPosition[0]);
          //   console.log("after matched length is: " + this.compareTiles.getLength());
          //   console.log("remainingTiles is: " + this.remainingTiles);
          //   console.log(t,c,r)
          //   console.log(this.points)
        }
        if (this.remainingTiles === 0) {
          this.gameState = "end_turn";
        }
      }
    },
    beginGame: function () {
      this.gameState = "player_turn";
    },
    insertScore: async function () {
      await axios.post(
        "https://8080-b7315246-f510-4e1a-931e-c953f9f5cf27.ws-us03.gitpod.io/scoreboard/create",
        this.playerScore
      );
    },
  },
  watch: {
    gameState: function () {
      if (this.gameState === "player_turn") {
        // do something that allows them to play game
      }
      if (this.gameState === "end_turn") {
        alert(
          "Congratulations! Board cleared! Your have scored " +
            this.points +
            "points!"
        );
        this.insertScore();
        // input score thingy
        this.$router.push("scoreboard");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Creepster&display=swap");
div {
  text-align: center;
}

h4 {
  color: #edcd33 !important;
  font-family: "Creepster", cursive;
  /* letter-spacing: 0.3em; */
}

@media only screen and (max-width: 736px) {
  img.responsive {
    width: 38%;
  }
}
</style>