const aboutMe = {
  name: "Diana",
  age: 21,
  course: "BSIS",
  introduce: function () {
    console.log("Hi, I'm " + this.name + ", " + this.age + " years old, studying " + this.course + ".");
  }
};

// Adding a new property dynamically
aboutMe.hobby = "Watching Solo Dates and Learning Makeup";

// Calling the object method
aboutMe.introduce();
console.log("My hobby is: " + aboutMe.hobby);