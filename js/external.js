console.log("Hello from external JavaScript!");
alert('Welcome to my website!');

var userInput = prompt("Just curious...What is your favorite color?");

alert("Awesome! " + userInput + " is my favorite color too!");





// <!--You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?-->

var littleMermaid = 3;
var brotherBear = 5;
var Hercules = 1;

prompt("How much will you have to pay?");

// (littleMermaid + brotherBear + Hercules) * 3;

<!--Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.-->
var google = 400;
var amazon = 300;
var facebook = 350;

// (facebook * 10) + (google * 6 ) + (amazon * 4);
prompt("How much will you receive in payment this week?")


// <!--A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.-->


var fullClass = false;
var  scheduleConflict= false;

var canEnroll = !fullClass && !scheduleConflict;

<!--A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.-->


var itemsBought = 2;
var offerExpired = false;
var premiumMember = true;

var offerValid = (premiumMember + !offerExpired || (itemsBought >= 2 && !offerExpired));

