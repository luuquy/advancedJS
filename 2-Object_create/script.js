// Object create

var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);

john.name = "John";
john.yearOfBirth = 1998;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1998 },
  job: { value: "design" },
});
