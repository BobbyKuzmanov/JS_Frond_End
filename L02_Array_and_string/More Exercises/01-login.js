function loginSystem(input) {
  const username = input[0];
  const correctPassword = username.split("").reverse().join("");

  for (let i = 1; i < input.length; i++) {
    if (input[i] === correctPassword) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      if (i === 4) {
        console.log(`User ${username} blocked!`);
        return;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}



loginSystem(["Acer", "login", "go", "let me in", "recA"]);

// loginSystem(['momo','omom']);
// loginSystem(['sunny','rainy','cloudy','sunny','not sunny']);

// You will be given a string representing a username.
// The correct password will be that username reversed.
// Until you receive the correct password print on the console: "Incorrect password. Try again.".
// When you receive the correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.
