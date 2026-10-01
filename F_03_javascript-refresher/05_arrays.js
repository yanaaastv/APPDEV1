let favoriteFoods = ["Chicken", "Samgy", "Fries"];
favoriteFoods.push("Ice Cream"); //  ["Chicken", "Sa", "Burger", "Ice Cream"];
favoriteFoods.shift(); // ["Sushi", "Burger", "Ice Cream"];
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
