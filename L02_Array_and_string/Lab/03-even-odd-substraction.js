function solve(arr){
  
  for (let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
  }

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++){
    
    if (arr[i] % 2 === 0){
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  difference = evenSum - oddSum;
  console.log(difference);
}


solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);

//  Write a program that calculates the difference between the sum of the even and
// the sum of the odd numbers in an array.Parse each string to number.
// Create two variables - for even and odd sum.
// Iterate through all elements in the array with a loop and check if the number is odd or even
// Print the difference