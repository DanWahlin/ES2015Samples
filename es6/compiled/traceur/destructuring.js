"use strict";
var $__10,
    $__11,
    $__14,
    $__15,
    $__17,
    $__18;
var values = [9.99, .50];
var oldTotal = values[0],
    oldTax = values[1];
var $__9 = [9.99, .50],
    total = ($__10 = $__9[Symbol.iterator](), ($__11 = $__10.next()).done ? void 0 : $__11.value),
    tax = ($__11 = $__10.next()).done ? void 0 : $__11.value;
var $__12 = {
  total: 9.99,
  tax: .50
},
    total2 = $__12.total2,
    tax2 = $__12.tax2;
console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);
console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);
var colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];
var $__13 = ['red', 'yellow', 'green'],
    red = ($__14 = $__13[Symbol.iterator](), ($__15 = $__14.next()).done ? void 0 : $__15.value),
    yellow = ($__15 = $__14.next()).done ? void 0 : $__15.value,
    green = ($__15 = $__14.next()).done ? void 0 : $__15.value;
console.log(("Destructuring colors: " + red + " " + yellow + " " + green));
var $__16 = ['red', 'yellow', 'green'],
    red2 = ($__17 = $__16[Symbol.iterator](), ($__18 = $__17.next()).done ? void 0 : $__18.value),
    green2 = ($__17.next(), ($__18 = $__17.next()).done ? void 0 : $__18.value);
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
var $__5 = true;
var $__6 = false;
var $__7 = undefined;
try {
  for (var $__3 = void 0,
      $__2 = (pets)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
    var $__19 = $__3.value,
        n = $__19.name,
        t = $__19.type,
        $__20 = $__19.treats,
        t1 = $__20.treat1,
        t2 = $__20.treat2;
    {
      console.log((n + " is a " + t + " who likes " + t1 + " and " + t2 + " treats"));
    }
  }
} catch ($__8) {
  $__6 = true;
  $__7 = $__8;
} finally {
  try {
    if (!$__5 && $__2.return != null) {
      $__2.return();
    }
  } finally {
    if ($__6) {
      throw $__7;
    }
  }
}
