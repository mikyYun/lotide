const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

// check undefined first 

const middle = (arr) => {
  let result = [];
  let midArr = arr.length;
  // if (eqArrays(arr) === true) {
  if (arr.length <= 2) {
    return result
  } else {
    if (arr.length % 2 === 0) {
      let mid = arr.length / 2
      // let secondMid = arr.length / 2 + 1
      result.push(arr[mid - 1], arr[mid])
      // console.log(result)
    } else if (arr.length % 2 === 1) {
      let mid = Math.floor(arr.length / 2)
      result.push(arr[mid])
      // console.log(result)
    }
  }

      // if (arr.length <= 2) {
      //   return result;
      // } else if (arr.length > 2) {
      //   if (midArr % 2 === 0) {
      //     result.push(arr[midArr / 2]);
      //     return result
      //     // console.log("Array length is Odds");
      //   } else {
      //       result.push(arr[midArr / 2 - 1]);
      //       result.push(arr[midArr / 2]);
      //     return result
      //   }
      // }
    
  // } 
  console.log(result)
  return result;
};
// console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// middle([1, 2, 3, 4]);
// middle([1, 2]);
// middle([1]);
// middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]);

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]), ['this is a middle']);

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]));
module.exports = middle