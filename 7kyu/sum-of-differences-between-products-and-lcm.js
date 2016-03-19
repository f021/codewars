// Using Euclid's algorithm
// gcd(a,0) = a
// gcd(a,b) = gcd(b, a % b)

const gcd = (a, b) =>
  b ? gcd(b, a % b) : a

// lcm(a, b) = |ab|/gcd(a,b)
// if a == 0 && b == 0,  lcm(0, 0) = 0 is a special case.

const lcm = (a, b) =>
  a && b ? (a * b)/gcd(a, b) : 0

const sumDifferencesBetweenProductsAndLCMs = pairs =>
  pairs.reduce((acc, [a, b]) =>
    acc + (a * b - lcm(a, b))
  , 0)
