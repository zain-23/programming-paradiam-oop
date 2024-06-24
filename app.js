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

console.log(khizer.calcAge());
console.log(jonas.calcAge());
