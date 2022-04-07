const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected || actual === undefined) {
    console.log(`Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!



const eqObjects = function(object1, object2) {
  // console.log(Object.keys(object1).length)
  // console.log(Object.keys(object2).length)
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  let lengthChecker = keys1.length === keys2.length ? true : false
  // console.log(lengthChecker)
  if (lengthChecker === true) {
    let result;
    for (let ky of keys1) {
      if (Array.isArray(object1[ky]) && Array.isArray(object2[ky])) {
        if (!eqArrays(object1[ky], object2[ky])) {
          return false
        }
      }
      // console.log(keys1)
      // console.log(keys2)
      // console.log(ky)
      // console.log(object1[ky])
      // console.log(object2[ky])
      if (object1[ky] === object2[ky]) {
        // console.log("SAME")
        result = true;
      } else {
        // console.log(false)
        return false
      }
    }
    // console.log(result)
    return result
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const bca = {b: "2", c: "3", a: "1" };
// eqObjects(ab, abc)
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(bca, abc), true); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false