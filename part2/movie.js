// file: movie.js
// desc: This file shows how objects work in js
// Author: Amina Aar
// Last modified: 26/05/2025
// version 1.0.0

// creating  myMovie object
const myMovie = {
  title: "The longest day",
  year: "1964",
};
// output myMovie object
console.log(myMovie);

// Adding in propeties to myMovie object
myMovie.rating = 5;
myMovie.summary = "World War II movie about the Normandy landings";
// output myMovie object after adding 2 properties
console.log(myMovie);

// changing property value of myMovie object
myMovie.rating = 4;
myMovie.year = 1962;

// output myMovie object after changing property data
console.log(myMovie);

// removing property from myMOvie object
delete myMovie.summary;
//ouput myMovie object to console
console.log(myMovie);
