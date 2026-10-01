function greet(name) {
  return "Hello, it's " + name + "!";
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Diana"));
console.log(square(18));
console.log(calculator(18, 28));
