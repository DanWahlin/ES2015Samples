class Auto {
    constructor(make, model, engine) {
        this._make = make;
        this._model = model;
        this._engine = engine;
    }

    get make() {
        return this._make;
    }

    set make(val) {
        this._make = val;
    }

    get model() {
        return this._model;
    }

    set model(val) {
        this._model = val;
    }

    get engine() {
        return this._engine;
    }

    set engine(val) {
        this._engine = val;
    }
}

export class Car extends Auto {

    constructor(make, model, engine, isElectric) {
        super(make, model, engine);
        this._isElectric = isElectric;
    }

    get isElectric() {
        return this._isElectric;
    }
    
    start() {
        //Use a template string
        if (this._isElectric) {
            return this.make + ' ' + this.model + ' with a ' + this.engine + ' (electric) engine is started!';
        }
        return this.make + ' ' + this.model + ' with a ' + this.engine + ' engine is started!';
    }
}