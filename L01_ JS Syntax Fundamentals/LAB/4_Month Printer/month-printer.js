function solve (num){
    if (num >= 1 && num <= 12){
        switch (num) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
        } }
        else{
            console.log("Error!");
        }
}

solve(2)
solve(13);

// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"