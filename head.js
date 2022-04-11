const assertEqual = (head, expected) => {

  if (head === expected) {
    console.log(head);
  } else {
    console.log(`Value of head is not expected`);
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
assertEqual(head(["11",15,7]), '11');
assertEqual(head([]), 5);
