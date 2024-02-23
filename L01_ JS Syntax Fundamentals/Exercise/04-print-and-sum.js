function solve(start, end) {
  let result = '';
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
    result += i + ' ';
  }

  console.log(result);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);

// Write a function that displays numbers from given start to given end and their sum.
//  The input comes as two number parameters.