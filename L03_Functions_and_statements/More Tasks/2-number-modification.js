function modifyNumber(num) {
    function calculateDigitAverage(num) {
        let sum = 0;
        let count = 0;
        let temp = num;
      
        // Calculate sum of digits
        while (temp > 0) {
          sum += temp % 10;
          temp = Math.floor(temp / 10);
          count++;
        }
      
        // Calculate average
        const average = sum / count;
        return average;
      }
        while (calculateDigitAverage(num) <= 5) {
            num = num * 10 + 9;
        }
        return num;
}

// Test cases
console.log(modifyNumber(101)); // Output: 1019999
console.log(modifyNumber(5835)); // Output: 5835

// A JS program that changes a number until the average of
// all its digits is not higher than 5.
// To modify the number, your program should append a 9 to the end of the number,
//  when the average value of all its digits is higher than 5 the program should stop appending.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an
// average value of all its digits higher than 5. The output should be printed on the console.

// Constraints
//     · The input number will consist of no more than 6 digits.
//     · The input will be a valid number (there will be no leading zeroes).
