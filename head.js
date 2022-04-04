const assertEqual = (head, expected) => {
  if (head === expected) {
    console.log(`Assertion Passed: $(hd) === $(expected)`);
  } else {
    console.log(`Assertion Failed: $(hd) !== $(expected)`);
  }
};

const head = (arr) => {
  return arr = arr[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([516,7]), 516);
assertEqual(head(["This is a String"]), 5);
assertEqual(head([555]), 5);
assertEqual(head(["11",15,7]), 5);
assertEqual(head([]), 5);
//OUTPUT
// Assertion Passed: $(hd) === $(expected)
// Assertion Passed: $(hd) === $(expected)
// Assertion Passed: $(hd) === $(expected)
// Assertion Failed: $(hd) !== $(expected)
// Assertion Failed: $(hd) !== $(expected)
// Assertion Failed: $(hd) !== $(expected)
// Assertion Failed: $(hd) !== $(expected)