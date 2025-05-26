// file: binary.js
// desc: This file shows how binary search works.
// Author: Amina Aar
// Last modified: 16/05/2025
// version 1.0.0

// Create an array to search
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
// console.log(sortedArray);

// set the value we are searching for:
const key = 83;
// console.log(`key: ${key}`);

//Create the binarySearch function
/**
 * binarySearch function for numerical arrays.
 * @param {array} searchArray - the array of numbers to search
 * @param {number} target - the value to search for
 * @returns {number} -1 if target not found, the index if target is found.
 */

function binarySearch(searchArray, target) {
  // set the found variable
  let found = -1;
  // init the start and end points
  let start = 0;
  let end = searchArray.length - 1;
  console.log(`Start: ${start} End: ${end}`);

  // loop through while the start does not meet the end
  while (start <= end) {
    // find the mid point
    let mid = Math.floor((start + end) / 2);
    console.log(`Mid: ${mid}`);
    // test for the target
    if (searchArray[mid] == target) {
      console.log(`searchArray[${mid}]: ${searchArray[mid]}`);
      found = mid;
      // exit the loop as we are done
      break;
    } else if (searchArray[mid] < target) {
      // look at the right side of mid. ( right half of the array)
      start = mid + 1;
      console.log(`Start: ${start} End: ${end}`);
    } else {
      // look at the left side
      end = mid - 1;
      console.log(`Start: ${start} End: ${end}`);
    }
  } // end of while loop

  // return found
  return found;
}

// call the function
const result = binarySearch(sortedArray, key);
// output the results

if (result == -1) {
  console.log(`The key of ${key} was not found ${result}`);
} else {
  console.log(`The key of ${key} was found at index ${result}`);
}
