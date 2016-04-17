'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
    function Car(make, model, engine, price) {
        _classCallCheck(this, Car);

        this._make = make;
        this._model = model;
        this._engine = engine;
        this._price = price;
        this._taxRate = .08;
    }

    _createClass(Car, [{
        key: 'start',
        value: function start() {
            //Use a template string
            return this.make + ' ' + this.model + ' with a \n                ' + this.engine + ' engine is started!';
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            return 'Total cost is: ' + (this._price * this._taxRate + this._price);
        }
    }, {
        key: 'make',
        get: function get() {
            return this._make;
        }
    }, {
        key: 'model',
        get: function get() {
            return this._model;
        }
    }, {
        key: 'engine',
        get: function get() {
            return this._engine;
        }
    }]);

    return Car;
}();

function log(msg) {
    document.querySelector('#log').innerHTML += '<br />' + msg;
    console.log(msg);
}

var car = new Car('Chevy', 'Malibu', 'V6', 30000);
log('Car engine type: ' + car.engine);
log(car.start());
log(car.getTotal());
//# sourceMappingURL=templateStrings.js.map
