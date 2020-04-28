var john = {
  name: "John",
  age: 23,
  job: "student",
  presentation: function (style, timeOfday) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfday +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          ", and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfday +
          "."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey, What's up " +
          timeOfday +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          ", and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfday +
          "."
      );
    }
  },
};

var jane = {
  name: "jane",
  age: 23,
  job: "teacher",
};

// john.presentation("formal", "morning");
//

john.presentation.call(jane, "friendly", "afternoon");

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
