const eqArrays = require('./eqArrays');
const assertArraysEqual = (first, second) => {

  if (eqArrays(first, second)) {
    console.log(`Two arrays(${first} and ${second}) are equal? : true`);
    return true;
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : false`);
    return false;
  }
};

module.exports = assertArraysEqual;