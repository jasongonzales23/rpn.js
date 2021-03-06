var big = require('big-decimal');

var Operators = {
  add: function(lh, rh) {
    return new big(lh).add(new big(rh)).toString()
  },

  subtract: function(lh, rh) {
    return new big(lh).subtract(new big(rh)).toString()
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
