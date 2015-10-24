"use strict";
var Car = function() {
  function Car(make, model, engine, price) {
    this._make = make;
    this._model = model;
    this._engine = engine;
    this._price = price;
    this._taxRate = .08;
  }
  return ($traceurRuntime.createClass)(Car, {
    get make() {
      return this._make;
    },
    get model() {
      return this._model;
    },
    get engine() {
      return this._engine;
    },
    start: function() {
      return (this.make + " " + this.model + " with a \n                " + this.engine + " engine is started!");
    },
    getTotal: function() {
      return ("Total cost is: " + ((this._price * this._taxRate) + this._price));
    }
  }, {});
}();
Object.defineProperties(module.exports, {
  Car: {get: function() {
      return Car;
    }},
  __esModule: {value: true}
});
