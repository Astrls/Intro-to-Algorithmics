// allow input from terminal
const prompt = require("prompt-sync")();

let input = parseFloat(prompt("Enter the length of the array "));

function findMin(arrSize) {
  arr = [];
  for (i = 0; i < arrSize; i++) {
    arr.push(parseInt(prompt("Type in any number: ")));
  }
  min = Math.min(...arr);
  console.log(arr);
  console.log(arr.findIndex((elem) => elem === min));
}

findMin(input);
