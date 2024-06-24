// Contructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    return this.birthYear + 2;
  };
};
const jonas = new Person("zain", 2003);
console.log(jonas.calcAge());
