class Car {
    constructor(make, model, engine, price) {
        this._make = make;
        this._model = model;
        this._engine = engine;
        this._price = price;
        this._taxRate = .08;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get engine() {
        return this._engine;
    }
    
    start() {
        //Use a template string
        return `${this.make} ${this.model} with a 
                ${this.engine} engine is started!`;
    }

    getTotal() {
        return `Total cost is: ${(this._price * this._taxRate) + 
                this._price}`;
    }
}

function log(msg) {
    document.querySelector('#log').innerHTML += '<br />' + msg;
    console.log(msg);
}

const car = new Car('Chevy','Malibu','V6', 30000);
log('Car engine type: ' + car.engine);
log(car.start());
log(car.getTotal());

