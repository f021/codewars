const pascal = (x, y) =>
  x === 0 || x === y ?  1 : pascal(x - 1, y - 1) + pascal(x, y - 1)

const pascalsTriangle = (n, acc = []) =>
  n ?
    pascalsTriangle(n - 1, Array.from({ length: n }, (_, i) => pascal(i, n - 1)).concat(acc)) :
    acc
