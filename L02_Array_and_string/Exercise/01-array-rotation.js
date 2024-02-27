function rotateArray(myArray, rotations) {

  for (let index = 1; index <= rotations; index++) {
    let elementToTake = myArray.shift();
    myArray.push(elementToTake);

  }

  console.log(myArray.join(' '));
}


rotateArray([51, 47, 32, 61, 21], 2)

// Write a function that receives an array and the number of rotations you have to perform.
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.