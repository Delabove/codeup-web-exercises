// while loop pt 1

var i= 2;

while(i <= 65536){
    console.log(i);
    i *= 2;
}

// do-while loop pt 2

var allCones = Math.floor(Math.random() * 50) + 50;
var i = 1;

do {
   console.log(Math.floor(Math.random() * 5) + i);
   i++;
} while(i < allCones);

