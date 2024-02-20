function solve(num1, num2, num3) {
  let result;
  if (num1 > num2 && num1 > num3) {
    result = num1;
  } else if (num2 > num1 && num2 > num3) {
    result = num2;
  } else if (num3 > num1 && num3 > num2) {
    result = num3;
  }
  console.log(`The largest number is ${result}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);

// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.
