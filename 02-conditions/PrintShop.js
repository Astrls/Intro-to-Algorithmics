// Allow input from terminal
const prompt = require("prompt-sync")();

//input from user
var c = parseInt(prompt('Please select a number of copies'));

//variables
const price1 = 0.12
const price2 = 0.11
const price3 = 0.10


//code
if (c < 1) {
    console.log('please select at least 1 copy to be made');
}

else if (c <= 10) {
    total1 = c * price1;
    console.log("your total is "+total1.toFixed(2)+" €")
}

else if (10 < c < 30) {
    total2 = ((c-10) * price2) + (10 * price1);
    console.log("your total is "+total2.toFixed(2)+" €")
}

else if (c >= 30) {
    total3 = (c-30 * price3) + ((c-10) * price2) + (10 * price1);
    console.log("your total is "+total3.toFixed(2)+" €")
}