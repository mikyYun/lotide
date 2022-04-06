const assertArraysEqual = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  if (result === true) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${result}`);
  }
  return result;
};

const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  console.log(result);
  return result;
};

const flatten = (arr) => {
  let newArr = [];
  arr.forEach((e, ind) => {
    // console.log(e, ind);
    // console.log(typeof(e));
    if (typeof(e) !== 'number') {
      typeof(e).forEach((element, index) => {
        newArr.push(element);
      });
    } else {
      newArr.push(e);
    }
  });
  console.log(newArr);
  return newArr;
};
flatten([1, 2, [3, 4], 5, [6]]);