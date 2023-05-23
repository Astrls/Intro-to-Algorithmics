// allow input from terminal
const prompt = require("prompt-sync")();
//Description
console.log("This small script will tell your ticket price");

//variables
const normal = "10€";
const discount = "8€";
price = "null";

while (price !== "y" || "n") {
  let price = prompt("Are you eligible for a discount? y for yes, n for no ");

  if (price === "y") {
    console.log("your price is " + normal);
    break;
  } else if (price === "n") {
    console.log("your price is " + discount);
    break;
  } else {
    let price = prompt("I didn't get that, You should use 'y' or 'n'");
  }
}
