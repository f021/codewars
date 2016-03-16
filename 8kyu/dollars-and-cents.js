// 3 needs to become $3.00
// 3.1 needs to become $3.10

const formatMoney = amount =>
  '$' + amount.toFixed(2)
