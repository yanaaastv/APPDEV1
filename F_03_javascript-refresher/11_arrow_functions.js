const greet = name => "Hola, " + name; // implicit return
const square = n => n * n;               // implicit return
 
const sayHi = () => {
  console.log("ciao!");
};

console.log(greet("Diana"));
console.log(square(8));
sayHi();