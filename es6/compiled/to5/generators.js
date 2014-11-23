"use strict";

var numberGenerator = regeneratorRuntime.mark(function numberGenerator() {
  return regeneratorRuntime.wrap(function numberGenerator$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 1;

      case 2:
        context$1$0.next = 4;
        return 2;

      case 4:
        context$1$0.next = 6;
        return 3;

      case 6:
      case "end": return context$1$0.stop();
    }
  }, numberGenerator, this);
});

var infiniteNumbers = regeneratorRuntime.mark( //3

function infiniteNumbers() {
  var i;
  return regeneratorRuntime.wrap(function infiniteNumbers$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0: i = 0;
      case 1:

        if (!true) {
          context$1$0.next = 7;
          break;
        }
        context$1$0.next = 4;
        return i;

      case 4:
        i++;
        context$1$0.next = 1;
        break;

      case 7:
      case "end": return context$1$0.stop();
    }
  }, infiniteNumbers, this);
});

var take = regeneratorRuntime.mark(function take(coll, number) {
  var i, _iterator, _step;
  return regeneratorRuntime.wrap(function take$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;
        _iterator = coll[Symbol.iterator]();

      case 2:

        if ((_step = _iterator.next()).done) {
          context$1$0.next = 10;
          break;
        }
        i = _step.value;

        if (!(number === i++)) {
          context$1$0.next = 6;
          break;
        }
        return context$1$0.abrupt("break", 10);

      case 6:
        context$1$0.next = 8;
        return i;

      case 8:
        context$1$0.next = 2;
        break;

      case 10:
      case "end": return context$1$0.stop();
    }
  }, take, this);
});

var number = numberGenerator();
console.log(number.next().value); //1
console.log(number.next().value); //2
console.log(number.next().value);
for (var _iterator2 = take(infiniteNumbers(), 100)[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
  var number = _step2.value;

  console.log(number);
}