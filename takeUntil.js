const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  }
  return result;
};


const takeUntil = function(array, callback) {
  // ...
  let result = []
  for (let i = 0; i < array.length; i ++) {
  //   if (callback(array[i])) {
  //     console.log(array[i])
  //     // process.exit()
  //   }
  //   return i
  // console.log(callback(array[i]))
    if (callback(array[i])) {
      // console.log(array[i])
      return result
    }
    result.push(array[i])

  };
  // return result;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1, [ "I've", 'been', 'to', 'Hollywood' ])