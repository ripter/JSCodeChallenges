/*global require, describe, it */
var should = require('should');
var where = require('../src/index.js');


var devs = [
  {'name': 'ripter', powerLevel: 9001, pets: ['Rose']}
  , {'name': 'Skip', powerLevel: 4000, pets: ['Poe', 'Jynix']}
];


describe('Object filtering', function() {
  it('can match single property', function() {
    should.deepEqual(
      where({ powerLevel: 9001 }, devs)
      [{name: 'ripter', powerLevel: 9001, pets: ['Rose']}]);
  });

  it('can match nested array', function() {
    should.deepEqual(
      where({ 'pets': ['Poe'] }, devs),
      [{name: 'Skip', powerLevel: 4000, pets: ['Poe', 'Jynix']}]);
  });

  it('returns new array', function() {
    var result = where({name: 'ripter'}, devs);
    result[0].isImmutable = true;

    should.notDeepEqual(
      result,
      {name: 'ripter', powerLevel: 9001, pets: ['Rose']}
    );

    should.deepEqual(
      result,
      [{name: 'ripter', powerLevel: 9001, pets: ['Rose'], isImmutable: true}]
    );
  });
});