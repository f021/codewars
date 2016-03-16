// Write a function, factory, that takes a number as its parameter and returns another function.
//
// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

const factory = n =>
  xs =>
    xs.map(x => x * n)
