function processCrystals(input) {
    const targetThickness = input[0];

    function cut(crystal) { return crystal / 4; }
    function lap(crystal) { return crystal * 0.8; }
    function grind(crystal) { return crystal - 20; }
    function etch(crystal) { return crystal - 2; }
    function xray(crystal) { return crystal + 1; }
    function transportAndWash(crystal) { return Math.floor(crystal); }

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);

        let operations = [
            { name: "Cut", operation: cut, count: 0 },
            { name: "Lap", operation: lap, count: 0 },
            { name: "Grind", operation: grind, count: 0 },
            { name: "Etch", operation: etch, count: 0 },
        ];

        for (let op of operations) {
            while (op.operation(crystal) >= targetThickness || Math.floor(op.operation(crystal)) === targetThickness - 1) {
                crystal = op.operation(crystal);
                op.count++;
            }
            if (op.count > 0) {
                console.log(`${op.name} x${op.count}`);
                crystal = transportAndWash(crystal);
                console.log("Transporting and washing");
            }
        }

        // X-ray should be used carefully since it can only be done once
        if (crystal < targetThickness) {
            crystal = xray(crystal);
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${crystal} microns`);
    }
}

// Example Usage:
processCrystals([1375, 50000]);
processCrystals([1000, 4000, 8100]);

// You need to write a JS program that monitors the current thickness of the crystal 
// and recommends the next procedure that will bring it closer to the desired frequency.
//  To reduce waste and the time it takes to make each crystal your program needs to 
//  complete the process with the least number of operations. Each operation takes the 
//  same amount of time, but since they are done at different parts of the factory, 
//  the crystals have to be transported and thoroughly washed every time an operation 
//  different from the previous must be performed, so this must also be taken into account.
//   When determining the order, always attempt to start from the
//    operation that removes the largest amount of material.

// The different operations you can perform are the following:
//     · Cut – cuts the crystal in 4
//     · Lap – removes 20% of the crystal’s thickness
//     · Grind – removes 20 microns of thickness
//     · Etch – removes 2 microns of thickness
//     · X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
//     · Transporting and washing – removes any imperfections smaller than
//     1 micron (round down the number); do this after every batch of operations that remove material

// At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and the number of times they need to be repeated to bring them to the desired thickness.
// The input comes as a numeric array with a variable number of elements. The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
// The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples for more information.
