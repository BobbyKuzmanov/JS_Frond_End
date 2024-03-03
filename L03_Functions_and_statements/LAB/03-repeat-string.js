function solve(string, count){

  let result = '';

  for (let i = 0; i < count; i++) {
    result += string;
  }

  return result;
}

console.log(solve('abc', 3));



// Write a function that receives a string and a repeat count n.
//  The function should return a new string (the old one repeated n times).
//  Hints
//     1. Use a loop or another method to repeat the input string.
//     2. Use the return operator to produce the result.

// Example
// input "abc", 3
// output: "abcabcabc"