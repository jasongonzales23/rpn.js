var Operators = {
  add: function(lh, rh) {
    return lh + rh
  },

  substract: function(lh, rh) {
    return lh - rh
  },

  multiply: function(lh, rh) {
    return lh * rh
  },

  divide: function(lh, rh) {
    return lh / rh
  }
}

var operatorsMap = {
  "+": Operators.add,
  "-": Operators.subtract,
  "*": Operators.multiply,
  "/": Operators.divide,
}

function getOperator(op) {
  return operatorsMap[op]
}

module.exports = getOperator
