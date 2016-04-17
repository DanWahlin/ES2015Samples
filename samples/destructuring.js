//Old Way
var values = [9.99, .50];
var oldTotal = values[0],
    oldTax = values[1];

//New Way (Destructuring)
var [total, tax] = [9.99, .50];
var {total2, tax2} = {total:9.99, tax:.50};

console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);

console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);

var colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];

var [red, yellow, green] = ['red', 'yellow', 'green'];
console.log(`Destructuring colors: ${red} ${yellow} ${green}`);

var [red2, , green2] = ['red', 'yellow', 'green'];
console.log(`Destructuring with an ignore: ${red2} ${green2}`);

console.log('\n');
//Iteration and destructuring
var pets = [
  {
      name: "Fido",
      type: 'Dog',
      treats: {
          treat1: "Chewie",
          treat2: "Chicken"
      },
      age: 10
  },
  {
      name: "Maestro",
      type: 'Dog',
      treats: {
          treat1: "Chew Stick",
          treat2: "Turkey Chew"
      },
      age: 5
  }
];

//Here's the destructuring breakdown:
//name maps to an n variable
//type maps to a t variables
//treats maps treat 1 to t1 and treat2 to t2
for (var {name: n, type: t, treats: { treat1: t1, treat2: t2 } } of pets) {
  console.log(`${n} is a ${t} who likes ${t1} and ${t2} treats`);
}