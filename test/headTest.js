const head = require('../head.js')
const assertEqual = require('../assertEqual')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([516,7]), 516);
assertEqual(head(["This is a String"]), 5);
assertEqual(head([555]), 5);
assertEqual(head(["11",15,7]), 5);
assertEqual(head(["11",15,7]), '11');
assertEqual(head([]), 5);