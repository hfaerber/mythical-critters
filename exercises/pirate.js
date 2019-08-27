class Pirate {
  constructor (name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.counter = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.counter++;
    if (this.counter > 2) {
      this.cursed = true;
    };
  };
  robShip() {
    this.booty = this.booty+100;
    return 'YAARRR!';
  };
};

module.exports = Pirate;
// when do we use return in functions and methods?
//put this.booty+100 before return bc return ends the process
// assigned this.booty to this.booty + 100 so that it adds 100 each
// time the method is run
