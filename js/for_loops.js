// For loop exercise pt 2

function showMultiplicationTable(num) {
    // this is the multiplication table
    for(var i = 1; i <= 10; i++) {
        var answer = num * i;

        console.log(num + ' x ' + i + ' = ' + answer);
    }

    showMultiplicationTable( 7);



    // console.log(num * 1, 10);

}
// var i = 1; i <= 10; i++


// for loop pt 3
var allNumber =Math.floor(Math.random() * 200) + 20;

for( var i = 10; i < 10; i++) {
 console.log(i % 2 === 0 + "is even." || i % 2 !==0  + "is odd" );
}

//>>>>>>> MAKE SURE TO GO BACK AND RECODE AFTER RUNTHROUGH <<<<<<<<


// for loop pt 4


for( var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(1 + i)
//     } else if (i % 3 === 0) {
//         console.log(22 + i);
//     } else if (i % 5 === 0) {
//         console.log(333 + i);
//     } else if (i % 5 === 0) {
//         console.log(4444 + i);
//     } else if (i % 5 === 0) {
//         console.log(55555 + i);
//     } else if (i % 5 === 0) {
//         console.log(666666 + i);
//     } else if (i % 5 === 0) {
//         console.log(7777777 + i);
//     } else if (i % 5 === 0) {
//         console.log(88888888 + i);
//     } else {
//         console.log(999999999 + i);
//     }
// }

// for loop part 5
//

for(var i = 100; i >= 5;i -=5 ) {
        console.log(i);
}