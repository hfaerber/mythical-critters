class Wizard {
  constructor (obj) {
    this.name = obj.name;
    this.bearded = true;
    if (obj.bearded === false) {
      this.bearded = false;
    }
    this.isRested = true;
    this.numCast = 0
  };

  incantation(param) {
    console.log(param);
    return param.toUpperCase();
  }

  cast(words) {
    this.numCast++;

    if (this.numCast > 2) {
      this.isRested = false;
      words = 'I SHALL NOT CAST';
    }
    console.log(this.isRested);
    return words;
  }

};

module.exports = Wizard;

//used bracket notation for test 2 bc 'the name of the obj you
// want is stored in a variable or parameter (from class notes)'
// mod2 said bracket notation is not neccesary^^^^^

// its only one object literal being passed through as an argument,
// but that obj has multiple properties once bearded is added

// JESSE'S WAY:
//
// this.bearded = true;
// if (obj.bearded !== undefined) {
//   this.bearded = obj.bearded
// };

// THE WAY WE WILL LEARN IT LATER WHEN PASSING AN OBJ THROUGH:
// constructor ({name, bearded = true}) {
//   this.name = name;

// ALLIES WAY EASIER WAY
// this.bearded = true;
// if (obj.bearded === false) {
//   this.bearded = false;
// }

// MY MORE COMPLICATED ATTEMPT THAT WORKS BUT IS SO MUCH MORE CONVULUTED THAN ALLIES
// if (obj.bearded === undefined || obj.bearded === true) {
//   this.bearded = true;
// } else {
//   this.bearded = false
// };
