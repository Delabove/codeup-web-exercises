"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguageArray = users.filter(user => user.languages.length >= 3 );
    console.log(threeLanguageArray);



// Use .map to create an array of strings where each element is a user's email
// address</li>

const userEmailString = users.map(user => user.email);
console.log([userEmailString]);




// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsOfExperience = users.reduce(function(acc, user) {
    return acc + user.yearsOfExperience}, 0);
console.log(`The total years of experience of all users ${totalYearsOfExperience}`);

console.log(`The average years of experience per user is ${totalYearsOfExperience/users.length}`)



// Use .reduce to get the longest email from the list of users.



const userLongestEmail = users.reduce((longest, user ) => {

    if(user.email.length > longest.length){
        return user.email;
    } else {
        return longest;
    }
    }, ' ');


    console.log(userLongestEmail);

;



// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const usersNames = users.reduce(function (acc,  user) {
            return acc + user.name.join()}, "  ");
console.log(`Your instructors are: ${usersNames}`);


// EXTRA EXERCISE -REAL WORLD EXAMPLE


const laureatesElement = document.getElementById('laureates');

const url = 'http://api.nobelprize.org/v1/laureate.json';
fetch(url)
    .then((data) => data.json())
    .then((data)=>{
        console.log(data);
        const { laureates } = data;
        laureatesElement.innerHTML = laureates
            .filter( laureate => laureate.prizes.length > 1 )
            .map( laureate => `${laureate.firstname} ${laureate.surname} won ${laureate.prizes.length} prizes.` )
            .reduce((html, laureateDesc) => {
                return html + `<li>${laureateDesc}</li>`
            }, '')

    });