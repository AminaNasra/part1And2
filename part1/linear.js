// file: linear.js
// Desc: This file shows how linear search works
// Author: Amina
// last modified: 26/05/2025
// Version: 1.0.0

// create the array to search
const searchArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(searchArray);

// set the value of we are searching for
let myKey = 81;
console.log(`key: ${myKey}`);

// create the search function
/**
 * sequentialSearch for numerical arrays
 * @param {array} arraySearch - // the array to be searched
 * @param {number} target - the value to be found in the array
 * @returns {number} -1 if the target is not in the array,
 * or the index if the target is in the array.
 */

function sequentialSearch(arraySearch, target) {
  // set a found variable
  let found = -1;
  // loop through the array
  for (let i = 0; i < arraySearch.length; i++) {
    // compare the current index to our target
    if (arraySearch[i] == target) {
      // set found to index
      found = i;
      // terminate the loop
      break;
    }
  }
  // return found
  return found;
}

// call the function
const myResult = sequentialSearch(searchArray, myKey);
// output the results

if (myResult == -1) {
  console.log(`The key of ${myKey} was not found ${myResult}`);
} else {
  console.log(`The key of ${myKey} was found at index ${myResult}`);
}
