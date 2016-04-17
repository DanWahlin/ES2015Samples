//Using Map
class Departments {

    constructor() {
        this._depts = new Map();
    }

    addDepartment(key, desc) {
        if (!this._depts.has(key)) {
            this._depts.set(key, desc);
        }
        else {
            console.log('Duplicate department was blocked: ' + key);
        }
    }

    getDepartment(key) {
        return this._depts.get(key);
    }

    removeDepartment(key) {
        this._depts.delete(key);
    }

    clearDepartments() {
        this._depts.clear();
    }

    getAll() {
        return this._depts;
    }
}

//Simple example of Map
var map = new Map();
map.set('Finance','Process bills');
map.set('HR', 'Human Resources and Healthcare');
map.set('HR', 'Human Resources and Healthcare'); //Duplicate ignored
console.log('Getting HR: ' + map.get('HR'));
console.log(map.size);

if (map.has('Finance')) console.log('Found it!');
map.delete('Finance'); //Delete single item
map.clear(); //Clear all items

console.log('\n');
//No duplicate values allowed due to using Set
var depts = new Departments();
depts.addDepartment('Finance','Process bills');
depts.addDepartment('HR', 'Human Resources and Healthcare');
depts.addDepartment('Finance', 'Process the bills');

let all = depts.getAll();

//Iterate through the set
all.forEach(function(val, key) {
    console.log('Found department using forEach ' + key + ': ' + val);
});

console.log('\n');
all.forEach((val, key) => console.log(key + ': ' + val));

console.log('\n');
for (let [key,val] of all) {
    console.log('Found department using for of loop: ' + key + ': ' + val);
}

console.log('\nFinding specific HR key : ' + depts.getDepartment('HR'));

depts.clearDepartments();
console.log('\nClearing all departments: Size is now: ' + depts.getAll().size);

