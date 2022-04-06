const eqArrays = (first, second) => {
  let result = JSON.stringify(first) === JSON.stringify(second);
  // console.log(result);
  return result;
};


const assertArraysEqual = (first, second) => {
  // let isEqual = JSON.stringify(first) === JSON.stringify(second);
  if (eqArrays(first, second)) {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${eqArrays(first, second)}`);
  } else {
    console.log(`Two arrays(${first} and ${second}) are equal? : ${eqArrays(first, second)}`);
  }
  
};

// const without = (first, second) => {
//   let onlyItem = [];
//   if (!assertArraysEqual(first, second) && first.length < second.length) {
//     for (let i = 0; i < first.length; i ++) {
//       if (first[i] !== second[i]) {
//         onlyItem.push(first[i]);
//         // console.log(onlyItem);
//       }
//     }
//   } else if (!assertArraysEqual(first, second) && first.length <= second.length) {
//     for (let i = 0; i < second.length; i ++) {
//       if (first[i] !== second[i]) {
//         onlyItem.push(second[i]);
//         // console.log(onlyItem);
//       }
//     }
//     // console.log("HI");
//   }
//   console.log(onlyItem);
//   return onlyItem;
// };
// second without
const without = (first, second) => {
  const onlyItem = first.filter(el => !second.includes(el));
  console.log(onlyItem);
  return onlyItem;
};

without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]);
without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]);
without([1, 2, "3", "4", 6, 4, 3], [1, 2, "3", "4", 6, 4, 3]);
assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without([1, 2, "3", "4", 6, 4, 3], [1, 2, "3", "4", 6, 4, 3]));