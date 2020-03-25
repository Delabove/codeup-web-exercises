// while loop pt 1

var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

// do-while loop pt 2
//my homework code that didnt work:
var allCones = Math.floor(Math.random() * 50) + 50;
// // var i = 1;
//
// do {
//    console.log(i = allCones);
//     i = 50;
// } while(i <= Math.floor(Math.random() * 5) + 1);

//instructors code:

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;
    console.log(allCones + conesToPurchase);
    if (conesToPurchase <= allCones) {
        // I can sell the cones
        console.log(conesToPurchase + ' cones sold..');
        allCones -= conesToPurchase;
    } else {
        // I do not have the cones to sell
        console.log("Cannot sell you " + conesToPurchase + " cones I only have " + allCones)
    }
    console.log(allCones)
} while (allCones > 0);

console.log("Yay! I sold them all!!");