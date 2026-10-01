const aboutMe = {
  name: "Diana",
  age: 21,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
  }
};
 
aboutMe.hobby = "Watching Solo Dates and Learning Makeup";
aboutMe.introduce();
console.log(`${aboutMe.hobby}.`);