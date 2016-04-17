//Using WeakSet
var weakset = new WeakSet();
//No size, entries, or values
//can't use forEach (not enumerable), can't mix types
var person1 = { name: 'Fred' },
    person2 = { name: 'Michelle' };

weakset.add(person1);
weakset.add(person2);

if (weakset.has(person1)) console.log('Found person!');
weakset.delete(person2); //Delete single item


//Using WeakMap
var weakmap = new WeakMap();
//No size, entries, or values
//can't use forEach (not enumerable), key must be an object
var person1 = { name: 'Fred' },
    person2 = { name: 'Michelle' },
    key1 = {key: '123'},
    key2 = {key: '321'};

weakmap.set(key1, person1);
weakmap.set(key2, person2);

var person = weakmap.get(key2);
console.log('Map has person key 321: ' + person.name);

if (weakmap.has(key1)) console.log('Found person!');
weakmap.delete(key2); //Delete single item

