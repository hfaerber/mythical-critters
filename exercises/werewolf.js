class Werewolf {
  constructor (name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.canEat = false;
  }

  change() {
    if (this.human === true || this.wolf === false) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
      this.canEat = true;
    } else if (this.human === false || this.wolf === true) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
      this.canEat = false;
    }
  }

  eat(victim) {
    if (this.canEat === true) {
      victim.alive = false;
      this.change();
    }
  }
};

module.exports = Werewolf;
