const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
  console.log(actual, expected);
};

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};
// eqArrays([1, 2, 3],[1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
// eqArrays("HI", "HI");
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])
 // => false
eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false