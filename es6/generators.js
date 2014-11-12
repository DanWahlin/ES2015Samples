function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

var number = numberGenerator();
console.log(number.next().value); //1
console.log(number.next().value); //2
console.log(number.next().value); //3