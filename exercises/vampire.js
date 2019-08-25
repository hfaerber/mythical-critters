class Vampire {
  constructor (name, pet, thirsty) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    if (thirsty === undefined) {
      this.thirsty = true;
    } else if (thirsty === true) {
      this.thirsty = true;
    } else {
      this.thirsty = false;
    }
  }

  drink() {
    this.thirsty = false;
  }

};

module.exports = Vampire;
