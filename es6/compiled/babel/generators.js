"use strict";

var numberGenerator = regeneratorRuntime.mark( //Simple generator that returns 3 items on demand
function numberGenerator() {
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
			case "end":
				return context$1$0.stop();
		}
	}, numberGenerator, this);
});
var infiniteNumbers = regeneratorRuntime.mark( //{value: undefined, done: true}

//Create a generator that returns infinite numbers
function infiniteNumbers() {
	var i;
	return regeneratorRuntime.wrap(function infiniteNumbers$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				i = 0;

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
			case "end":
				return context$1$0.stop();
		}
	}, infiniteNumbers, this);
});
var take = regeneratorRuntime.mark(

//Create a generator that can take a specific amount from a collection
function take(coll, number) {
	var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step;

	return regeneratorRuntime.wrap(function take$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				i = 0;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 4;
				_iterator = coll[Symbol.iterator]();

			case 6:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 15;
					break;
				}

				i = _step.value;

				if (!(number === i++)) {
					context$1$0.next = 10;
					break;
				}

				return context$1$0.abrupt("return");

			case 10:
				context$1$0.next = 12;
				return i;

			case 12:
				_iteratorNormalCompletion = true;
				context$1$0.next = 6;
				break;

			case 15:
				context$1$0.next = 21;
				break;

			case 17:
				context$1$0.prev = 17;
				context$1$0.t0 = context$1$0["catch"](4);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 21:
				context$1$0.prev = 21;
				context$1$0.prev = 22;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 24:
				context$1$0.prev = 24;

				if (!_didIteratorError) {
					context$1$0.next = 27;
					break;
				}

				throw _iteratorError;

			case 27:
				return context$1$0.finish(24);

			case 28:
				return context$1$0.finish(21);

			case 29:
			case "end":
				return context$1$0.stop();
		}
	}, take, this, [[4, 17, 21, 29], [22,, 24, 28]]);
});

var number = numberGenerator();
console.log(number.next()); //{value: 1, done: false}
console.log(number.next()); //{value: 2, done: false}
console.log(number.next()); //{value: 3, done: true}
console.log(number.next());

//Use the generators to grab 100 numbers
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = take(infiniteNumbers(), 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var number = _step2.value;

		console.log(number);
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
			_iterator2["return"]();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}