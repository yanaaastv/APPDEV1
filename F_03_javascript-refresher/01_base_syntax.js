console.log("Hello, JavaScript! It's Yana, let's do refresher.");
 
let studName = "Diana";
let studname = "Teves";
 
console.log(studName); // Diana
console.log(studname); // Teves

// Valid -- follows every rule
let age = 21;
let _status = "active";
let $grade = 1.50;
let userName = "dianaTeves"; // camelCase convention
 
// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 2cool = true;   -- can't start with a digit
// let my-name = "John"; -- hyphens aren't allowed in a name
// let let = 5;        -- "let" is a reserved word
 
console.log(age, _status, $grade, userName);
