<template>
  <div class="container playerName mt-5">
    <br />
    <h1>come on</h1>
    <h2>and</h2>
    <h1>Match the monsters</h1>
    <div>
      <label>Enter Name: </label>
      <br />
      <input type="text" v-model="newName" />
      <br/>
      {{errorMsg}}
      <br/>
      <button class="btn btn-warning btn-sm mt-1" @click="begin">
        Start Game
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newName: "",
      errorMsg: "",
    };
  },
  methods: {
    begin: function () {
      if (
        this.newName === "" ||
        this.newName.length < 3 ||
        this.newName.length > 13
      ) {
        this.errorMsg = "Please enter 3-12 characters!";
      } else {
        this.$emit("beginGameEvent", (this.gameState="player_turn") ,this.newName);
        this.$emit("newPlayerName", this.newName);
        // need to add gameState?
        // need one more line for inputing score
        // this.$emit("playerInputName", this.newName);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Creepster&display=swap");

.container {
  color: #edcd33 !important;
  font-family: "Creepster", cursive;
  text-shadow: 2px 2px black;
}
</style> 