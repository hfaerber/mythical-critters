class Centaur {
  constructor(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.activity = 0;
  this.layingDown = false;
  }

  shoot() {
    this.activity++;
    if (this.activity >= 3) {
      this.cranky = true;
    }
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  };

  run() {
    this.activity++;
    if (this.activity >= 3) {
      this.cranky = true;
    }
    if (this.layingDown === true) {
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  };

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.activity = 0;
      return 'ZZZZ';
    }
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion() {
    if (this.cranky === true) {
      this.cranky = false;
    }
    else if (this.cranky === false) {
      this.cranky = true;
    }
    if (this.layingDown === true) {
    return `Not while I\'m laying down!`;
    }
  }

};

module.exports = Centaur;
