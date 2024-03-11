function phoneBook(book){

    let output = {};

    for (let data of book) {
        let [name, number] = data.split(' ');
        output[name] = number;
    }

    for (const [key, value] of Object.entries(output)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566345'])


// A function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number.
//  Replace duplicate names.