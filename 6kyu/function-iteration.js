// The purpose of this kata is to write a higher-order function which is capable of creating a function that iterates on a specified function a given number of times. This new functions takes in an argument as a seed to start the computation from.

const createIterator = (func, n) =>
  (...args) =>
    Array.from({ length: n - 1 }).reduce(func, func(...args))
