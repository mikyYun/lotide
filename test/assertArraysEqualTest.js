const assertEqual = require('../assertEqual')
// hah
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3],[1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual("HI", "HI");
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);