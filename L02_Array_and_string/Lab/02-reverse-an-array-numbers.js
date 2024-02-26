function solve(n, inputArray) {
  let arr = [];

  for (let i = 0; i < n; i++) { // loop over the array
    arr.push(inputArray[i]); // putting the elements in the array
  }

  let output = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    output += arr[i] + ' ';
  }
  console.log(output.trim());
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);

// Write a program, which receives a number n and an array of elements.
// Your task is to create a new array with n numbers from the original array,
// reverse it and print its elements on a single line, space-separated.
