//Old Way
'use strict';

var values = [9.99, 0.5];
var oldTotal = values[0],
    oldTax = values[1];

//New Way (Destructuring)
var total = 9.99;
var tax = 0.5;
var _total$tax = { total: 9.99, tax: 0.5 };
var total2 = _total$tax.total2;
var tax2 = _total$tax.tax2;

console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);

console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);

var colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];

var red = 'red';
var yellow = 'yellow';
var green = 'green';

console.log('Destructuring colors: ' + red + ' ' + yellow + ' ' + green);

var _ref = ['red', 'yellow', 'green'];
var red2 = _ref[0];
var green2 = _ref[2];

console.log('Destructuring with an ignore: ' + red2 + ' ' + green2);

console.log('\n');
//Iteration and destructuring
var pets = [{
    name: 'Fido',
    type: 'Dog',
    treats: {
        treat1: 'Chewie',
        treat2: 'Chicken'
    },
    age: 10
}, {
    name: 'Maestro',
    type: 'Dog',
    treats: {
        treat1: 'Chew Stick',
        treat2: 'Turkey Chew'
    },
    age: 5
}];

//Here's the destructuring breakdown:
//name maps to an n variable
//type maps to a t variables
//treats maps treat 1 to t1 and treat2 to t2
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = pets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _step.value;
        var n = _step$value.name;
        var t = _step$value.type;
        var _step$value$treats = _step$value.treats;
        var t1 = _step$value$treats.treat1;
        var t2 = _step$value$treats.treat2;

        console.log('' + n + ' is a ' + t + ' who likes ' + t1 + ' and ' + t2 + ' treats');
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}