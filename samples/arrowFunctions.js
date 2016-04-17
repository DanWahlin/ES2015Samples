var myLogger = msg => console.log(msg); //Creates an anonymous function

myLogger('Testing out arrow functions!');

//Working with "this" the "old" way
function Car() {
    var self = this;
    this._seats = 4; 

    this.timeout = function() {
        setTimeout(function() {
            console.log(self._seats++);
        }, 1000);
    }
}

//Working with this using arrow functions
class CarWithArrow {

    constructor() {
        this._seats = 6;
    }

    timeout() {
        setTimeout(() => {
            console.log(this._seats++);
        }, 1000);
    }
}

var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();