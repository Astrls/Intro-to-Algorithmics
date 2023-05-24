const prompt = require("prompt-sync")();

function conCat(a, b) {
  return a + b;
}
let inputA = String(prompt("Enter your first string: "));
let inputB = String(prompt("Enter your second string: "));

console.log(conCat(inputA, inputB));
