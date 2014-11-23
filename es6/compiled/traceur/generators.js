"use strict";
var $__2 = $traceurRuntime.initGeneratorFunction(numberGenerator),
    $__3 = $traceurRuntime.initGeneratorFunction(infiniteNumbers),
    $__4 = $traceurRuntime.initGeneratorFunction(take);
function numberGenerator() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return 1;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return 2;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          $ctx.state = 10;
          return 3;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
}
var number = numberGenerator();
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
function infiniteNumbers() {
  var i;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          i = 0;
          $ctx.state = 7;
          break;
        case 7:
          $ctx.state = (true) ? 1 : -2;
          break;
        case 4:
          i++;
          $ctx.state = 7;
          break;
        case 1:
          $ctx.state = 2;
          return i;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        default:
          return $ctx.end();
      }
  }, $__3, this);
}
function take(coll, number) {
  var i,
      $__0,
      $__1;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          i = 0;
          $ctx.state = 13;
          break;
        case 13:
          $__0 = coll[Symbol.iterator]();
          $ctx.state = 7;
          break;
        case 7:
          $ctx.state = (!($__1 = $__0.next()).done) ? 8 : -2;
          break;
        case 8:
          i = $__1.value;
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = (number === i++) ? -2 : 2;
          break;
        case 2:
          $ctx.state = 5;
          return i;
        case 5:
          $ctx.maybeThrow();
          $ctx.state = 7;
          break;
        default:
          return $ctx.end();
      }
  }, $__4, this);
}
for (var $__0 = take(infiniteNumbers(), 100)[Symbol.iterator](),
    $__1; !($__1 = $__0.next()).done; ) {
  var number = $__1.value;
  {
    console.log(number);
  }
}
