class Hobbit {
 constructor (name) {
   this.name = name;
   this.disposition = 'homebody';
   this.age = 0;
   this.adult = false;
   this.isShort = true;
   this.old = false;
   if (this.name === 'Frodo') {
     this.hasRing = true;
   } else {
     this.hasRing = false;
   }
 }
 celebrateBirthday () {
   this.age++;
   if (this.age > 32) {
     this.adult = true;
   } if (this.age > 100) {
     this.old = true;
    }
  }
}

module.exports = Hobbit;

// disposition could be made more dynamic by = disposition || 'homebody'

// want to walk through "should have gained 1 year after every birthday"
// with someone - i'm not clear on the function timeTravel that is in the test
// and why it needs a for loop

// should I have set the if statement for this.old in the constructor rather
// than in the method celebrateBirthday?  I think it should be in the method
// because it wont ever be passed through as an argument (since its not a param)
// so it will only be 'in play' if the method is being invoked

// i'm placing the conditional for hasRing in the constructor bc it will be 'in play'
// as soon as an argument for the param 'name' is passed.  So I want it in the
// constructor to be applied to every instantiation of the class up front
