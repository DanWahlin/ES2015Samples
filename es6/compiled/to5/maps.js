//Using Map
"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Departments = (function () {
  var Departments = function Departments() {
    this._depts = new Map();
  };

  _classProps(Departments, null, {
    addDepartment: {
      writable: true,
      value: function (key, desc) {
        if (!this._depts.has(key)) {
          this._depts.set(key, desc);
        } else {
          console.log("Duplicate department was blocked: " + key);
        }
      }
    },
    getDepartment: {
      writable: true,
      value: function (key) {
        return this._depts.get(key);
      }
    },
    removeDepartment: {
      writable: true,
      value: function (key) {
        this._depts.delete(key);
      }
    },
    clearDepartments: {
      writable: true,
      value: function () {
        this._depts.clear();
      }
    },
    getAll: {
      writable: true,
      value: function () {
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
map.delete("Finance"); //Delete single item
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

for (var _iterator = all[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var _ref = _step.value;
  var key = _ref[0];
  var val = _ref[1];

  console.log("Found department using for of loop: " + key + ": " + val);
}

console.log("\nFinding specific HR key : " + depts.getDepartment("HR"));

depts.clearDepartments();
console.log("\nClearing all departments: Size is now: " + depts.getAll().size);