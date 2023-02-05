// //a.
const squareSide = 9;
const diagonal = Math.sqrt(squareSide**2 + squareSide**2);
console.log(`The diagonal of a square with sides of length ${squareSide} is ${diagonal}.`);

// //b.
const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of a triangle with sides of lengths ${side1}, ${side2}, and ${side3} is ${area}.`);

// //c. 
const radius = 4;
const circumference = 2 * Math.PI * radius;
const areaSurface = Math.PI * radius**2;
console.log(`The circumference of a circle with a radius of ${radius} is ${circumference} and the surface area is ${areaSurface}.`);