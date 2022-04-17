const letterPositions = function (sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = 1;
      } else {
        results[sentence[i]]++;
      }
    }
  }
  return results;
};

module.exports = letterPositions;