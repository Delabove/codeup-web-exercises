console.log("Hello, world!");

// Using the let keyword, declare a variable named sale. Assign the value true to it.

let sale = true;

// Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.

if(sale) {
    console.log("Time to buy!")
}

// Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.

// Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
let sale = false;

// Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'

let sale = true;

sale = false;

if(sale) {
    console.log('Time to buy!');
} else {
    console.log("Time to wait for a sale.")
}

// Using let, create a variable named hungerLevel and set it equal to 7.

let hungerLevel = 7;

// Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater
// than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.
//     After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different
// operators such as <=,>=,>, and <.

if(hungerLevel > 7) {
    console.log("Time to eat!");
} else {
    console.log("We can eat later!");
}

// Let’s create an if...else statement that
// checks if mood is 'sleepy' and tirednessLevel
// is greater than 8.
//
// If both conditions evaluate to true, then
// console.log() the string 'time to sleep'. Otherwise, we
// should console.log() 'not bed time yet'.

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === sleepy  && tirednessLevel > 8) {
    console.log("time to sleep")
} else {
    console.log("not bed time yet");
}

// Change the value of wordCount so that it is truthy. This value
// should still be a number. After you make this change and run your
// code, 'Great! You've started your work!' should log to the console.
// let wordCount = 0; original variable
let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}

// Change the value of favoritePhrase so that it is still a string
// but falsy. After you make this change and run your code, 'This string ' +
// 'is definitely empty.' should log to the console.


// let favoritePhrase = 'Hello World!';

let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}


// Let’s use short-circuit evaluation to assign a value to
// writingUtensil.Do not edit tool yet, we’ll return to tool
// in the next step. Assign to writingUtensil the value of
// tool and if tool is falsy, assign a default value of 'pen'.

let writingUtensil = tool || 'pen';

//What if we reassign the value of tool to 'marker'. Let’s
// see what happens to the value of writingUtensil.

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// >>>>>>>>>>>> FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<

// Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().
function getReminder() {

}

// In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
function getReminder() {
    console.log('Water the plants.')
}

// Let’s create another function that prints a useful Spanish travel phrase to the console.

    // Using a function declaration, create a function called greetInSpanish().

    function greetInSpanish() {

}

// Add code to the function body of greetInSpanish():
//
// In the function body console.log() the following Spanish phrase to the console: 'Buenas Tardes.'


function greetInSpanish() {
    console.log('Buenas Tardes.')
}

// Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:
//
//     Define a function called sayThanks() as a function declaration.
// In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'

function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
}

// Call sayThanks() to view the thank you message in the console.

sayThanks();


// Functions can be called as many times as you need them.

    // Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times

sayThanks();
sayThanks();
sayThanks();


// Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!
//
//     Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.

// Let’s compute the number of monitors by multiplying rows and columns and then returning the value.
//
//     In the function body of the function you just wrote, use the return keyword to return rows * columns.
// function monitorCount(rows, columns) {
//     return rows * columns;
// }Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.

    // Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.

// To check that the function worked properly, log numOfMonitors to the console.
//

function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

// Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.
// Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.
// Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
// To check that the function worked properly, log totalCost to the console.
function costOfMonitors(rows,columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);


// Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:
//
//     Create a variable named plantNeedsWater using the const variable keyword.
//     Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
//      In the function body add an if conditional that checks day === 'Wednesday'.
//     If the conditional is truthy, inside the if code block, use the return keyword to return true.
//      Add an else statement after the if statement.
//        Inside the else statement use the return keyword to return false.
// Call the plantNeedsWater() and pass in 'Tuesday' as an argument.



const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true;
    } else {
    return false;
    }
};
console.log(plantNeedsWater('Tuesday'));

// declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
// Below the city variable, write a function named logCitySkyline.
// Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
// Inside the function, include a return statement like this:
// return 'The stars over the ' + skyscraper + ' in ' + city;
// Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.


const city = 'New York City';
function logCitySkyline()  {
    let skyscraper = 'Empire State Building'
}

console.log(logCitySkyline());

// write three global variables:
//
//     Name the first variable satellite and set it equal to 'The Moon'.
//     Name the second variable galaxy and set it equal to 'The Milky Way'.
//     Name the third variable stars and set it equal to 'North Star'.
// Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:
//return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.




var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());


// define a function logVisibleLightWaves().
// Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
// Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
// Call the logVisibleLightWaves() function from outside the function.
// Beneath the function call, log the value of lightWaves to the console from outside the function.
// You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

function logVisibleLightWaves() {
    const lightWaves = 'Moonlight'
    console.log(lightWaves);
}
logVisibleLightWaves();

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
    return n % 5 === 0;
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    } else {
        return false;
    }
}

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
    return (minutes * fps) * 60;
}

// Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(a, b) {
    return a === b;
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
    return (a + b) < 100;
}

// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
    return lastName + ", " + firstName;
}

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
    return num % 100 === 0;
}

// Write a function to reverse an array.
function reverse(arr) {
    return arr.reverse();
}

// Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
    return arr[arr.length -1];
}

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    return str1.length === str2.length;
}

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
    return a % b === 0;
}

// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    return s.length === 0;
}

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

const helloName = name => 'Hello ' + name + '!';

// Create a function that finds the index of a given item.

function search(arr, item) {
    return arr.indexOf(item);
}

// Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    return num1 === num2;
}

// Write a function that takes two integers (hours, minutes) and converts them into seconds.
function convert(hours, minutes) {
    return ((hours*60) + minutes) * 60
}