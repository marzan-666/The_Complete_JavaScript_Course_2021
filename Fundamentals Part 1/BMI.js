const massMark = 78 ;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.92;


const BMIMark = massMark/heightMark**2;
const BMIJohn = massJohn/heightJohn**2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark,BMIJohn,markHigherBMI);