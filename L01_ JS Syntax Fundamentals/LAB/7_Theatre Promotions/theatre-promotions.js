function solve(day, age) {
    let price = 0;

    if (day === "Weekday"){
        if (0 <= age && age <= 18 || 64 <= age && age <= 122){
            price = 12;
        }
        else if (18 < age && age <= 64){
            price = 18;
        }
    }

    else if (day === "Weekend"){
        if (0 <= age && age <= 18 || 64 <= age && age <= 122){
            price = 15;
        } 

        else if (18 < age && age <= 64){
            price = 20;
        }
    }

    else if (day === "Holiday"){
        if (0 <= age && age <= 18){
            price = 5;
        }

        else if (18 < age && age <= 64){
            price = 12;
        }

        else if (64 < age && age <= 122){
            price = 10;
        }
    }

    if (price === 0){
        console.log("Error!");
    }

    else {
        console.log(`${price}$`);
    }
}

solve("Weekday", 42);
solve("Holiday", 15);


// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.
//  If the given age does not fit one of the categories, you should print "Error!".
// You can see the prices in the table below:
//
// Day /Age       0 <= age <= 18          18 < age <= 64          64 < age <= 122
// Weekday             12$                     18$                     12$
// Weekend             15$                     20$                     15$
// Holiday             5$                      12$                     10$
//
// Input
// The input comes in two parameters. The first one will be the type of day (string).
// The second – is the age of the person (number).
// Output
// Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
// Constraints
//     • The age will be in the interval [-1000…1000].
//     • The type of day will always be valid.
