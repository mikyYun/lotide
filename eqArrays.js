const assertEqual = require('./assertEqual')

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};

module.exports = assertEqual