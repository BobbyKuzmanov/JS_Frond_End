function isDistanceValid(points) {
    const [x1, y1, x2, y2] = points;
    
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    function isInteger(value) {
        return Number.isInteger(value);
    }
    
    const distance1toOrigin = calculateDistance(x1, y1, 0, 0);
    const distance2toOrigin = calculateDistance(x2, y2, 0, 0);
    const distanceBetweenPoints = calculateDistance(x1, y1, x2, y2);
    
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${isInteger(distance1toOrigin) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${isInteger(distance2toOrigin) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isInteger(distanceBetweenPoints) ? 'valid' : 'invalid'}`);
}

isDistanceValid([3, 0, 0, 4]);


// AJS program that receives two points in the format [x1, y1, x2, y2] and checks 
// if the distances between each point (x, y) and the start of the Cartesian 
// coordinate system (0, 0) and between the points themselves is valid. A distance between
//  two points is considered valid if it is an integer value.

//     · In case a distance is valid print: `{x1, y1} to {x2, y2} is valid`
//     · In case the distance is invalid print: `{x1, y1} to {x2, y2} is invalid`

// The order of comparisons should always be first {x1, y1} to {0, 0}, 
// then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
// The input consists of two points given as an array of numbers. 