function solve(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += n + " ";
    }

    console.log(row);
  }
}

solve(7);
// Write a function that receives a single integer number n and prints
//  nxn matrix with that number.
