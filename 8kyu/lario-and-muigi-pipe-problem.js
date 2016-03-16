// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

const pipeFix = xs =>
  Array.from({
    length: xs.slice(-1)[0] - xs[0] + 1
  }, (_, i) => i + xs[0])
