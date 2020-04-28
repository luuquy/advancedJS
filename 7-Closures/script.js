function retirement(retirementAge) {
  var a = " years left until retirement";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}
// var retirementVN = retirement(65);
// retirementVN(1998);
// retirement(60)(1998);

var retirementVN = retirement(65);
var retirementCN = retirement(70);
retirementVN(1998);
retirementCN(1997);

function interviewQuestion(job) {
  return function (name) {
    if (job === "desinger") {
      console.log(name + ", can you please explain what Ux design is?");
    } else if (job === "teacher") {
      console.log(name + ", what subject do you teach ?");
    } else {
      console.log(name + ", what do you do?");
    }
  };
}

// var x = interviewQuestion("designer");
// x("Quy");

interviewQuestion("teacher")("Quy");
