function sayHello(){
}
console.log(sayHello);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
    return num + 1;
}

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainderOfTwoNum(x,y) {
    return x % y;
}

// Write a function that takes an integer minutes and converts it to seconds.

function minToSec(minutes) {
    return minutes * 60;
}

// Write a function that takes the base and height of a triangle and return its area.

function areaOfTriangle(base, height) {
    return (base * height) / 2;
}

// Create a function that takes an array and returns the first element.
function getFirstValue(arr) {
    return arr[0];
}

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
//     chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4)
}