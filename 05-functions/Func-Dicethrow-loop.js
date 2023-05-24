// allow input from terminal
const prompt = require("prompt-sync")();

let input = parseInt(
  prompt("Choose a number of times you wanna throw the dice: ")
);

function diceThrow(numThrows) {
  console.log("Throwing the dice");
  const DICEFACE = [];

  //action of rolling the dice
  function rolldice(maxLimit = 6) {
    return Math.floor(Math.random() * 6);
  }

  //Loop dice roll X times
  for (let i = 0; i < numThrows; i++) {
    DICEFACE.push(rolldice() + 1);
  }

  //Display results of rolls
  console.log(DICEFACE);

  //Create object for total throws
  const elementCounts = {};
  DICEFACE.forEach((element) => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  //Calculate length of object
  roll = Reflect.ownKeys(elementCounts).length;

  console.log(elementCounts);
}

diceThrow(input);
