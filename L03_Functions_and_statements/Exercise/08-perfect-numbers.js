function solve(number) {
  let sum = 0;

  // Calculate the sum of proper divisors
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  // Check if the sum of divisors equals the number itself
  if (sum === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

solve(6);
solve(1236498);

// A function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum
// of its proper positive divisors. That is the sum of its positive divisors
// excluding the number itself (also known as its aliquot sum).
// Output
//     • If the number is perfect, print: "We have a perfect number!"
//     • Otherwise, print: "It's not so perfect."
