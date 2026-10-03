// Simple array of personal hobbies
let myHobbies = ["Solo Dates", "Learning Makeup", "Listening to Music"];
console.log("Initial hobbies:", myHobbies);

// 1. Method that changes (mutates) the original array: push()
myHobbies.push("Cafe Hopping");
console.log("After push() [Original array changed]:", myHobbies);

// 2. Method that creates a new array: map()
const formattedHobbies = myHobbies.map(hobby => "I love " + hobby);

// 3. Comparing the results
console.log("New array created by map():", formattedHobbies);
console.log("Original array after map() [Still untouched]:", myHobbies);

