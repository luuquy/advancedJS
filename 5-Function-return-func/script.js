function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what Ux design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(name + ", what subject do you teach ?");
    };
  } else {
    return function (name) {
      console.log(name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Mark");

interviewQuestion("teacher")("Nam");
