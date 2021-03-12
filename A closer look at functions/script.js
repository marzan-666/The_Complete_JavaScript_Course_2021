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
