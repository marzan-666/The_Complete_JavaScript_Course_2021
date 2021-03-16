'use strict';
/*
///// Default Parameter
const bookings = [];
const createBooking = function(flightNum, numPassengers=1, price=199* numPassengers){
    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',5);
createBooking('LH123',1000);
createBooking('LH123',undefined,1000);
*/

/*
//// Passing by value vs Passing by reference 
const flight = 'LH234';
const marzan ={
    name: 'Marzan Khan',
    passport: 2476954545943
}
const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.'+ passenger.name;

    if(passenger.passport === 2476954545943){
        alert('Checked In...')
    }else{
        alert('Wrong Passport...!')
    }

}
checkIn(flight,marzan)
console.log(flight)
console.log(marzan)

const flightNum = flight;
const passenger = marzan;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000000);
}

newPassport(marzan);
checkIn(flight,marzan);

// JavaScript does not have passing by reference, it has only passing by value 
*/


/*
/// Fucnctions accepting callback functions

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

// Higher-Order function

const transformer = function(str,fn){
    console.log(`Original String: ${str}`)
    console.log(`Transformed String: ${fn(str)}`);
    //console.log(`Transformed by: ${fn}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best',upperFirstWord);
transformer('JavaScript is the best',oneWord);

const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click',high5);
//['Marzan','Natalie','Kate'].forEach(high5);
*/

/*
//// Functions Returning Functions

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Marzan');
greeterHey('Karishma');

greet('Hello')('Marzan');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Marzan');
*/

/*
/// The call and apply methods

const lufthansa = {
    airline: 'lufthansa',
    iatacode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(`${name} Booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
        this.bookings.push({
            flight: `${this.iatacode} ${flightNum}`,name});
    },
};

lufthansa.book(239,'Jonas Rozario');
lufthansa.book(635,'John Smith');
console.log(lufthansa); // from line 122
const eurowings = {
    name: 'Eurowings',
    iatacode: 'EW',
    bookings:[],
};

const book = lufthansa.book;

book.call(eurowings,23,'Karishma Naaz');
console.log(eurowings);


book.call(lufthansa,24,'Marzan Khan');
console.log(lufthansa);

const swiss = {
    name:'Swiss Air Lines',
    iatacode: 'LX',
    bookings:[],
}

book.call(swiss,666,'Marzan Khan');
console.log(swiss);


/// Apply Method

const flightData = [583,'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData);
*/

/*
/// The Bind method

const lufthansa = {
    airline: 'lufthansa',
    iatacode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(`${name} Booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
        this.bookings.push({
            flight: `${this.iatacode} ${flightNum}`,name});
    },
};

lufthansa.book(239,'Jonas Rozario');
lufthansa.book(635,'John Smith');
console.log(lufthansa); // from line 122
const eurowings = {
    name: 'Eurowings',
    iatacode: 'EW',
    bookings:[],
};

const book = lufthansa.book;

book.call(eurowings,23,'Karishma Naaz');
console.log(eurowings);


book.call(lufthansa,24,'Marzan Khan');
console.log(lufthansa);

const swiss = {
    name:'Swiss Air Lines',
    iatacode: 'LX',
    bookings:[],
}

book.call(swiss,666,'Marzan Khan');
console.log(swiss);


/// Apply Method

const flightData = [583,'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData);

// The Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW (23,'Steven');

const bookEW23 = book.bind(eurowings,2563);
bookEW23('Jonas Mitra');
bookEW23('Rancho chancha');

//with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
//lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate,value) => value + value* rate;
console.log(addTax(0.10,200));

const addVat = addTax.bind(null,0.23);
console.log(addVat(100));
console.log(addVat(23));

const addTaxRate = function(rate){
    return function(value){
        return value+value*rate;
    }
}
const addVat2 =  addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript','1: Python','2: Rust','3: C++'],

    // This generates [0,0,0,0] More in the next section

    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(write option number)`
                )
        );
        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        
        //console.log(this.answers);
        this.displayResults();
        this.displayResults('string');

       },
    displayResults(type = 'array'){
        if(type === 'aray'){
            console.log(this.answers);
        }
        else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
//poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));


//BONUS TEST DATA 1: [5, 2, 3]
//BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({answers: [5, 2, 3] },'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] },'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] });
*/

/*
// Immediately Invoked Function Expressions

const runOnce = function(){
    console.log('This will never run again. . .');
    const isPrivate = 23;
    var notPrivate = 46;
}
runOnce();
//console.log(isPrivate);
//console.log(notPrivate);

// IIFE
(function(){
    console.log('This will never run again. . .');
})();

(()=>console.log('This will also never run again...'))();

{
    const isPrivate =23;
    var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);
*/

/*
/// Closures

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} Passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();
//console.dir(booker);

// Examples of closures


// Example 1

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    };
};

const h = function() {
    const b = 777;
    f = function(){
        console.log(b*2);
    }
}
g();
f();
console.dir(f);

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} Passengers`);
        console.log(`There are 3 Groups, each with ${perGroup} passengers`);
    },wait*1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180,3);
*/


///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    });
})();
*/
