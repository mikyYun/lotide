const eqArrays = (first) => {
  // console.log({first})
  if (!first) {
    return false;
  } else {
    return first.length % 2 === 1 ? true : false;
  }
};

const assertArraysEqual = (first, second) => {
  if (eqArrays(first) === true) {
    console.log(`Middle element of ${first} is : ${second}`);
  } else {
    console.log(`Middle elements of ${first} is : ${second}`);
  }
  // return result;
};

// check undefined first 

const middle = (arr) => {
  let result = [];
  let midArr = Math.floor(arr.length / 2);
  // console.log(midArr)
  if (arr.length <= 2) {
    // result.push("HI")
    // console.log(result);
  } else {
    if (eqArrays(arr)) {
      result.push(arr[midArr]);
      console.log("Array length is Odds");
    } else if (!eqArrays(arr)) {
      result.push(arr[midArr - 1]);
      result.push(arr[midArr]);
      // slice
      // console.log(arr.slice(arr[midArr - 2], arr[midArr]));
      console.log("Array length is Even");
    }
    console.log(result);
  }
  return result;

};

// middle([1, 2, 3, 4, 5, 6]);
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// middle([1, 2, 3]);
// middle([1, 2]);
// middle([1]);
// middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]));