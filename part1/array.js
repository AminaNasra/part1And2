// file: array.js
// desc: This file shows how arrays work in js
// Author: Amina Aar
// Last modified: 26/05/2025
// version 1.0.0

// create an array of numbers
const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
// output myArray
console.log(myArray);

// sorting the array
myArray.sort(function (a, b) {
  return a - b;
});
console.log(myArray);

// Adding 3 numbers at the end of array
myArray.push(19, 23, 30);
console.log(myArray);

// sorting the array after pushing 3 numbers
myArray.sort(function (a, b) {
  return a - b;
});
console.log(myArray);

// remove 2 numbers from array
const updatedArray = myArray.filter((num) => num != 8 && num != 31);
// console.log(updatedArray);

// sort the updatedArray
updatedArray.sort(function (a, b) {
  return a - b;
});
console.log(updatedArray);
