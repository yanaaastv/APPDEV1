console.log("Hello, JavaScript! It's Diana, let's do a refresher.");

// Case sensitivity demonstration (studentName vs studentname are different variables)
let studentName = "Diana";
let studentname = "Teves";

console.log(studentName);
console.log(studentname);

// Valid variable naming examples -- practicing standard rules and camelCase
let studentAge = 21;
let degreeCourse = "BSIS";
let _enrollmentStatus = "enrolled";
let $currentYear = 3;
let gitHubUsername = "dianaTeves";

// Invalid variable names -- commented out because each would throw a SyntaxError
// let 1stSubject = "APPDEV1";  // Cannot start with a digit
// let student-name = "Diana";   // Hyphens are not allowed in identifiers
// let class = "BSIS";           // Cannot use reserved keywords like 'class'

console.log(studentAge, degreeCourse, _enrollmentStatus, $currentYear, gitHubUsername);

