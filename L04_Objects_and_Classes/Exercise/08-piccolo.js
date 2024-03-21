function piccolo(input) {

    let parking = {};
    for (let i = 0; i < input.length; i++) {
        let [direction, carNumber] = input[i].split(', ');
        if (direction === 'IN') {
            parking[carNumber] = true;
        } else if (direction === 'OUT') {
            delete parking[carNumber];
        }
    }

    let keys = Object.keys(parking);
    if (keys.length > 0) {
        keys.sort();
        console.log(keys.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

// A function that:
//     • Records a car number for every car that enters the parking lot
//     • Removes a car number when the car goes out
//     • Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".