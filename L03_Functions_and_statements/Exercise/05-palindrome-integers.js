function checkPalindromeArray(arr) {
 // Function to check if a number is a palindrome
 function isPalindrome(num) {
     const str = num.toString();
     const reversedStr = str.split('').reverse().join('');
     return str === reversedStr;
 }
 
 // Iterate through each element in the array and check for palindrome
 arr.forEach(num => {
     console.log(isPalindrome(num) ? "true" : "false");
 });
}

// Example usage:
checkPalindromeArray( [32,2,232,1010]);
