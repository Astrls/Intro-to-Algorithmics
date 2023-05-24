// Allows input from terminal
const prompt = require("prompt-sync")();

// User input
let input = parseInt(prompt("Choose the length of the array "));

// Function
function isOrdered(arrLength) {
  // Arrays
  tab = [];
  verif = [];

  // User enters numbers
  for (let i = 0; i < arrLength; i++) {
    tab.push(parseInt(prompt("Type in any number: ")));
  }
  // Displays the array of numbers
  console.log(tab);

  // Compares each element to the next and verify if true or false
  for (let i = 0; i < arrLength - 1; i++) {
    if (tab[i] <= tab[i + 1]) {
      verif.push(true);
    } else {
      verif.push(false);
    }
  }

  // Displays the results of the comparison in an array
  console.log(verif);

  // Prints the final result: is the array in ascending order?
  if (verif[(0, 1, 2)] == true) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

isOrdered(input);
