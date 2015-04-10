"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

//Using Map

var Departments = (function () {
    function Departments() {
        _classCallCheck(this, Departments);

        this._depts = new Map();
    }

    _createClass(Departments, {
        addDepartment: {
            value: function addDepartment(key, desc) {
                if (!this._depts.has(key)) {
                    this._depts.set(key, desc);
                } else {
                    console.log("Duplicate department was blocked: " + key);
                }
            }
        },
        getDepartment: {
            value: function getDepartment(key) {
                return this._depts.get(key);
            }
        },
        removeDepartment: {
            value: function removeDepartment(key) {
                this._depts["delete"](key);
            }
        },
        clearDepartments: {
            value: function clearDepartments() {
                this._depts.clear();
            }
        },
        getAll: {
            value: function getAll() {
                return this._depts;
            }
        }
    });

    return Departments;
})();

//Simple example of Map
var map = new Map();
map.set("Finance", "Process bills");
map.set("HR", "Human Resources and Healthcare");
map.set("HR", "Human Resources and Healthcare"); //Duplicate ignored
console.log("Getting HR: " + map.get("HR"));
console.log(map.size);

if (map.has("Finance")) console.log("Found it!");
map["delete"]("Finance"); //Delete single item
map.clear(); //Clear all items

console.log("\n");
//No duplicate values allowed due to using Set
var depts = new Departments();
depts.addDepartment("Finance", "Process bills");
depts.addDepartment("HR", "Human Resources and Healthcare");
depts.addDepartment("Finance", "Process the bills");

var all = depts.getAll();

//Iterate through the set
all.forEach(function (val, key) {
    console.log("Found department using forEach " + key + ": " + val);
});

console.log("\n");
all.forEach(function (val, key) {
    return console.log(key + ": " + val);
});

console.log("\n");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = all[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var val = _step$value[1];

        console.log("Found department using for of loop: " + key + ": " + val);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log("\nFinding specific HR key : " + depts.getDepartment("HR"));

depts.clearDepartments();
console.log("\nClearing all departments: Size is now: " + depts.getAll().size);