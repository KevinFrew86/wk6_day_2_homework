const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 200);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 70)
    filteredSpecies = [];
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 200);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur1);
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    assert.strictEqual(park.dinoCollection.length, 3);
    park.removeDino(dinosaur1);
    park.removeDino(dinosaur2);
    park.removeDino(dinosaur3);
    assert.strictEqual(park.dinoCollection.length, 0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, 70)

  });

  it('should be able to find all dinosaurs of a particular species', function() {

  });

  xit('should be able to remove all dinosaurs of a particular species');

});
