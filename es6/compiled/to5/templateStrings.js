"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Car = (function () {
  var Car = function Car(make, model, engine, price) {
    this._make = make;
    this._model = model;
    this._engine = engine;
    this._price = price;
    this._taxRate = 0.08;
  };

  _classProps(Car, null, {
    make: {
      get: function () {
        return this._make;
      }
    },
    model: {
      get: function () {
        return this._model;
      }
    },
    engine: {
      get: function () {
        return this._engine;
      }
    },
    start: {
      writable: true,
      value: function () {
        //Use a template string
        return "" + this.make + " " + this.model + " with a \r\n                " + this.engine + " engine is started!";
      }
    },
    getTotal: {
      writable: true,
      value: function () {
        return "Total cost is: " + ((this._price * this._taxRate) + this._price);
      }
    }
  });

  return Car;
})();

exports.Car = Car;