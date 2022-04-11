const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

// const assertEqual = (actual, expected) => {
  
//   if (actual === expected) {
//     console.log(`👍👍👍👍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👀🤢🤢👀Assertion Failed:  ${actual} !== ${expected}`);
//   }
// };

const assertArraysEqual = (first, second) => {
  // let result = JSON.stringify(first) === JSON.stringify(second);
  // let result = eqArrays(first, second)
  if (eqArrays(first, second)) {
    console.log(`Two arrays(${first} and ${second}) are equal? : true`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : false`);
  }
  // return eqArrays;
};

// assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true); // => true

module.exports = assertArraysEqual