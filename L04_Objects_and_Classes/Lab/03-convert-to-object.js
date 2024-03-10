function convertToObject(json) {
    let obj = JSON.parse(json);


    for (let[key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');


// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"
// Use JSON.parse() method to parse JSON string to an object