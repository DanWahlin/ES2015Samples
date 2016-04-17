'use strict';

System.register([], function (_export, _context) {
    var _createClass, Auto, Car;

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            Auto = function () {
                function Auto(make, model, engine) {
                    _classCallCheck(this, Auto);

                    this._make = make;
                    this._model = model;
                    this._engine = engine;
                }

                _createClass(Auto, [{
                    key: 'make',
                    get: function get() {
                        return this._make;
                    },
                    set: function set(val) {
                        this._make = val;
                    }
                }, {
                    key: 'model',
                    get: function get() {
                        return this._model;
                    },
                    set: function set(val) {
                        this._model = val;
                    }
                }, {
                    key: 'engine',
                    get: function get() {
                        return this._engine;
                    },
                    set: function set(val) {
                        this._engine = val;
                    }
                }]);

                return Auto;
            }();

            _export('Car', Car = function (_Auto) {
                _inherits(Car, _Auto);

                function Car(make, model, engine, isElectric) {
                    _classCallCheck(this, Car);

                    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Car).call(this, make, model, engine));

                    _this._isElectric = isElectric;
                    return _this;
                }

                _createClass(Car, [{
                    key: 'start',
                    value: function start() {
                        //Use a template string
                        if (this._isElectric) {
                            return this.make + ' ' + this.model + ' with a ' + this.engine + ' (electric) engine is started!';
                        }
                        return this.make + ' ' + this.model + ' with a ' + this.engine + ' engine is started!';
                    }
                }, {
                    key: 'isElectric',
                    get: function get() {
                        return this._isElectric;
                    }
                }]);

                return Car;
            }(Auto));

            _export('Car', Car);
        }
    };
});
//# sourceMappingURL=modules-classes.js.map
