function solve(num1, operator, num2) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  console.log(result.toFixed(2));
}

solve(5, "+", 10);
solve(25.5, "-", 3);



// Write a function that receives 3 parameters: a number, an operator (string),
// and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation
//  on the console formatted to the second decimal point.
