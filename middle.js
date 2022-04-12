const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

// check undefined first 

const middle = (arr) => {
  let result = [];
  let midArr = arr.length;
  if (arr.length <= 2) {
    return result
  } else {
    if (arr.length % 2 === 0) {
      let mid = arr.length / 2
      result.push(arr[mid - 1], arr[mid])
    } else if (arr.length % 2 === 1) {
      let mid = Math.floor(arr.length / 2)
      result.push(arr[mid])
    }
  }
  return result;
};

module.exports = middle