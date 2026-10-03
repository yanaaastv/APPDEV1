const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
 
const user = { name: "Diana", age: 21 };
const newUser = { ...user, email: "diana@example.com" };
console.log(newUser); // { name: 'Diana', age: 21, email: 'diana@example.com' }
 
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

