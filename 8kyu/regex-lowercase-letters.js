const lowercaseCount = str =>
  str.replace(/[^a-z]/g, '').length

const lowercaseCountArr = str =>
  Array.from(str).filter(e =>
    /[a-z]/.test(e)
  ).length
