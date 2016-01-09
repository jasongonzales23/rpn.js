var getOperator = require('./operators.js')
var numStack = require('./numStack.js')
var big = require('big-decimal')

var calculate = function (op) {
  var operator = getOperator(op)
  if (!operator) {
    throw new Error("Unknown Operator " + op)
  }

  var rh = numStack.pop().toString()
  var lh = numStack.pop().toString()
  return operator(lh, rh)
}

module.exports = calculate
