// Allow input from terminal
const prompt = require("prompt-sync")();

//input from user
let a = parseFloat(prompt('Choose your standard price: '))
let b = parseFloat(prompt('Choose your first reduced price: '))
let c = parseFloat(prompt('Choose your fully reduced price: '))
let d = parseInt(prompt('Please select a number of copies: '));


function printShop(price1,price2,price3,copy){
//code
if (copy < 1) {
    console.log('Please select at least 1 copy to be made');
}

else if (copy <= 10) {
    total1 = copy * price1;
    console.log(`your total is ${total1.toFixed(2)} €`)
}

else if (10 < copy < 30) {
    total2 = ((copy - 10) * price2) + (10 * price1);
    console.log(`your total is ${total2.toFixed(2)} €`);
}

else if (c >= 30) {
    total3 = ((copy - 30) * price3) + ((copy - 10) * price2) + (10 * price1);
    console.log(`your total is ${total3.toFixed(2)} €`);
}
}

printShop(a,b,c,d);