"use strict";
var BaseLog = function BaseLog() {
  this.logName = 'Log1';
};
($traceurRuntime.createClass)(BaseLog, {log: function(msg) {
    console.log(this.logName + ': ' + msg);
  }}, {});
var Logger = function Logger(logName) {
  $traceurRuntime.superCall(this, $Logger.prototype, "constructor", [logName]);
};
var $Logger = Logger;
($traceurRuntime.createClass)(Logger, {writeLine: function(msg) {
    $traceurRuntime.superCall(this, $Logger.prototype, "log", [msg + '\r\n']);
  }}, {}, BaseLog);
