
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