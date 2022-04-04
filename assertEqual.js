const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: $(actual) === $(expected)`);
  } else {
    console.log(`Assertion Failed:  $(actual) !== $(expected)`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("50", 50);
assertEqual("11", "11");
assertEqual("11", "33");
