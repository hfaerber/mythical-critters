class Dragon {
  constructor (name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.counter = 0;
  }
eat () {
  this.counter++;
  if (this.counter > 2) {
  this.hungry = false;
}
}
};

module.exports = Dragon;


// this is a ternary operator which essentiall is a diff way of if statement
// (this.counter > 2) ? this.hungry = false : this.hungry = true;
