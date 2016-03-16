const generateRange = (min, max, step) =>
  Array.from({ length: (max - min + step) / step }, (_, i) => min + i * step)
