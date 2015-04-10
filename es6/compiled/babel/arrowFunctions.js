'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var myLogger = function myLogger(msg) {
    return console.log(msg);
}; //Creates an anonymous function

myLogger('Testing out arrow functions!');

//Working with "this" the "old" way
function Car() {
    var self = this;
    this._seats = 4;

    this.timeout = function () {
        setTimeout(function () {
            console.log(self._seats++);
        }, 1000);
    };
}

//Working with this using arrow functions

var CarWithArrow = (function () {
    function CarWithArrow() {
        _classCallCheck(this, CarWithArrow);

        this._seats = 6;
    }

    _createClass(CarWithArrow, [{
        key: 'timeout',
        value: function timeout() {
            var _this = this;

            setTimeout(function () {
                console.log(_this._seats++);
            }, 1000);
        }
    }]);

    return CarWithArrow;
})();

var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();