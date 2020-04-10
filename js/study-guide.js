
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