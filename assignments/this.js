/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: JS lives in a global context. In the browser it's the Window object, in Node it's console/global. The this keyword refers to that global context.
* 2. Implicit binding: When there is an invocation of a function inside of an object, this is used bofore the name of the function and refers to that object.
* 3. New binding: Inside of a constructor, a function that creates a new kind of object, this refers to the future created object.
* 4. Explicit binding: Using call or apply method in an object you set a new this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function thisIsWindow() {
  console.log("This is Window ", this);
}

thisIsWindow();

// Principle 2

// code example for Implicit Binding

let me = {
  name: "David",
  age: 29,
  sayYourName() {
    console.log(`My name is ${this.name}`);
  },

  greet() {
    this.sayYourName();
  }
}

me.greet();

// Principle 3

// code example for New Binding

function Computer(OS) {
  this.OS = OS;
  this.keyboard = true;
  this.boot = function() {
    console.log(`Beeep... Starting ${this.OS}`);
  };
}

let macbook = new Computer("macOS");
macbook.boot();

// Principle 4

// code example for Explicit Binding

let toshiba = new Computer("Windows 10");
macbook.boot.call(toshiba);
toshiba.boot.apply(macbook);