'use strict';

/*
/////////////////////////////////////////////////

// ////// Simple Array Methods

let arr = ['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

console.log(arr);
// Splice
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

// REVERSE
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr,...arr2);
console.log([...arr,...arr2]);

// JOIN
console.log(letters.join('-'));
*/

/*
// Looping arrays forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for(const movement of movements){
  if(movement > 0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}
for(const [i,movement] of movements.entries() ){
  if(movement > 0){
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  }else{
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(movement)}`);
}
}

console.log('------FOR EACH------');
movements.forEach(function(movement){
  if(movement > 0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});
console.log('------FOR EACH------');
movements.forEach(function(mov,i,arr){
  if(mov > 0){
    console.log(`You deposited ${mov}`);
  }else{
    console.log(`You withdraw ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
*/

/*
// forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});
*/
