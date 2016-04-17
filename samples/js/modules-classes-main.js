'use strict';

System.register(['./modules-classes'], function (_export, _context) {
    var Car, car;


    function log(msg) {
        document.querySelector('#log').innerHTML += '<br />' + msg;
        console.log(msg);
    } //Import Car Module


    return {
        setters: [function (_modulesClasses) {
            Car = _modulesClasses.Car;
        }],
        execute: function () {
            car = new Car('Chevy', 'Volt', 'V4', true);

            log('Car engine type: ' + car.engine);
            log('Is electric? ' + car.isElectric);
            log(car.start());
        }
    };
});
//# sourceMappingURL=modules-classes-main.js.map
