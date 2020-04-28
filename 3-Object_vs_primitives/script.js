//primitive

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
console.log(a === b);

//object

var obj1 = {
  name: "Quy",
  age: 22,
};

var obj3 = {
  name: "Quy",
  age: 22,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
console.log(obj1.age === obj2.age);
console.log(obj1.age === obj3.age);

//function
var age = 23;
var obj4 = {
  name: "hihi",
  city: "San Francisco",
};

function change(a, b) {
  a = 30;
  b.city = "San x";
}

change(age, obj4);

console.log(age);
console.log(obj4.city);
