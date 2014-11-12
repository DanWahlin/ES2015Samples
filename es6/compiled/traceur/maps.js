"use strict";
var Departments = function Departments() {
  this._depts = new Map();
};
($traceurRuntime.createClass)(Departments, {
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
all.forEach((function(val, key) {
  return console.log(key + ': ' + val);
}));
console.log('\n');
for (var $__1 = all[Symbol.iterator](),
    $__2; !($__2 = $__1.next()).done; ) {
  try {
    throw undefined;
  } catch (val) {
    try {
      throw undefined;
    } catch (key) {
      try {
        throw undefined;
      } catch ($__3) {
        {
          {
            $__3 = $__2.value;
            key = $__3[0];
            val = $__3[1];
          }
          {
            console.log('Found department using for of loop: ' + key + ': ' + val);
          }
        }
      }
    }
  }
}
console.log('\nFinding specific HR key : ' + depts.getDepartment('HR'));
depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getAll().size);
