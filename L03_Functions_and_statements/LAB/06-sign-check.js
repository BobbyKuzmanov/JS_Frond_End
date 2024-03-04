function checkSign(numOne, numTwo, numThree) {
  const numbers = [numOne, numTwo, numThree];
  
  const negativeCount = numbers.reduce((count, num) => count + (num < 0 ? 1 : 0), 0);
  
  const message = (negativeCount % 2 === 0) ? "Positive" : "Negative";
  
  console.log(message);
}

// Test cases
checkSign(5, 12, -15);   
checkSign(-6, -12, 14);  
checkSign(-1, -2, -3);   
checkSign(-5, 1, 1); 
