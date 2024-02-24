function solve(number, op1, op2, op3, op4, op5) {
  let result = Number(number);
  let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "c":
        result /= 2;
        break;
      case "d":
        result = Math.sqrt(result);
        break;
      case "s":
        result+=1;
        break;
      case "b":
        result *= 3;
        break;
      case "f":
        result -= result * 0.2;
        break;
      
    }

    console.log(result);
  }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// function solve(number, op1, op2, op3, op4, op5) {
//   const operations = {
//     chop: (num) => num / 2,
//     dice: (num) => Math.sqrt(num),
//     spice: (num) => num + 1,
//     bake: (num) => num * 3,
//     fillet: (num) => num * 0.8,
//   };

//   let currentNumber = parseFloat(number);
//   const operationNames = [op1, op2, op3, op4, op5];

//   operationNames.forEach((operation) => {
//     currentNumber = operations[operation](currentNumber);
//     console.log(currentNumber);
//   });
// }

// Write a program that receives 6 parameters which are a number and a list of five operations.
// Perform the operations sequentially by starting with the input number and using the result of every
//  operation as a starting point for the next one. Print the result of every operation in order.
//  The operations can be one of the following:
//     • chop - divide the number by two
//     • dice - square root of a number
//     • spice - add 1 to the number
//     • bake - multiply number by 3
//     • fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting
// point and must be parsed to a number. The remaining 5 elements are the
//  names of the operations to be performed.
// The output should be printed on the console.
