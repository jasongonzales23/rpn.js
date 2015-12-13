function isNumber(n) {
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    return n
  } else {
    throw new Error("You must enter a number")
  }
}

module.exports = isNumber
