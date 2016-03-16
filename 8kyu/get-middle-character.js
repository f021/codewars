const getMiddle = s =>
  s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2)

const getMiddleArr = s => {
  let i = Math.floor(s.length / 2)
  let odd = s.length % 2
  return odd ? s.slice(i)[0] : s.slice(i - 1, - (i - 1))
}
