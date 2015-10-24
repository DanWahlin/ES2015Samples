"use strict";
var Departments = function() {
  function Departments() {
    this._depts = new Set();
  }
  return ($traceurRuntime.createClass)(Departments, {
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
}();
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
allDepts.forEach(function(dept) {
  return console.log('Found department using forEach ' + 'with arrow function: ' + dept);
});
console.log('\n');
var $__5 = true;
var $__6 = false;
var $__7 = undefined;
try {
  for (var $__3 = void 0,
      $__2 = (allDepts)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
    var dept = $__3.value;
    {
      console.log('Found department using for of loop: ' + dept);
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
