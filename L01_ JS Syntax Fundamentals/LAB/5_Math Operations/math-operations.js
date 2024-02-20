function solve(num1, num2, operator){
    let result;
    switch(operator){
        case "+": 
        result = num1 + num2; 
        break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
        case "**": result = num1 ** num2; break;
    }
    console.log(result);
}

solve(5, 6, "+");
solve(3, 5.5, '*')


// Write a JS function that takes two numbers and a string as input.
//
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
//
// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.