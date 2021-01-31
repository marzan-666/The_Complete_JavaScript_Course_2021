'use strict';


///////////////////////////////////////
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
//logger();
//logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

function sum(a,b){
  const s= a+b;
  return s;
}
const firstSum = sum(99,1);
console.log(firstSum);

function mul(a,b){
  const m=a*b;
  return m;
}
const firstMul = mul(9.2,8.7);
console.log(firstMul);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num); // makes it int type and printed it


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

function findAge(year){
  return 2020 - year;
}
const age = findAge(1994);
console.log(age);

///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
const eligibleToPlay = (birthYeah,firstName) =>{
  const age = 2020-birthYeah;
  if(age>=18){
    return `${firstName} is eligible to Play because he is ${age} years Old`;
  }else{
    return `${firstName} is not eligible to Play because he is ${age} years Old`;
  }
}
console.log(eligibleToPlay(1994,'Marzan'));
console.log(eligibleToPlay(2004,'Lucifer'));
console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob'));
console.log(yearsUntilRetirement(1994,'Marzan'));

///////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitMaking(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitMaking(2, 3));

function vatApplied(food){
  return food*0.4;
}

function OrderFoor(pizza,coke){
  const pizzaPrice = vatApplied(pizza);
  const cokePrice = vatApplied(coke);
  const pizzaCost = pizzaPrice+pizza;
  const cokeCost = cokePrice+coke;
  const meal = `Cost of Pizza with vat is ${pizzaCost} and Cost of Coke with vat is ${cokeCost}`;
  return meal;
}
console.log(OrderFoor(5,4));


///////////////////////////////////////
// Reviewing Functions

const calculateAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetiremenT = function (birthYear, firstNamE) {
  const agE = calculateAge(birthYear);
  const retiremenT = 65 - agE;

  if (retiremenT > 0) {
    console.log(`${firstNamE} retires in ${retiremenT} years`);
    return retiremenT;
  } else {
    console.log(`${firstNamE} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetiremenT(1991, 'Jonas'));
console.log(yearsUntilRetiremenT(1950, 'Mike'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(100,230);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];
//const printAge = calcAge(years[0],[1],[2],[3],[4]);
//console.log(printAge);
const Age1 = calcAge(years[0]);
const Age2 = calcAge(years[1]);
const Age3 = calcAge(years[years.length - 1]);
console.log(Age1, Age2, Age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/

///////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
const newLength2 = friends.push('Marzan');
console.log(friends);
console.log(newLength);
console.log(newLength2);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}else{
  console.log('No Friend found');
}
if(friends.includes('Marzan')){
  console.log('You have a friend called Marzan');
}else{
  console.log('No Friend found');
}
