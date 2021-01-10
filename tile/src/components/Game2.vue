<template>
  <div>
    <h1>initDeck example</h1>
    <button class="btn btn-primary sm" @click="shuffle">Shuffle</button>
  </div>
</template>

<script>
// import Stack from "../data-structures/Stack";

export default {
  data: function () {
    return {
      board: []
    };
  },
  methods: {
    shuffle: function () {
      let tiles = [];
      for (let i = 0; i <= 39; i++) {
        for (let j = 0; j <= 1; j++) {
          tiles.push(i);
        }
      }
      // successfully pushed all tiles into array.

      // randomize them using the Fisher–Yates shuffle:
      // using the knowledge that the number of shuffled elements +
      // number of remaining elements will always === array.length,
      // we can shuffle in place (O(n)) by using the back of the array
      // to store the shuffled elements & the front to shuffle the
      // remaining ones. To sample uniformly, we pick a random element
      // in the front e.g. tiles[47] & swap its position with the
      // element in the back(array.length--) of the array. The unshuffled
      // element in the back is swapped to the front, where it waits for
      // subsequent shuffling.
      let currentIndex = tiles.length,
        temp,
        randomIndex;

      // while there are remaining elements to shuffle
      
      while (currentIndex) {
        // pick a random remaining element
        // check if m-- means that you are swapping by order of last index to first or what
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // swap with the current element
        temp = tiles[currentIndex]; // should be last of index?
        tiles[currentIndex] = tiles[randomIndex];
        tiles[randomIndex] = temp;
      }

    //   for (let i=0; i<tiles.length / length; i++) {
    //       this.board.push(tiles.slice(i*length, i*length + length))
    //   }

       for (let tile of tiles) {
           this.board.push(tile)
      }
    }

    // computed: {
    //     created: function () {
    //         this.shuffle()
    //     }
    // }


    // initBoard: function () {
    //   let tiles = [];
    //   let n = 5;
    //   for (let o = 0; o <= 10; o++) {
    //     tiles.push(n);
    //   }
    //   // for each number from 0 to 10
    //   for (let i = 0; i <= 10; i++) {
    //     // and for how many sets of 0-10
    //     for (let j = 0; j <= 10 ; j++) {
    //       tiles.push(i);
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
    //     this.board.push(tile);
    //   }
    // },
  }
}
</script>

<style scoped>
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

td {
  height: 60px;
  width: 60px;
  text-align: center;
  border: 1px solid gray;
}
</style>