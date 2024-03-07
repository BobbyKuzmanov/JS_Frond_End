function factorialDivision(firstNum, secondNum) {
  function findFactorial(number) {
    if (number === 1) {
      return 1;
    }

    return number * findFactorial(number - 1);
  }

  let result = (findFactorial(firstNum) / findFactorial(secondNum)).toFixed(2);
  console.log(result);
}


factorialDivision(5, 2);
factorialDivision(6, 2);

// Write a function that receives two integer numbers.
// Calculate the factorial of each number. Divide the first result
//  by the second and print the division formatted to the second decimal point.
