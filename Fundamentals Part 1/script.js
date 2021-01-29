
////////////////////////////////////
// Linking a JavaScript File
let js = "JavaScript is amazing";
console.log(40 + 8 + 23 +10);
alert(js);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
let age=23;
console.log("Age:",age);
console.log("Sex:",'Male');
console.log("Weight:",65.5,'KG');
//let firstName = "Matilda";

//console.log(firstName);
console.log("Age:",25);
console.log("Sex:",'Female');
console.log("Weight:",55.7,'KG');

/// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(person);
console.log(myFirstJob);
console.log(myCurrentJob);
alert(PI);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year = 1991;
console.log(year);
console.log(typeof year);

//console.log(typeof null);

////////////////////////////////////
//
///let, const and var
//let age = 30;
//age = 31;

const birthYear = 1990;
console.log(birthYear);
// birthYear = 1990;
//const job;
let job3 = 'developer';
var job = 'programmer';
job = 'teacher'
console.log("Job:",job);
console.log(typeof job);
lastName = 'Schmedtmann';
console.log(lastName);
console.log(job3);
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2021;
const ageJonas = now - 1994;
const ageSarah = now - 2002;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const fName = 'Jonas';
const lName = 'Schmedtmann';
console.log(fName + ' ' + lName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
console.log(x);
x--;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1994 > now - 2002);

////////////////////////////////////
// Operator Precedence
const noww = 2037;
const ageJon = noww - 1991;
const ageSara = noww - 2018;

console.log(noww - 1991 > noww - 2018);

let a, b;
a = b = 25 - 10 - 5; // x = y = 10, x = 10
console.log(a, b);

const averageAge = (ageJon + ageSara) / 2;
console.log(ageJon, ageSara, averageAge);

// Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

console.log(`My name is marzan
and i love to learn new things
ok bye. . .`);

const jon = `hello i am ${firstName}, ${year-birthYear} year old and i am a ${job}!!!`;
console.log(jon);
*/
// Taking Decisions: if / else Statements
const ages = 15;

if (ages >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - ages;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYeaR = 2012;

let century;
if (birthYeaR <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const AGE = 20;
if(AGE >=18){
  console.log('Sarah can start driving license 🚗');
}else{
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

// Type Conversion and Coercion

// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(Number('1994'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log('Marzan',Boolean('Marzan'));
*/

///////////////////////////////////
// Equality Operators: == vs. ===
/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

const check = prompt("what's your initial?");
console.log(check);
console.log(typeof check);*/

////////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
   console.log('Marzan is able to drive!');
} else {
   console.log('Someone else should drive...');
  }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Marzan is able to drive!');
} else {
  console.log('Someone else should drive...');
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
 }else if (scoreKoalas > scoreDolphins) {
   console.log('Koalas win the trophy 🏆');
 }else if (scoreDolphins === scoreKoalas) {
   console.log('Both win the trophy!');
 }
*/
// BONUS 1 and 2
/*
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
*/

////////////////////////////////////
// The switch Statement

const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

