var assert = require('assert');
var calculate = require('../calculate');
var numStack = require('../numStack');
var big = require('big-decimal');

describe('Calculator', function() {
  describe('add', function () {
    it('it should return the correct float', function () {
      numStack.push(.1);
      numStack.push(.2);
      var result = calculate('+');
      assert.equal(result, 0.3);
    });
  });

  describe('subtract', function() {
    it('should float', function() {
      numStack.push(.2);
      numStack.push(.1);
      var result = calculate('-');
      assert.equal(result, 0.1);
    });
  });


});
