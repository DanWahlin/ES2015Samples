//Using Set
class Departments {

    constructor() {
        this._depts = new Set();
    }

    addDepartment(dept) {
        if (!this._depts.has(dept)) {
            this._depts.add(dept);
        }
        else {
            console.log('Duplicate department was blocked: ' + dept);
        }
    }

    removeDepartment(dept) {
        this._depts.delete(dept);
    }

    clearDepartments() {
        this._depts.clear();
    }

    getSet() {
        return this._depts;
    }
}

//Simple example of Set
var set = new Set();
set.add('HR');
set.add('Finance');
set.add('Finance'); //Duplicate ignored
set.add({name: 'GIS', desc: 'Mapping'});
console.log(set.size);
if (set.has('Finance')) console.log('Found it!');
set.delete('Finance'); //Delete single item
set.clear(); //Clear all items


//Using Departments (which wraps a Set)
var depts = new Departments();
depts.addDepartment('HR');
depts.addDepartment('Finance');
depts.addDepartment('Finance');

let allDepts = depts.getSet();

//Iterate through the set
allDepts.forEach(function(dept) {
    console.log('Found department using forEach ' + dept);
});

console.log('\n');
allDepts.forEach(dept => console.log('Found department using forEach ' + 
                                'with arrow function: ' + dept));

console.log('\n');
for (let dept of allDepts) {
    console.log('Found department using for of loop: ' + dept);
}

let val = allDepts.values().next().value;
console.log(val);


//Add current set into a new one using value
console.log('\n');
var values = allDepts.values;
var depts2 = new Set(allDepts);
depts2.forEach(function(dept) {
    console.log('Iterating through depts2 values: ' + dept);
});

depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getSet().size);