var years = [1998, 1992, 1982, 2003];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (let index = 0; index < arr.length; index++) {
    arrRes.push(fn(arr[index]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  }
  return -1;
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
