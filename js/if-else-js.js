"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'indigo'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.


// if (color === 'red'){
// console.log("red is the color of strawberries");
// } else if ( color === 'orange') {
//     console.log("orange is the color of oranges");
// } else if ( color === 'yellow') {
//     console.log("yellow is the color of the sun");
// } else if ( color === 'green') {
//     console.log("grass is green");
// } else if ( color === 'blue') {
//     console.log("the sky is blue");
// } else {
//     console.log("I don't know anything about this color.");
// }



// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
// (condition) ? when true : when false;

// (color === favorite) ? console.log("That's my favorite color!") : console.log("That's pretty.")

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70






// WHILE LOOP EXERCISE


var i = 2;
while(i <= 65536) {
    console.log(i);
    i *= 2;
}


// do-while loop pt 2


//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

var i= 1;

while( i <= 10){
    console.log("Counting up to 10: " + i);
    i++;
}


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

i = 20;

while (i >= 0) {
    console.log("Counting down from 20:" + i);
    i--;
}


//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 2;

while(i <= 20) {
    console.log("Counting up by 2's to 20:" + i);
    i += 2;
}