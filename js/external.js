console.log("Hello from external JavaScript!");
alert('Welcome to my website!');

var userInput = prompt("Just curious...What is your favorite color?");

alert("Awesome! " + userInput + " is my favorite color too!");





// <!--You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?-->

var littleMermaid = prompt('How many days do you want to rent The Little Mermaid?');
var brotherBear = prompt('How many days do you want to rent Brother Bear?');
var hercules = prompt('How many days do you want to rent Hercules?');

var rentalTotal = (
    parseInt(littleMermaid) +
    parseInt(brotherBear) +
    parseInt(hercules)) * 3;
(littleMermaid + brotherBear + Hercules) * 3;

alert('Total rental $' + rentalTotal);

<!--Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.-->
var google = 400;
var amazon = 300;
var facebook = 350;

var googleRate = prompt('What is your rate for Google?');
googleRate = parseInt(googleRate);
var amazonRate = prompt('What is your rate for Amazon?');
amazonRate = parseInt(amazonRate);

var facebookRate = prompt('What is your rate for Facebook?');
facebookRate = parseInt(facebookRate);


var googleHours = prompt('How many hours did you work at Google this week?');
googleHours = parseInt(googleHours);

var amazonHours = prompt('How many hours did you work at Amazon this week?');
amazonHours = parseInt(amazonHours);

var facebookHours = prompt('How many hours did you work at Facebook this week?');
facebookHours = parseInt(facebookHours);

var totalDollars = (facebookRate * facebookHours) + (amazonRate * amazonHours) + (googleRate * googleHours);

alert('Total dollars: $' + totalDollars);

var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict);
alert('Student can attend class ' + canAttendClass);

var numberOfItems = prompt('How many items do you want to buy?');

numberOfItems = parseInt(numberOfItems);
var numberOfItemsRequired = prompt('How many items are required for the offer?');
numberOfItemsRequired = parseInt(numberOfItemsRequired);

var isOfferNotExpired = true;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && isOfferNotExpired) || (numberOfItems >= numberOfItemsRequired && isOfferNotExpired);

alert('Offer is valid ' + isOfferValid);



// <!--A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.-->


var fullClass = false;
var  scheduleConflict= false;

var canEnroll = !fullClass && !scheduleConflict;

<!--A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.-->


var itemsBought = 2;
var offerExpired = false;
var premiumMember = true;

var offerValid = (premiumMember + !offerExpired || (itemsBought >= 2 && !offerExpired));

