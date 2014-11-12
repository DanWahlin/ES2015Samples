//Using Set
"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Departments = (function () {
  var Departments = function Departments() {
    this._depts = new Set();
  };

  _classProps(Departments, null, {
    addDepartment: {
      writable: true,
      value: function (dept) {
        if (!this._depts.has(dept)) {
          this._depts.add(dept);
        } else {
          console.log("Duplicate department was blocked: " + dept);
        }
      }
    },
    removeDepartment: {
      writable: true,
      value: function (dept) {
        this._depts.delete(dept);
      }
    },
    clearDepartments: {
      writable: true,
      value: function () {
        this._depts.clear();
      }
    },
    getSet: {
      writable: true,
      value: function () {
        return this._depts;
      }
    }
  });

  return Departments;
})();

//Simple example of Set
var set = new Set();
set.add("HR");
set.add("Finance");
set.add("Finance"); //Duplicate ignored
set.add({ name: "GIS", desc: "Mapping" });
console.log(set.size);
if (set.has("Finance")) console.log("Found it!");
set.delete("Finance"); //Delete single item
set.clear(); //Clear all items

//Using Departments (which wraps a Set)
var depts = new Departments();
depts.addDepartment("HR");
depts.addDepartment("Finance");
depts.addDepartment("Finance");

var allDepts = depts.getSet();

//Iterate through the set
allDepts.forEach(function (dept) {
  console.log("Found department using forEach " + dept);
});

console.log("\n");
allDepts.forEach(function (dept) {
  return console.log("Found department using forEach " + "with arrow function: " + dept);
});

console.log("\n");

for (var _iterator = allDepts[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var dept = _step.value;

  console.log("Found department using for of loop: " + dept);
}

var val = allDepts.values().next().value;
console.log(val);

//Add current set into a new one using value
console.log("\n");
var values = allDepts.values;
var depts2 = new Set(allDepts);
depts2.forEach(function (dept) {
  console.log("Iterating through depts2 values: " + dept);
});

depts.clearDepartments();
console.log("\nClearing all departments: Size is now: " + depts.getSet().size);