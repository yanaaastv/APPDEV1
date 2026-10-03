// 1. Function declaration using personal details as parameters
function introduce(name, age) {
  return "Hello, it's " + name + "! I am " + age + " years old.";
}

// 2. Arrow function to calculate the square of a number
const square = (num) => {
  return num * num;
};

// 3. Calculator function taking two simple numbers and returning results as an object
function calculator(num1, num2) {
  return {
    sum: num1 + num2,
    product: num1 * num2
  };
}

// Simple variables matching the examples
let myName = "Diana";
let myAge = 21;
let firstNumber = 10;
let secondNumber = 5;

console.log(introduce(myName, myAge));
console.log(square(myAge));
console.log(calculator(firstNumber, secondNumber));

