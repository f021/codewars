// Create a function that will allow you to pass in a string, with the ability to add to this with more function calls. When it is finally passed an empty argument return the full concatinated string of all arguments pased previously.

const createMessage = (...cache) =>
  waitEmpty = (...args) =>
    args.length ?
      (cache = [...cache, ...args], waitEmpty) :
      cache.join(' ')
