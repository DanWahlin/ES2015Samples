"use strict";
var BaseLog = function() {
  function BaseLog() {
    this.logName = 'Log1';
  }
  return ($traceurRuntime.createClass)(BaseLog, {log: function(msg) {
      console.log(this.logName + ': ' + msg);
    }}, {});
}();
var Logger = function($__super) {
  function Logger(logName) {
    $traceurRuntime.superConstructor(Logger).call(this, logName);
  }
  return ($traceurRuntime.createClass)(Logger, {writeLine: function(msg) {
      $traceurRuntime.superGet(this, Logger.prototype, "log").call(this, msg + '\r\n');
    }}, {}, $__super);
}(BaseLog);
