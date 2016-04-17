//Import Car Module
import { Car } from './modules-classes';

function log(msg) {
    document.querySelector('#log').innerHTML += '<br />' + msg;
    console.log(msg);
}

const car = new Car('Chevy','Volt','V4', true);
log('Car engine type: ' + car.engine);
log('Is electric? ' + car.isElectric);
log(car.start());