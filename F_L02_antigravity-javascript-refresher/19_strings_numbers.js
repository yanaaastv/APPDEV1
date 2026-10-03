const raw = "  Diana Teves  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); // "DIANA"
console.log(clean.includes("Teves")); // true
console.log(clean.slice(0, 5)); // "Diana"
console.log(`Full name: ${first} ${last}`);

//Everyday String & Number Methods — Number Methods
console.log(parseInt("41px"));   // 41
console.log((20.9999).toFixed(2)); // "21.00"
 
const result = "qwe" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true
