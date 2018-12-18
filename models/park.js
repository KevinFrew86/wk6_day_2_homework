const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
}

Park.prototype.addDino = function(dinosaur){
  this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function(dinosaur) {
  this.dinoCollection.pop(dinosaur);
};

Park.prototype.mostVisitors = function(dinosaurs) {
  for (let dinosaur of dinosaurs) {
    return dinosaur.guestsAttractedPerDay.max;
  };
};

Park.prototype.findSpecies = function()

module.exports = Park;
