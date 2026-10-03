const students = [
  { name: "Diana", grade: 98 },
  { name: "Dawn", grade: 89 },
  { name: "Nath", grade: 45 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name));
 
const dawn = students.find(s => s.name === "Dawn");
console.log(dawn);
 
console.log(students.some(s => s.grade < 60));
console.log(students.every(s => s.grade >= 60));
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name));
