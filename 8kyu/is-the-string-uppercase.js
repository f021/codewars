// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
}

String.prototype.isUpperCase = function() {
  for(let ch of this) {
    if (!/[A-Z\W]/.test(ch)) {
      return false
    }
  }
  return true
}
