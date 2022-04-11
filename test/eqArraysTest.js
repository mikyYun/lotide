const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')


// console.log(eqArrays([1, 2, 3],[1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// console.log(eqArrays("HI", "HI"));
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false


assertEqual(eqArrays([1, 2, 3],[1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3],[1, 2, 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays("HI", "HI"), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[[2, 3], [4]], [[2, 3], 4]]), false) // => false