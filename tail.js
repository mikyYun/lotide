const assertEqual = function(test) {
  let result = [];
  for (let i = 1; i < test.length; i ++) {
    result.push(test[i]);
  }
  console.log(result);
};
assertEqual([1, 2, 3, 4, 5, 6, 7]);
assertEqual(["HI", "NEXT", "LAST"]);
assertEqual([1, "string", "number", "who am I"]);