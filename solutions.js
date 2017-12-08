// Functions
// 1. What is the difference between a parameter and an argument?
// - The argument is the input, the parameter is how the input is represented in the function.
// 2. Within a function, what is the difference between return and console.log?
// We specify the output of a function with the return statement. The return statement is different from console.log() in that we can use the return value of a function to pass as data, whereas we cannot with a console.log().

//Palindrome
// const checkPalindrome = (word) => {
//   var re = /[\W_]/g;
//   var lowRegWord = word.toLowerCase().replace(re, '');
//   var reverseWord = lowRegWord.split('').reverse().join('');
//   return reverseWord === lowRegWord;
// }
//
// console.log(checkPalindrome("radar"));
// console.log(checkPalindrome("Borscht"));

// Digit Sum
// const sumDigits = (num) => {
//   let sum=0;
//   const numToString = num.toString();
//   for (let i =0; i < numToString.length; i++) {
//     sum+=parseInt(numToString[i]);
//
//   }
//   return sum
// }
//
// console.log(sumDigits(42));

// const calculateSide = (sideA, sideB) => {
//
// }

// check prime
const checkPrime = (num) => {
if (num%2 !=0) {
  return true }
if (num%2 == 0) {
  return false }

}
console.log(checkPrime(9));
console.log(checkPrime(10));
console.log(checkPrime(5));
console.log(checkPrime(7));
