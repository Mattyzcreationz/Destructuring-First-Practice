let facts = {numPlanets: 8, yearNeptueneDiscovered: 1846};
let {numPLanets, yearNeptuneDiscovered} = facts;
//What dose the following code Return/print.
/** console.log(numPlanets); 8.
 * console.log(yearNeptuneDiscovered); 1846
*/

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoverYears);

/**Answer */

//  due to discoverYears being a copy of the direct object,
//This will return 8, 1846,1659

function getUserData({firstName, favoriteColor='green'}){
    return 'Your name is ${firstName} and you like ${favoriteColor}';
}
getUserData({firstName: "Alejandro", favoriteColor: "purple"})
getUserData({firstName:"Melissa"})
getUserData({}) 

/**Answer */

//1. Your name is Alejandro and your like purple.
//2. Your name is Mellisa and you like green
//3. green


/*Array Destructuring 1*/

let [first, second, third] = ["Maya", "Marisa", "chi"];
console.log(first);
console.log(second);
console.log(thrid);

//Answer
//1. "Maya"
//2."Marisa"
//3. "Chi"


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens", 
    "Brown paper packages tied up with strings"
]

console.log(raindrops);
console.log(whiskers);
console.log(aFewOfMyFavoriteThings);

//This is the same concept as the numbers as the previous questions,
//Only things diffrenet is that it will be targeting the first two.
//Then the last is a iteration of a brand new set of copy

//1. will return Raindrops on roses
//2. whiskers on kittens
/*3. Raindrops on roses, whisklers on kittens, Bright copper kettles,
warn wiikeb nuttens, Brown paper packages tied up with strings*/

let numbers = [10, 20, 30];
[numbers[1], numbers[2] = [numbers[2], numbers[1]]]
console.log(numbers)

//Return/print
//20,30 = 30,20


Refactoring

var obj = {
    numbers:{
        a:1, 
        b:2
    }
};
var a = obj.numbers.a;
var b = obj.numbers.b;

/**Write an 3s2015 version */

const obj = {numbers:{a:1, b:2}}

const a = obj.numbers.a;
const b = obj.numbers.b;


/*Array swap*/

var arr = [1,2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


const arr = [1,2];
const temp = arr[0];
[[arr[0],arr[1] = arr[1],temp]];

/**RaceRestults()
 * write a function called raceResults which accepts a single array argument.
 * it should return an object with the keys first,second,third and rest;
 *  first: the first element in the array Complete
 * second: the second element in the arry Complete
 * thrid: the third element in the array Complete
 * rest all other elemtns in the array Complete
 * Wrtie a oneline function to make this work using
 * an arrow function destructuring 
 * enchanced object assignemt same key/valueshortcut
 */


let names = ['Tom', 'Margaret', 'Allsion', 'David', 'Pierre'];

const raceResults = (names) => {let [first, second, third, reset] = ['Tom', 'Margaret', 'Allsion',...names];}; 