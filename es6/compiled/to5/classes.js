"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var BaseLog = (function () {
  var BaseLog = function BaseLog() {
    this.logName = "Log1";
  };

  _classProps(BaseLog, null, {
    log: {
      writable: true,
      value: function (msg) {
        console.log(this.logName + ": " + msg);
      }
    }
  });

  return BaseLog;
})();

var Logger = (function (BaseLog) {
  var Logger = function Logger(logName) {
    BaseLog.call(this, logName);
  };

  _extends(Logger, BaseLog);

  _classProps(Logger, null, {
    writeLine: {
      writable: true,
      value: function (msg) {
        BaseLog.prototype.log.call(this, msg + "\r\n");
      }
    }
  });

  return Logger;
})(BaseLog);