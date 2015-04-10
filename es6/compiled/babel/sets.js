'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

//Using Set

var Departments = (function () {
    function Departments() {
        _classCallCheck(this, Departments);

        this._depts = new Set();
    }

    _createClass(Departments, [{
        key: 'addDepartment',
        value: function addDepartment(dept) {
            if (!this._depts.has(dept)) {
                this._depts.add(dept);
            } else {
                console.log('Duplicate department was blocked: ' + dept);
            }
        }
    }, {
        key: 'removeDepartment',
        value: function removeDepartment(dept) {
            this._depts['delete'](dept);
        }
    }, {
        key: 'clearDepartments',
        value: function clearDepartments() {
            this._depts.clear();
        }
    }, {
        key: 'getSet',
        value: function getSet() {
            return this._depts;
        }
    }]);

    return Departments;
})();

//Simple example of Set
var set = new Set();
set.add('HR');
set.add('Finance');
set.add('Finance'); //Duplicate ignored
set.add({ name: 'GIS', desc: 'Mapping' });
console.log(set.size);
if (set.has('Finance')) console.log('Found it!');
set['delete']('Finance'); //Delete single item
set.clear(); //Clear all items

//Using Departments (which wraps a Set)
var depts = new Departments();
depts.addDepartment('HR');
depts.addDepartment('Finance');
depts.addDepartment('Finance');

var allDepts = depts.getSet();

//Iterate through the set
allDepts.forEach(function (dept) {
    console.log('Found department using forEach ' + dept);
});

console.log('\n');
allDepts.forEach(function (dept) {
    return console.log('Found department using forEach ' + 'with arrow function: ' + dept);
});

console.log('\n');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = allDepts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var dept = _step.value;

        console.log('Found department using for of loop: ' + dept);
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

var val = allDepts.values().next().value;
console.log(val);

//Add current set into a new one using value
console.log('\n');
var values = allDepts.values;
var depts2 = new Set(allDepts);
depts2.forEach(function (dept) {
    console.log('Iterating through depts2 values: ' + dept);
});

depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getSet().size);