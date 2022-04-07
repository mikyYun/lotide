const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let lengthChecker = keys1.length === keys2.length ? true : false;
  if (lengthChecker === true) {
    let result;
    for (let ky of keys1) {
      if (Array.isArray(object1[ky]) && Array.isArray(object2[ky])) {
        if (!eqArrays(object1[ky], object2[ky])) {
          return false;
        }
      }
      if (object1[ky] === object2[ky]) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  // console.log(`${inspect(actual)}`)
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [object Object] === [object Object]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]`)
  }
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })

//  start assertObjectsEqual function
//  if (eqObjects() is true)
  //  check eqObjects function
  //  compare length -> true
  //  start loop
  //  is Array? no -> ignore isArray()
  //  compare same key same value
  //  return true
  //  console.log('PASS')