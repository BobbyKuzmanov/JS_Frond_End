function validatePassword(password) {
   let isValid = true;
   const hasValidLength = password.length >= 6 && password.length <= 10;
   const consistsOfLettersAndDigits = /^[A-Za-z0-9]+$/.test(password);
   const hasAtLeastTwoDigits = (password.match(/\d/g) || []).length >= 2;

   if (!hasValidLength) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
   }

   if (!consistsOfLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
   }

   if (!hasAtLeastTwoDigits) {
    console.log("Password must have at least 2 digits");
    isValid = false;
   }

   if (isValid) {
    console.log("Password is valid");
   }
}

// Example usage:
validatePassword("logIn"); // Should print "Password is valid"
validatePassword("MyPass123"); // Should print the unfulfilled rules

// Write a function that checks if a given password is valid.
// The Password validations are:
//     • The length should be 6 - 10 characters (inclusive)
//     • It should consist only of letters and digits
//     • It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
//     • "Password must be between 6 and 10 characters"
//     • "Password must consist only of letters and digits"
//     • "Password must have at least 2 digits"
