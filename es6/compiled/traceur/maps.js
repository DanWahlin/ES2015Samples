"use strict";
var $__9,
    $__10;
var Departments = function() {
  function Departments() {
    this._depts = new Map();
  }
  return ($traceurRuntime.createClass)(Departments, {
    addDepartment: function(key, desc) {
      if (!this._depts.has(key)) {
        this._depts.set(key, desc);
      } else {
        console.log('Duplicate department was blocked: ' + key);
      }
    },
    getDepartment: function(key) {
      return this._depts.get(key);
    },
    removeDepartment: function(key) {
      this._depts.delete(key);
    },
    clearDepartments: function() {
      this._depts.clear();
    },
    getAll: function() {
      return this._depts;
    }
  }, {});
}();
var map = new Map();
map.set('Finance', 'Process bills');
map.set('HR', 'Human Resources and Healthcare');
map.set('HR', 'Human Resources and Healthcare');
console.log('Getting HR: ' + map.get('HR'));
console.log(map.size);
if (map.has('Finance'))
  console.log('Found it!');
map.delete('Finance');
map.clear();
console.log('\n');
var depts = new Departments();
depts.addDepartment('Finance', 'Process bills');
depts.addDepartment('HR', 'Human Resources and Healthcare');
depts.addDepartment('Finance', 'Process the bills');
var all = depts.getAll();
all.forEach(function(val, key) {
  console.log('Found department using forEach ' + key + ': ' + val);
});
console.log('\n');
all.forEach(function(val, key) {
  return console.log(key + ': ' + val);
});
console.log('\n');
var $__4 = true;
var $__5 = false;
var $__6 = undefined;
try {
  for (var $__2 = void 0,
      $__1 = (all)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
    var $__8 = $__2.value,
        key = ($__9 = $__8[Symbol.iterator](), ($__10 = $__9.next()).done ? void 0 : $__10.value),
        val = ($__10 = $__9.next()).done ? void 0 : $__10.value;
    {
      console.log('Found department using for of loop: ' + key + ': ' + val);
    }
  }
} catch ($__7) {
  $__5 = true;
  $__6 = $__7;
} finally {
  try {
    if (!$__4 && $__1.return != null) {
      $__1.return();
    }
  } finally {
    if ($__5) {
      throw $__6;
    }
  }
}
console.log('\nFinding specific HR key : ' + depts.getDepartment('HR'));
depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getAll().size);
