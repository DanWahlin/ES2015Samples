"use strict";
var values = [9.99, .50];
var oldTotal = values[0],
    oldTax = values[1];
var $__2 = [9.99, .50],
    total = $__2[0],
    tax = $__2[1];
var $__2 = {
  total: 9.99,
  tax: .50
},
    total2 = $__2.total2,
    tax2 = $__2.tax2;
console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);
console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);
var colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];
var $__2 = ['red', 'yellow', 'green'],
    red = $__2[0],
    yellow = $__2[1],
    green = $__2[2];
console.log(("Destructuring colors: " + red + " " + yellow + " " + green));
var $__2 = ['red', 'yellow', 'green'],
    red2 = $__2[0],
    green2 = $__2[2];
console.log(("Destructuring with an ignore: " + red2 + " " + green2));
console.log('\n');
var pets = [{
  name: "Fido",
  type: 'Dog',
  treats: {
    treat1: "Chewie",
    treat2: "Chicken"
  },
  age: 10
}, {
  name: "Maestro",
  type: 'Dog',
  treats: {
    treat1: "Chew Stick",
    treat2: "Turkey Chew"
  },
  age: 5
}];
for (var $__0 = pets[Symbol.iterator](),
    $__1; !($__1 = $__0.next()).done; ) {
  var $__2 = $__1.value,
      n = $__2.name,
      t = $__2.type,
      $__3 = $__2.treats,
      t1 = $__3.treat1,
      t2 = $__3.treat2;
  {
    console.log((n + " is a " + t + " who likes " + t1 + " and " + t2 + " treats"));
  }
}
