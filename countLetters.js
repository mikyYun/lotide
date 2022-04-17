const countLetters = (sentence) => {
  let countResult = {};
  for (const letter of sentence) {
    if (countResult[letter]) {
      countResult[letter]++;
    } else {
      countResult[letter] = 1;
    }
  }
  return countResult;
};

module.exports = countLetters;