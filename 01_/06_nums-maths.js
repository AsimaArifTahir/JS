//NUMBERS
/*
const score = 400
console.log(score);

const balance = new Number(100) // "new" object , specially defined as number, string etc.
console.log(balance);

console.log(balance.toString().length); // using .toString() converting the number into string, we can access sting methods on numbers as well.
console.log(balance.toFixed(2)); // it will give 100.00, .toFixed() increse the zero after the decimal point (ishariya)

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); 
// if toPrecision is 3, the log would be"23.8" 
//if value is 123.89, it would be 124(will round thatup as 8 se after decimal point)
// if it's 4, the value would be 123.9
// if the value is 1123.8966, the log would be 1.12+e3 (e means explain?)

const hundreds = 1000000
console.log(hundreds.toLocaleString());

*/
//MATH
/*
console.log(Math);
console.log(Math.abs(-4)); //absulote will chnge the negative into positive values
console.log(Math.round(4.6)); // will round of to the nearest number
console.log(Math.ceil(4.2)); // will only chose higher value like 5?
console.log(Math.floor(4.7)); // will chose the lowest value like 4 regardless of if there is 2 or 7 after the decimal point
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
*/
console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10) + 1); // to make sure the value would be above 0 we add 1
console.log(Math.floor(Math.random()*10) + 1); // floor will round that off with the smallest value

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min);








