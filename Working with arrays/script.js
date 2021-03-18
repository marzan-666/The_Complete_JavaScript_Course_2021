'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


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

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function(dogsJulia,dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  // dogsJuliaCorrected.slice(1,3);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function(dog,i){
    if(dog >= 3){
      console.log(`Dog number ${i+1} is an adult, and ${dog} years old`);
    }else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);
*/
