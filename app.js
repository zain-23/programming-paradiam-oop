// Contructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    return this.birthYear + 2;
  };
};
const jonas = new Person("zain", 2003);
const khizer = new Person("khizer", 2010);

// Prototype Inheritance
Person.prototype.calcAge = function () {
  return this.birthYear + 10;
};

// Coding challenge with constructor function

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 150);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

console.log(bmw.accelerate());
console.log(bmw.brake());