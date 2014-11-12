"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Auto = (function () {
  var Auto = function Auto(make, model, engine) {
    this._make = make;
    this._model = model;
    this._engine = engine;
  };

  _classProps(Auto, null, {
    make: {
      get: function () {
        return this._make;
      },
      set: function (val) {
        this._make = val;
      }
    },
    model: {
      get: function () {
        return this._model;
      },
      set: function (val) {
        this._model = val;
      }
    },
    engine: {
      get: function () {
        return this._engine;
      },
      set: function (val) {
        this._engine = val;
      }
    }
  });

  return Auto;
})();

var Car = (function (Auto) {
  var Car = function Car(make, model, engine, isElectric) {
    Auto.call(this, make, model, engine);
    this._isElectric = isElectric;
  };

  _extends(Car, Auto);

  _classProps(Car, null, {
    isElectric: {
      get: function () {
        return this._isElectric;
      }
    },
    start: {
      writable: true,
      value: function () {
        //Use a template string
        if (this._isElectric) {
          return this.make + " " + this.model + " with a " + this.engine + " (electric) engine is started!";
        }
        return this.make + " " + this.model + " with a " + this.engine + " engine is started!";
      }
    }
  });

  return Car;
})(Auto);

exports.Car = Car;