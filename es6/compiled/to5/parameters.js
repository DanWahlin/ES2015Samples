"use strict";

var _slice = Array.prototype.slice;
var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Car = (function () {
  var Car = function Car() {};

  _classProps(Car, null, {
    currentYear: {
      writable: true,
      value: function () {
        return new Date().getFullYear();
      }
    },
    setDetails: {
      writable: true,
      value: function (make, model, year) {
        var accessories = _slice.call(arguments, 3);

        if (year === undefined) year = this.currentYear();

        if (model === undefined) model = "No Model";

        if (make === undefined) make = "No Make";

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