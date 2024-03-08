function carWash(commands) {
    value = 0;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'soap') {
            value += 10;
        } else if (commands[i] === 'water') {
            value += value * 0.2;
        } else if (commands[i] === 'vacuum cleaner') {
            value += value * 0.25;
        } else if (commands[i] === 'mud') {
            value -= value * 0.1;
        } 
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])

// A JS function that receives some commands. Depending on the command, add or subtract 
// a percentage of how much the car is cleaned or dirty. Start from 0. The first command will
//  always be 'soap':

//     · soap – add 10 to the value
//     · water – increase the value by 20%
//     · vacuum cleaner – increase the value by 25%
//     · mud – decrease the value by 10%

// The input comes as an array of strings. When finished cleaning the car, print 
// the resulting value in the format: `The car is {value}% clean.`
// Note: The value should be rounded to the second decimal point. 