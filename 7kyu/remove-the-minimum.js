const removeSmallest = xs => {
  let min = xs.indexOf(Math.min.apply(null, xs))
  return xs ? [ ... xs.slice(0, min), ... xs.slice(min +1) ] : []
}
