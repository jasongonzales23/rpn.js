'use strict'

var readline = require('readline')
var calculate = require('./calculate.js')
var Operators = require('./operators.js')
var numStack = require('./numStack.js')
var isNumber = require('./isNumber.js')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function runCalculator(input) {
  if (numStack.length == 2) {
    return calculate(input)
  } else {
    return isNumber(input)
  }
}

rl.setPrompt('> ')
rl.prompt()
rl.on('line', function(input) {
  if(input === 'q') {
    return rl.close()
  } else {
    var out = runCalculator(input)
    numStack.push(out)
    console.log(out)
    rl.prompt()
  }
})

rl.on('close', function() {
  console.log('So long, nice calculating with you!')
})
