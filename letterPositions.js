// const assertArraysEqual = (first, second) => {
//   let result = JSON.stringify(first) === JSON.stringify(second);
//   if (result === true) {
//     console.log(`👍👍👍👍Assertion Passed: ${first} === ${second}`);
//   } else {
//     console.log(`👀🤢🤢👀Assertion Failed:  ${first} !== ${second}`);
//   }
// };

// const eqArrays = (first, second) => {
//   let result = JSON.stringify(first) === JSON.stringify(second);
//   console.log(result);
//   return result;
// };

const letterPositions = function (sentence) {
  let results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = 1;
      } else {
        results[sentence[i]]++;
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;