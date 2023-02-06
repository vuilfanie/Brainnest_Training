// a) 

const num1 = parseInt(prompt("Please enter an number:"));
const num2 = parseInt(prompt("Please enter another number:"));

if (num1 > num2) {
  console.log(`The larger number is ${num1}.`);
} else if (num2 > num1) {
  console.log(`The larger number is ${num2}.`);
} else {
  console.log('The two numbers are equal.');
}

// b)

const num = parseInt(prompt("Please enter an number and I will check something..."));

if (num % 2 === 0) {
  console.log(`The number ${num} is an even number.`);
} else {
  console.log(`The number ${num} is an odd number.`);
}