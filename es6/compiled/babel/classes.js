"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseLog = (function () {
    function BaseLog() {
        _classCallCheck(this, BaseLog);

        this.logName = "Log1";
    }

    _createClass(BaseLog, {
        log: {
            value: function log(msg) {
                console.log(this.logName + ": " + msg);
            }
        }
    });

    return BaseLog;
})();

var Logger = (function (_BaseLog) {
    function Logger(logName) {
        _classCallCheck(this, Logger);

        _get(Object.getPrototypeOf(Logger.prototype), "constructor", this).call(this, logName);
    }

    _inherits(Logger, _BaseLog);

    _createClass(Logger, {
        writeLine: {
            value: function writeLine(msg) {
                _get(Object.getPrototypeOf(Logger.prototype), "log", this).call(this, msg + "\r\n");
            }
        }
    });

    return Logger;
})(BaseLog);