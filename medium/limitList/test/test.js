/*global require, describe, it, beforeEach */
var should = require('should');
var LimitList = require('../src/index.js');

describe('sanity checks', function() {
  it('is a function', function() {
    should(typeof LimitList).equal('function');
    //should(LimitList).be.a.Function();
  });

  it('is a constructor', function() {
    should.exist(new LimitList());
  });

  it('has the required methods', function() {
    var list = new LimitList();

    should.exist(list.add);
    should.exist(list.length);
    should.exist(list.at);
  });
});

describe('new LimitList(1)', function() {
  var list;

  beforeEach(function() {
    list = new LimitList(1);
  });

  it('only allows one item in the list when created with new LimitList(1)', function() { 

    random(function(i) {
      list.add('Et tu, Brute? '+i);   
    });

    list.length().should.equal(1);
  });

  it('has .at(0)', function() {
    list.add('one');

    list.at(0).should.equal('one');
  });

  it('should be FIFO', function() {
    list.add('one');
    var result = list.add('two');

    list.at(0).should.equal('two');
    result.should.equal('one');
  });
});

describe('new LimitList(3)', function() {
  var list;

  beforeEach(function() {
    list = new LimitList(3);
  });

  it('length() is actual length and not limit', function() {
    list.length().should.equal(0);
    list.add('one');
    list.length().should.equal(1);
    list.add('two');
    list.length().should.equal(2);
    list.add('three');
    list.length().should.equal(3);
  });

  it('adds values to the bottom of the list', function() {
    list.add('one');
    list.at(0).should.equal('one');
    list.add('two');
    list.at(0).should.equal('two');
    list.add('three');
    list.at(0).should.equal('three');
  });  

  it('is FIFO', function() {
    list.add('one');
    list.add('two');
    list.add('three');

    list.add('four').should.equal('one');
    list.add('five').should.equal('two');
    list.add('six').should.equal('three');
  });  
});

function random(method) {
  var i = 0 | Math.random() * 10 + 3;

  while (i--) {
    method(i);
  } 
}