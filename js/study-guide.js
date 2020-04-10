
console.log("Hello DeLayne!");

function joinArray(arr) {
    return arr.join();
}

console.log(joinArray(["DeLayne", "Jacques", "Grayson"]));


function splitArray(arr) {
    return arr.split(",");
}

console.log(splitArray("Eat,Sleep,Code,Repeat"));

function mapArray(age) {
    const ages = [18, 20, 21, 30];
    return ages.map(age => age * 2);
}

console.log(mapArray());


function filterArray(age) {
    const friends = [
        { name: "Abby", age: 22 },
        { name: "Boby", age: 16 },
        { name: "Coel", age: 20 },
        { name: "Dany", age: 15 }
    ];
    return friends.filter(friend => friend.age >= 18);
}


console.log(filterArray());

function evenArray() {
    let arr = [1, 2, 3, 4, 5, 6];
    let even = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(arr[i]);
    }
    return even;
}

console.log(evenArray());

// OR

let arr = [1, 2, 3, 4, 5, 6];
    let even = arr.filter(val => {
        return val % 2 === 0;
    });

console.log(even);