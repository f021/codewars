const func = x =>
  x % 2 ? false : true

const map = (xs, fn) => {
  if (typeof fn !== 'function') {
    return 'given argument is not a function'
  }
  if (!xs.length) {
    return 'array should contain only numbers'
  }
  let ys = []
  for (let i = 0; i < xs.length; i++) {
    if (isFinite(xs[i])) {
      ys.push(fn(Number(xs[i])))
    } else {
      return 'array should contain only numbers'
    }
  }
  return ys
}
