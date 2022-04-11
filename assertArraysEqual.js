const assertEqual = require('./assertEqual')

const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  }
  return result;
};

module.exports = assertArraysEqual