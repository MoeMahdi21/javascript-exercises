const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = null;
  for (num of arr) {
    sum += num;
  }

  return sum;
};

const multiply = function (arr) {
  let multiply = 1;
  for (num of arr) {
    multiply *= num;
  }

  return multiply;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let numFactorial = 1;
  for (let i = num; i >= 1; i--) {
    numFactorial *= i;
  }
  return numFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
