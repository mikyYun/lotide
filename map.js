const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
