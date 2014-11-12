"use strict";
var Departments = function Departments() {
  this._depts = new Set();
};
($traceurRuntime.createClass)(Departments, {
  addDepartment: function(dept) {
    if (!this._depts.has(dept)) {
      this._depts.add(dept);
    } else {
      console.log('Duplicate department was blocked: ' + dept);
    }
  },
  removeDepartment: function(dept) {
    this._depts.delete(dept);
  },
  clearDepartments: function() {
    this._depts.clear();
  },
  getSet: function() {
    return this._depts;
  }
}, {});
var set = new Set();
set.add('HR');
set.add('Finance');
set.add('Finance');
set.add({
  name: 'GIS',
  desc: 'Mapping'
});
console.log(set.size);
if (set.has('Finance'))
  console.log('Found it!');
set.delete('Finance');
set.clear();
var depts = new Departments();
depts.addDepartment('HR');
depts.addDepartment('Finance');
depts.addDepartment('Finance');
var allDepts = depts.getSet();
allDepts.forEach(function(dept) {
  console.log('Found department using forEach ' + dept);
});
console.log('\n');
allDepts.forEach((function(dept) {
  return console.log('Found department using forEach ' + 'with arrow function: ' + dept);
}));
console.log('\n');
for (var $__1 = allDepts[Symbol.iterator](),
    $__2; !($__2 = $__1.next()).done; ) {
  try {
    throw undefined;
  } catch (dept) {
    {
      dept = $__2.value;
      {
        console.log('Found department using for of loop: ' + dept);
      }
    }
  }
}
var val = allDepts.values().next().value;
console.log(val);
console.log('\n');
var values = allDepts.values;
var depts2 = new Set(allDepts);
depts2.forEach(function(dept) {
  console.log('Iterating through depts2 values: ' + dept);
});
depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getSet().size);
