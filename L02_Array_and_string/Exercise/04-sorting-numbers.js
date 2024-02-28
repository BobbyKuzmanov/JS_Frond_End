function solve(arr) {

  let resultArray = [];
  let sortedArray = arr.sort((a, b) => a - b);
  let arrayLenght = arr.length;

  for (let i = 0; i < arrayLenght; i++) {
    
    if (i % 2 === 0) {
      resultArray.push(sortedArray.shift());
    } else {
      resultArray.push(sortedArray.pop());
    }

  }

  return resultArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

// Write a function that sorts an array of numbers so that the
// first element is the smallest one, the second is the biggest one,
//  the third is the second smallest one, the fourth is the second
//  biggest one, and so on.
// Return the resulting array.
