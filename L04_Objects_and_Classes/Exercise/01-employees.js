function assignPersonalNumbers(employeeNames) {
  // Initialize an empty object to store employee names and their personal numbers
  let employees = {};

  // Loop through each name in the employeeNames array
  employeeNames.forEach((name) => {
    // Assign the name as the key and the length of the name as the personal number
    employees[name] = name.length;
  });

  // Loop through the employees object to print the desired output
  for (let employeeName in employees) {
    console.log(
      `Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`
    );
  }
}

assignPersonalNumbers([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
