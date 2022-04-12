const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (typeof item === 'number') {
    
      results.push(Number(item.toString()[0]))
    } else {
      results.push(callback(item));
    }
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const secondWords = ["Hi", "First Letter", "let's find", 123456, "9Test"];
map(secondWords, (secondWord) => secondWord[0])
// map(words, (word) => word[0])
module.exports = map