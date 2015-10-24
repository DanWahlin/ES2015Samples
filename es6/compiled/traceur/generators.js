"use strict";
var $__7 = $traceurRuntime.initGeneratorFunction(numberGenerator),
    $__8 = $traceurRuntime.initGeneratorFunction(infiniteNumbers),
    $__9 = $traceurRuntime.initGeneratorFunction(take);
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
  }, $__7, this);
}
var number = numberGenerator();
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
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
  }, $__8, this);
}
function take(coll, number) {
  var i,
      $__3,
      $__4,
      $__5,
      $__1,
      $__0,
      $__6;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          i = 0;
          $__3 = true;
          $__4 = false;
          $__5 = undefined;
          $ctx.state = 27;
          break;
        case 27:
          $ctx.pushTry(13, 14);
          $ctx.state = 16;
          break;
        case 16:
          $__1 = void 0, $__0 = (coll)[Symbol.iterator]();
          $ctx.state = 12;
          break;
        case 12:
          $ctx.state = (!($__3 = ($__1 = $__0.next()).done)) ? 8 : 10;
          break;
        case 7:
          $__3 = true;
          $ctx.state = 12;
          break;
        case 8:
          i = $__1.value;
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = (number === i++) ? 1 : 2;
          break;
        case 1:
          $ctx.state = 14;
          $ctx.finallyFallThrough = -2;
          break;
        case 2:
          $ctx.state = 5;
          return i;
        case 5:
          $ctx.maybeThrow();
          $ctx.state = 7;
          break;
        case 10:
          $ctx.popTry();
          $ctx.state = 14;
          $ctx.finallyFallThrough = -2;
          break;
        case 13:
          $ctx.popTry();
          $ctx.maybeUncatchable();
          $__6 = $ctx.storedException;
          $ctx.state = 19;
          break;
        case 19:
          $__4 = true;
          $__5 = $__6;
          $ctx.state = 14;
          $ctx.finallyFallThrough = -2;
          break;
        case 14:
          $ctx.popTry();
          $ctx.state = 25;
          break;
        case 25:
          try {
            if (!$__3 && $__0.return != null) {
              $__0.return();
            }
          } finally {
            if ($__4) {
              throw $__5;
            }
          }
          $ctx.state = 23;
          break;
        case 23:
          $ctx.state = $ctx.finallyFallThrough;
          break;
        default:
          return $ctx.end();
      }
  }, $__9, this);
}
var $__3 = true;
var $__4 = false;
var $__5 = undefined;
try {
  for (var $__1 = void 0,
      $__0 = (take(infiniteNumbers(), 10))[Symbol.iterator](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
    var number = $__1.value;
    {
      console.log(number);
    }
  }
} catch ($__6) {
  $__4 = true;
  $__5 = $__6;
} finally {
  try {
    if (!$__3 && $__0.return != null) {
      $__0.return();
    }
  } finally {
    if ($__4) {
      throw $__5;
    }
  }
}
