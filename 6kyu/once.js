const once = (fn, once=false) =>
  (...args) =>
    once ? undefined : (once = true, fn(...args))
