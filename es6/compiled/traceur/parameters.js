"use strict";
var Car = function Car() {};
($traceurRuntime.createClass)(Car, {
  currentYear: function() {
    return new Date().getFullYear();
  },
  setDetails: function() {
    var make = arguments[0] !== (void 0) ? arguments[0] : 'No Make';
    var model = arguments[1] !== (void 0) ? arguments[1] : 'No Model';
    var year = arguments[2] !== (void 0) ? arguments[2] : this.currentYear();
    for (var accessories = [],
        $__1 = 3; $__1 < arguments.length; $__1++)
      accessories[$__1 - 3] = arguments[$__1];
    console.log(make + ' ' + model + ' ' + year);
    if (accessories) {
      for (var i = 0; i < accessories.length; i++) {
        console.log('\n' + accessories[i]);
      }
    }
  }
}, {});
var car = new Car();
car.setDetails('Toyota', 'Tundra');
car.setDetails();
car.setDetails('Toyota', 'Tundra', 2015, 'sunroof', '4X4', '4-door');
