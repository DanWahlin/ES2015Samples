"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Car = (function () {
    function Car() {
        _classCallCheck(this, Car);
    }

    _createClass(Car, {
        currentYear: {
            value: function currentYear() {
                return new Date().getFullYear();
            }
        },
        setDetails: {

            //The year parameter is a "default parameter"

            value: function setDetails() {
                for (var _len = arguments.length, accessories = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                    accessories[_key - 3] = arguments[_key];
                }

                var make = arguments[0] === undefined ? "No Make" : arguments[0];
                var model = arguments[1] === undefined ? "No Model" : arguments[1];
                var year = arguments[2] === undefined ? this.currentYear() : arguments[2];

                console.log(make + " " + model + " " + year);
                if (accessories) {
                    for (var i = 0; i < accessories.length; i++) {
                        console.log("\n" + accessories[i]);
                    }
                }
            }
        }
    });

    return Car;
})();

var car = new Car();
//Testing default parameters
car.setDetails("Toyota", "Tundra");
car.setDetails();

//Testing rest parameters
car.setDetails("Toyota", "Tundra", 2015, "sunroof", "4X4", "4-door");