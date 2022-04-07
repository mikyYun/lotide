const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`👍👍👍👍Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`👀🤢🤢👀Assertion Failed:  ${first} !== ${second}`);
  }
};

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};

const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here


  for (let i = 0; i < sentence.length; i ++) {
    // console.log(sentence[i])
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};
letterPositions("hello");
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["l"], [2]);
letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, '', 18]);