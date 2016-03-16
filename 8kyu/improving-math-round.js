Math.roundTo = (a, b) =>
  +a.toFixed(b)

Math.roundTo2 = (a, b) =>
  Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
