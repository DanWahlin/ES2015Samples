//Old Way
"use strict";

var values = [9.99, 0.5];
var oldTotal = values[0], oldTax = values[1];

var _ref = [9.99, 0.5];

var total = _ref[0];
var tax = _ref[1];
var _ref2 = { total: 9.99, tax: 0.5 };
var total2 = _ref2.total2;
var tax2 = _ref2.tax2;

console.log("Destructuring an array.");
console.log("Total: " + total + " Tax: " + tax);

console.log("\nDestructuring an object literal.");
console.log("Total2: " + total2 + " Tax2: " + tax2);

var colors = ["red", "yellow", "green"], redOld = colors[0], yellowOld = colors[1], greenOld = colors[2];

var _ref3 = ["red", "yellow", "green"];

var red = _ref3[0];
var yellow = _ref3[1];
var green = _ref3[2];

console.log("Destructuring colors: " + red + " " + yellow + " " + green);

var _ref4 = ["red", "yellow", "green"];

var red2 = _ref4[0];
var green2 = _ref4[2];

console.log("Destructuring with an ignore: " + red2 + " " + green2);

console.log("\n");
//Iteration and destructuring
var pets = [{
  name: "Fido",
  type: "Dog",
  treats: {
    treat1: "Chewie",
    treat2: "Chicken"
  },
  age: 10
}, {
  name: "Maestro",
  type: "Dog",
  treats: {
    treat1: "Chew Stick",
    treat2: "Turkey Chew"
  },
  age: 5
}];

for (var _iterator = pets[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var _ref5 = _step.value;
  var n = _ref5.name;
  var t = _ref5.type;
  var t1 = _ref5.treats.treat1;
  var t2 = _ref5.treats.treat2;

  console.log("" + n + " is a " + t + " who likes " + t1 + " and " + t2 + " treats");
}