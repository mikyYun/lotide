const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀🤢🤢👀Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  // console.log(result);
  return result;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// eqArrays({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })

const eqObjects = function(object1, object2) {
  // console.log(Object.keys(object1).length)
  // console.log(Object.keys(object2).length)
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  let values1 = Object.values(object1)
  let values2 = Object.values(object2)
  let lengthChecker = () => {
    if (keys1.length === keys2.length) {
      // console.log("same length")
      return true
    } else {
      // console.log("different length")
      return false
    }
  }
  // console.log(lengthChecker)
  let result;
  if (lengthChecker() === true) {
    for (let ky of keys1) {
      // if (Array.isArray(object1[ky]) && Array.isArray(object2[ky])) {
      //   if (!eqArrays(object1[ky], object2[ky])) {
      //     return false
      //   }
      //   return true
      // }
      // console.log(keys1)
      // console.log(keys2)
      // console.log(ky)
      // console.log(object1[ky])
      // console.log(object2[ky])
      if (eqArrays(keys1, keys2) && eqArrays(values1, values2)) {
        // console.log("SAME")
        result = true;
        return true
      } else {
        // console.log(false)
        // console.log("TEST1")
        return false
      }
    }
    // console.log(result)
        // console.log("TEST2")
        return false
  } else {
    result = false
    // console.log(result)
        // console.log("TEST3")
        return false
  }
};
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true); // => true
// eqObjects(ab, ba)
// const abc = { a: "1", b: "2", c: "3" };
// const bca = {b: "2", c: "3", a: "1" };
// eqObjects(ab, abc)
// assertEqual(eqObjects(ab, abc), false); // => false
// assertEqual(eqObjects(bca, abc), true); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
// eqObjects(cd, cd2)


// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false