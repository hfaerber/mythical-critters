class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };
  stare(who) {
    who.stoned = true;
    if (this.statues.length < 3) {
      this.statues.push(who);
    }
    if (this.statues.length === 3) {
      this.statues.push(who);
      var firstVic = this.statues.shift();
      firstVic.stoned = false;
      console.log(firstVic);
    }
  }
};

module.exports = Medusa;
//
// I got this to pass the test but am not clear on
// if its really doing what I want it to be doing.
// Basically all the objects in the array should be
// stoned=true and it should change to stoned=false
// only when it shifts out of the array.


// wondering if splice() is  method i should be using?
