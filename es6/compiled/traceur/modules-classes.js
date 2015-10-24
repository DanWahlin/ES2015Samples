"use strict";
var Auto = function() {
  function Auto(make, model, engine) {
    this._make = make;
    this._model = model;
    this._engine = engine;
  }
  return ($traceurRuntime.createClass)(Auto, {
    get make() {
      return this._make;
    },
    set make(val) {
      this._make = val;
    },
    get model() {
      return this._model;
    },
    set model(val) {
      this._model = val;
    },
    get engine() {
      return this._engine;
    },
    set engine(val) {
      this._engine = val;
    }
  }, {});
}();
var Car = function($__super) {
  function Car(make, model, engine, isElectric) {
    $traceurRuntime.superConstructor(Car).call(this, make, model, engine);
    this._isElectric = isElectric;
  }
  return ($traceurRuntime.createClass)(Car, {
    get isElectric() {
      return this._isElectric;
    },
    start: function() {
      if (this._isElectric) {
        return this.make + ' ' + this.model + ' with a ' + this.engine + ' (electric) engine is started!';
      }
      return this.make + ' ' + this.model + ' with a ' + this.engine + ' engine is started!';
    }
  }, {}, $__super);
}(Auto);
Object.defineProperties(module.exports, {
  Car: {get: function() {
      return Car;
    }},
  __esModule: {value: true}
});
