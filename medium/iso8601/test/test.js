/*global require, describe, it */
var should = require('should');
var dump = require('../data/db_dump.js');
var formatter = require('../src/index.js');

var VALIDATE_REGEX = /\d{4}-[01]\d-[0-3]\d/;

describe('Format Dates', function() {
  dump.data.forEach(function(date) {
    
    it('can validate ' + date, function() {
      var result = formatter(date);
      result.should.match(VALIDATE_REGEX, date);
    });
    
  });
});

describe('Validate project', function() {
  it('has data', function() {
    should.exist(dump);
    should.exist(dump.data); 
    dump.data.should.have.length(1000);
  });
  
  it('has formatter function', function() {
    should.exist(formatter);
    formatter.should.be.Function;
  });
  
  it('can validate short ISO 8601', function() {
    var one = '1975-12-26';
    var two = '1983-05-12';

    one.should.match(VALIDATE_REGEX);
    two.should.match(VALIDATE_REGEX);
  });
});
