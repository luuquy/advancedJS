//Function constructor

// var john = {
//   name: "John",
//   yearOfBirth: 1999,
//   job: "student",
// };

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  //   console.log(2016 - this.yearOfBirth);
  // };
};

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

var john = new Person("John", "1999", "student");

john.calculateAge();

var jane = new Person("Jane", "1998", "doctor");
jane.calculateAge();

console.log(john.calculateAge === jane.calculateAge);
