// // "use strict";
// //
// // /**
// //  * TODO:
// //  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
// //  * would like to enter a number. If they click 'Ok', prompt the user for a
// //  * number, then use 3 separate alerts to tell the user:
// //  *
// //  * - whether the number is even or odd
// //  * - what the number plus 100 is
// //  * - if the number is negative or positive
// //  *
// //  * if what the user enters is not a number, use an alert to tell them that, and
// //  * do *not* display any of the above information.
// //  *
// //  * Can you refactor your code to use functions?
// //  */
// //
// // var enterNumber = confirm("Would you like to enter your phone number?");
// //
// // if (enterNumber) {
// //     prompt("Please enter your phone number");
// // }
// //
// //
// //
// // /* ########################################################################## */
// //
// // /**
// //  * TODO:
// //  * Create a function named `analyzeColor` that accepts a string that is a color
// //  * name as input. This function should return a message that related to that
// //  * color. Only worry about the colors defined below, if the color passed is not
// //  * one of the ones defined below, return a message that says so
// //  *
// //  * Example:
// //  *  > analyzeColor('blue') // returns "blue is the color of the sky"
// //  *  > analyzeColor('red') // returns "Strawberries are red"
// //  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// //  *
// //  * You should use an if-else-if-else block to return different messages.
// //  *
// //  * Test your function by passing various string literals to it and
// //  * console.logging the function's return value
// //  */
// //
// //
// //
// //
// //
// // var analyzeColor = prompt("What's your favorite color?");
// //
// //
// //     if (analyzeColor === "blue") {
// //         alert("Blue is the color of the sky!");
// //     } else if (analyzeColor == "red") {
// //         alert("Red is the color of strawberries!");
// //     } else if (analyzeColor === "cyan") {
// //                 alert("I don't know anything about cyan!");
// //     } else {
// //                 alert("That color is not an option.")
// //     }
// //
// //
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // // /**
// // //  * TODO:
// // //  * Pass the `randomColor` variable to your function and console.log the results.
// // //  * You should see a different message every time you refresh the page
// // //  */
// // //
// //
// // function analyzeColor() {
// //     var randomColor = analyzeColor;
// // }
// //    alert(randomColor);
// //
// //
// //
// // //
// // // }
// // /**
// //  * TODO:
// //  * Refactor your above function to use a switch-case statement
// //  */
// // switch (randomColor) {
// //     case "yellow":
// //         alert("Yellow is such a happy color!");
// //         break;
// //     case "red":
// //         alert("Wow! Red is bold!");
// //         break;
// //     default:
// //         alert(randomColor + " isnt my favorite, but you know your own taste!");
// //
// // }
// // /**
// //  * TODO:
// //  * Prompt the user for a color when the page loads, and pass the input from the
// //  * user to your `analyzeColor` function. Alert the return value from your
// //  * function to show it to the user.
// //  */
// //
// // var userQuestion= prompt("What's the first color to pop into your head?");
// //
// // function userInput() {
// //    var userQuestion = analyzeColor;
// // }
// // alert(userQuestion);
// // /* ########################################################################## */
// //
// // /**
// //  * TODO:
// //  * Suppose there's a promotion in Walmart, each customer is given a randomly
// //  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// //  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// //  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// //  * all for free!.
// //  *
// //  * Write a function named `calculateTotal` that accepts a lucky number and total
// //  * amount, and returns the discounted price.
// //  *
// //  * Example:
// //  * calculateTotal(0, 100) // returns 100
// //  * calculateTotal(4, 100) // returns 50
// //  * calculateTotal(5, 100) // returns 0
// //  *
// //  * Test your function by passing it various values and checking for the expected
// //  * return value.
// //  */
// // *****lost all my files from merge. had to copy and paste and redo during walk through :(
//
//
//
// // lost exercise file when merged. remade file during walk through :(
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// ////////////// Step 1 create confirm variable and function //////////////////////
//
// //prompt the user for a number. will return the number or NaN if they dont enter a number
//
// function promptForNumber() {
// var numberInput = prompt("Please enter a number.");
// return parseInt(numberInput);
// }
//
// // REFACTORING THE CODE: takes a number and returns the text even or odd depending on the nunber if statement or concise ternary
// function evenOrOdd(aNumber) {
//     // if statemtnt
//     if(aNumber % 2 === 0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//
// // REFACTORED: - what the number plus 100 is
//
// function plus100(aNumber) {
//     return aNumber + 100;
// }
//
//
// // REFACTORED: take a number and return it positive or negative depending on the number
// function negativeOrPositive(aNumbre) {
//     return (parsedNumber >= 0) ? "positive" : "negative"
//
// }
//
// var isEnteringNumber = confirm("Would you like to enter a number?");
// if (isEnteringNumber) {
//     // console.log("Entering a number.");
//
//     var parsedNumber = promptForNumber();
//
//     // console.log(parsedNumber, isNaN(parsedNumber));
//
//     if(isNaN(parsedNumber)) {
//         alert("You didn't enter a number");
//     } else {
//         // alert("You entered a number.");
//
//
//         // - whether the number is even or odd
//         // store the text even or odd
//         // // use ternary expression. fyi division by 2? tells us if even - use modulus for this
//         // var evenOrOdd = (parsedNumber % 2 ==== 0) ? "even" : "odd"; got rid of this line of code bc
//         // of above refactoring.
//
//         alert("The number is " + evenOrOdd(parsedNumber));
//
//         // - what the number plus 100 is =create new variable
//
//         // var plus100 = parsedNumber + 100; removed to refactor from above.
//
//         alert("The number plus 100 is " + plus100(parsedNumber));
//
//         // * - if the number is negative or positive
//         //    store the text negative or positive depending on whether its either or
//         //    ternary expression
//         //removed code below bc of refactoring above.
//         // var negativeOrPositive = (parsedNumber >=0) ? "positive" : "negative";
//         alert("The number is " + negativeOrPositive (parsedNumber));
//
//     }
// }
//
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// function analyzeColor(color) {
//     if (color === "blue") {
//         return color + " is the color of the sky";
//     } else if(color === "red") {
//         return "Strawberries are " + color;
//     } else if (color === "cyan") {
//          return "I don't know anything about " + color;
//     } else {
//         return color + " is not valid";
//     }
//
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("green"));
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
//
// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
//
// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return color + " is the color of the sky";
//             break;
//         case "red":
//                 return "Strawberries are " + color;
//                 break;
//         case"cyan":
//                     return "I don't know anything about " + color;
//                     break;
//         default:
//             return color + " is not valid";
//             break;
//     }
//     // if (color === "blue") {
//     //     return color + " is the color of the sky";
//     // } else if(color === "red") {
//     //     return "Strawberries are " + color;
//     // } else if (color === "cyan") {
//     //     return "I don't know anything about " + color;
//     // } else {
//     //     return color + " is not valid";
//     // }
//
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("green"));
//
//
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// var colorInput = prompt( "please enter a color.");
// alert(analyzeColor(colorInput));
//
//
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//
//  */
//
//
//
//
//
//
//
// function calculatTotal(luckyNumber, totalBill) {
//     if (luckyNumber === 0) {
//         return totalBill;
//     } else if(luckyNumber === 1) {
//         return totalBill * .90;
//     } else if(luckyNumber === 2) {
//         return totalBill * .75;
//     } else if(luckyNumber === 3) {
//         return totalBill * .65;
//     }else if(luckyNumber === 4) {
//         return totalBill * .50;
//     }else if(luckyNumber === 5) {
//         return "Your bill is free today!";
//     }
//
// }
//
//
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0
//
//
//
// // below is from from original exercise i had done
// //
// // function calculateTotal(luckyNumber, bill) {
// //     if (luckyNumber === 0) {
// //         return bill;
// //     } else if (luckyNumber === 1) {
// //         return bill - (bill * .10);
// //
// //     } else if (luckyNumber === 2) {
// //         return bill - (bill * .25);
// //
// //     }  else if (luckyNumber === 3) {
// //         return bill - (bill * .35);
// //
// //     }  else if (luckyNumber === 4) {
// //         return bill - (bill * .50);
// //
// //     }  else if (luckyNumber === 5) {
// //         return 0;
// //     }
// // }
// //
// //
// // console.log(calculateTotal(0, 100)); // returns 100
// // console.log(calculateTotal(2, 100));// returns 50
// // console.log (calculateTotal(5, 100));
//
// /**
//  //
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// // var randomNumbers = luckyNumber[Math.floor( Math.random() * luckyNumber.length)];
// // var randomNumber = [0, 1, 2, 3, 4, 5];
//
// var parsedNumber = promptForNumber("Please enter your bill.");
// // console.log("typeof parsedNumber, type of parsedNumber");
// var finalTotal = calculateTotal(luckyNumber, parsedNumber);
// alert("Your lucky number is " + luckyNumber);
// alert("Total before discount is " + parsedNumber);
// alert("totaly after discount is " + finalTotal);
//
//
//

var vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini', 'tomato'];
vegetables.sort()
