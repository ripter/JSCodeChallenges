/*global require, describe, it */
var should = require('should');
var bubbleSort = require('../src/index.js');

describe('Sorting a list', function() {
  it('sorts [16, 42, 8, 4, 15, 23]', function() {
    var list = [16, 42, 8, 4, 15, 23];
    var sorted = [4, 8, 15, 16, 23, 42];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [2, 2, 2, 1]', function() {
    var list = [2, 2, 2, 1];
    var sorted = [1, 2, 2, 2];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [2, 1, 2, 1]', function() {
    var list = [2, 1, 2, 1];
    var sorted = [1, 1, 2, 2];

    bubbleSort(list).should.eql(sorted);
  });

  it('sorts [1, 2, 2, 2]', function() {
    var list = [1, 2, 2, 2];
    var sorted = [1, 2, 2, 2];

    bubbleSort(list).should.eql(sorted);
  });
});
