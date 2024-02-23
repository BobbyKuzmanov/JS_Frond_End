function solve(number) {
  let sum = 0;

  while(number > 0) {
    sum += number % 10;

    number = Math.trunc(number / 10);
  }

  console.log(sum);
}

solve(245678);

// Write a function, which will be given a single number. 
// Your task is to find the sum of its digits.