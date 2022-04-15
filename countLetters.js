const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀🤢🤢👀Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  let countResult = {};
  for (const letter of sentence) {
    if (countResult[letter]) {
      countResult[letter]++;
    } else {
      countResult[letter] = 1;
    }
  }
  console.log(countResult);
  return countResult;
};
countLetters("LHL");
countLetters(`This is the New TEST SENTENCE`);
countLetters(`counterLetters`);
countLetters("lighthouse in the house");
