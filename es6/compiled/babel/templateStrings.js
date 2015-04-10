"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Car = exports.Car = (function () {
    function Car(make, model, engine, price) {
        _classCallCheck(this, Car);

        this._make = make;
        this._model = model;
        this._engine = engine;
        this._price = price;
        this._taxRate = 0.08;
    }

    _createClass(Car, {
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
            value: function start() {
                //Use a template string
                return "" + this.make + " " + this.model + " with a \n                " + this.engine + " engine is started!";
            }
        },
        getTotal: {
            value: function getTotal() {
                return "Total cost is: " + (this._price * this._taxRate + this._price);
            }
        }
    });

    return Car;
})();