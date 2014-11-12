"use strict";
var age = 55;
{
  try {
    throw undefined;
  } catch ($i) {
    {
      $i = 0;
      for (; $i < 5; $i++) {
        try {
          throw undefined;
        } catch (i) {
          {
            i = $i;
            try {
              age += 5;
            } finally {
              $i = i;
            }
          }
        }
      }
    }
  }
}
try {
  console.log(i);
} catch (e) {
  console.log('i is out of scope due to using let!');
}
