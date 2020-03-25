(function(){
    "use strict";
console.log("Hello!")
    /**
     * pwTODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["DeLayne", "Jacques", "Tandy", "Carlos"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('The first name in the array is ' + names[0]);
    console.log('The first name in the array is ' + names[1]);
    console.log('The first name in the array is ' + names[2]);
    console.log('The first name in the array is ' + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++) {
    console.log("Name at index: " + i + " is " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log("Name at index " , + name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first( param ) {
        return param[0];
    }
     var result = first([1, 2, 3, 4, 5]);
    console.log(result === [1, 2, 3, 4, 5] [0]);


    function  second( array ) {
        return array[1];

    }

    function third(array) {
        return array[array.length-1];

    }





    // TESTING
    var numbers = [1, 2, 3, 4, 5]
    var result = first([numbers]);
    console.log("first test", result === numbers[0]);

    result = first(names);
    console.log(result === 'Delayne')

    result = second (numbers);
    console.log( ' 1: secong(' , result === 2);
    result = second(names);
    console.log('2: second()', result === "Jacques" )

    result = third(numbers);
    console.log('1: last() ' , result === 5);
    result = third(names);
    console.log('2: last ()')
})();
