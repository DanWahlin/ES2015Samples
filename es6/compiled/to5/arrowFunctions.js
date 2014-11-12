"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var myLogger = function (msg) {
  return console.log(msg);
}; //Creates an anonymous function

myLogger("Testing out arrow functions!");

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

var CarWithArrow = (function () {
  var CarWithArrow = function CarWithArrow() {
    this._seats = 6;
  };

  _classProps(CarWithArrow, null, {
    timeout: {
      writable: true,
      value: function () {
        var _this = this;

        setTimeout(function () {
          console.log(_this._seats++);
        }, 1000);
      }
    }
  });

  return CarWithArrow;
})();

var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();