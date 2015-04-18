/*global require, describe, it */
var should = require('should');
var bubbleSort = require('../src/index.js');

describe('Sorting a list', function() {
  it('sorts [16, 42, 8, 4, 15, 23]', function() {
    var list = [16, 42, 8, 4, 15, 23];
    var sorted = [4, 8, 15, 16, 23, 42];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [0, 0, 0, 1]', function() {
    var list = [0, 0, 0, 1];
    var sorted = [1, 0, 0, 0];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [0, 1, 0, 1]', function() {
    var list = [0, 1, 0, 1];
    var sorted = [1, 1, 0, 0];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [1, 0, 0, 0]', function() {
    var list = [1, 0, 0, 0];
    var sorted = [1, 0, 0, 0];

    bubbleSort(list).should.eql(sorted);
  });
});
