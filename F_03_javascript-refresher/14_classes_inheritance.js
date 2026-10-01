class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi, that's " + this.name); }
}
 
class Student extends Person {
  study() { console.log(this.name + " is doing their activity in JS."); }
}
 
const student = new Student("Lorlyn");
student.sayHello();
student.study();
