const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [object Object] === [object Object]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]`);
  }
};

module.exports = assertObjectsEqual;