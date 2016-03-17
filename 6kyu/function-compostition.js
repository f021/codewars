const compose = (...fns) =>
  (...args) =>
    fns.reduceRight((acc, fn) =>
      Array.isArray(acc) ?
        fn(...acc) :
        fn(acc)
      , args)
