'use strict';
/*
function calcAge(birthYear){
    const Age = 2021 - birthYear;
    console.log(firstName);

    function printAge(){
        let output = `Your age is ${Age} and born in ${birthYear}`;
        console.log(output); 
        if(birthYear>= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);
            function add(a,b){
                return a+b;
            }
            //const output = 'NEW OUTPUT!'; same output ase before form line 8
            output = 'NEW OUTPUT!'; // output will be NEW OUTPUT! (RE assigning the output)
        }
        //console.log(str); str variable is not global scope , its blocked scope variable (const and let)
        console.log(millenial); // it is accessible , becuase var variable is function scoped variable and its in the same function 
       // console.log(add(2,3)); //  if strict mode is on this line can not be executed
       console.log(output);
    }
    
    printAge();
    return Age;   
}
const firstName = 'Marzan';
calcAge(1994);
//console.log(Age); Age variable is not global 


if(!numProducts) DeleteShoppingCart(); // numProducts is undefined in this line
var numProducts = 10; // numProducts is 10 in line 36 not 35 
//const numProducts = 10; its better to use const so that we understand where is the error actually
function DeleteShoppingCart(){
    console.log('All products are deleted');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);
const calAge = function (BirthYear){
    console.log(2021-BirthYear);
    console.log(this);
}
calAge(1994);

const calAgeArrow = BirthYear => {
    console.log(2021-BirthYear);
    console.log(this);
}
calAgeArrow(1994);

const marzan = {
    year: 1994,
    calcAge : function(){
        console.log(this);
        console.log(2021-this.year);
    },
};
marzan.calcAge();


const matilda = {
    year: 2017,
};
matilda.calcAge = marzan.calcAge ; // object borrowing
matilda.calcAge();
*/
//const m = marzan.calcAge ;
//m();


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        //console.log(this);
        console.log(2021-this.year);

        /* solution 1
        
        const self = this; // self or that
        const isMillenial = function (){
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        */

        // solution 2 arrow function
        
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
/*
const addExpr = function (a,b){
    console.log(arguments);
    return a+b;
};
addExpr (2,5);
addExpr (2,5);

var addArrow = (a,b) => {
    console.log(arguments);
    return a+b;
};
addArrow(2,5,8); */


// Primitive vs Objects

let age = 30;
let oldAge = age ;
age = 31 ;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Marzan',
    age:26,
};
const friend = me ;
friend.age = 27;
console.log('Friend:',friend);
console.log('Me:',me);

// pritime types
let lastName = 'Kapoor';
let oldLastName = lastName ;
lastName = 'Khan';

console.log(lastName,oldLastName);
// reference types
const kareena = {
    firstName: 'Kareena',
    lastName: 'Kapoor',
    age: 39,
};
const marriedKareena = kareena;
marriedKareena.lastName = 'Khan';
console.log('Before Marriage: ',kareena);
console.log('After Marriage: ', marriedKareena);

 //coppying objects

 const kareena2 = {
    firstName: 'Kareena',
    lastName: 'Kapoor',
    age: 39,
    family: ['Karishma', 'Ranbir'],
};

const kareenaCopy = Object.assign({},kareena2);
kareenaCopy.lastName = 'Khan';

kareenaCopy.family.push('Rishi');
kareenaCopy.family.push('Randhir');

console.log('Before Marriage: ',kareena2);
console.log('After Marriage: ', kareenaCopy);