const assertEqual = require('./assertEqual')

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result) {
    return true
  }
  return false;
};
//trou or false
module.exports = eqArrays