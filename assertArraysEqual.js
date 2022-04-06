const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
  console.log(actual, expected);
};

const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  }
  return result;
};

assertArraysEqual([1, 2, 3],[1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual("HI", "HI");
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);