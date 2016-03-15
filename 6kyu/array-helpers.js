// var numbers = [1, 2, 3, 4, 5];
// numbers.square(); // must return [1, 4, 9, 16, 25]
// numbers.cube(); // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum(); // must return 15
// numbers.even(); // must return [2, 4]
// numbers.odd(); // must return [1, 3, 5]

"use strict";

const square = x =>
  x * x

const cube = x =>
  x * x * x

const isOdd = x =>
  x % 2

const isEven = x =>
  not(isOdd(x))

const not = x =>
  !x

const sum = (a, b) =>
  a + b

Object.assign(Array.prototype, {
  square() { return this.map(square) },
  cube() { return this.map(cube) },
  sum() { return this.reduce(sum, 0) },
  average() { return this.sum() / this.length },
  even() { return this.filter(isEven) },
  odd() { return this.filter(isOdd) }
})
