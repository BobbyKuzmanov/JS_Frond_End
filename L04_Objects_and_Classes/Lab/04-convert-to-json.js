function convertToJson(name, lastName, hairColor) {

    let person = {};

    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    console.log(JSON.stringify(person));

}


convertToJson('George', 'Jones', 'Brown');


// A function that receives a first name, last name, hair color and sets
//  them to an object.Convert the object to JSON string and print it.