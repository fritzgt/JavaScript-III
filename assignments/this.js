/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In the global scope this will point to the window object
 * 2. Implicit binding means that this points to the object left of the dot
 * 3. New binding, this would refer to the new instance of the object that we are creating
 * 4. Explicit binding, is when we use call() or apply() to explicitly linking to a new context.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const Planets = {
  name: "Earth",
  size: 3963,
  palnetSize: function() {
    console.log(`Planet ${this.name} has a radius of ${this.size} miles.`);
  }
};

Planets.palnetSize();

// Principle 3

// code example for New Binding

function Runners(runner) {
  this.runner = runner;
  this.greet = "My name is ";
  this.sayName = function() {
    console.log(this.greet + this.runner);
  };
}

const fritz = new Runners("Fritz");

fritz.sayName();

// Principle 4

// code example for Explicit Binding

const nearPlanet = {
  name: "Venus"
};

const size = 3760;

function desciption(size) {
  console.log(`The radius of ${this.name} is aprox ${size} miles`);
}

desciption.call(nearPlanet, size);
