var getOperator = require('./operators.js')
var numStack = require('./numStack.js')

function calculate(op) {
  var operator = getOperator(op)
  if (!operator) {
    throw new Error("Unknown Operator " + op)
  }

  var rh = parseFloat(numStack.pop())
  var lh = parseFloat(numStack.pop())
  return operator(lh, rh)
}

module.exports = calculate
