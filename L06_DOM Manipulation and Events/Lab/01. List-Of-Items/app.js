function addItem() {
    // access elements
    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');
    // create new list item
    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value; // assign value from input element to new list item
    itemListElement.appendChild(newLiElement); // append new list item

    inputElement.value = ''; // clear input
}

//  A function that reads the text inside an input field and appends the specified text
// to a list inside an HTML page.
