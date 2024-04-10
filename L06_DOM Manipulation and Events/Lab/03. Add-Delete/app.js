function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');
    
    const newLiElement = document.createElement('li'); // create new list item
    newLiElement.textContent = inputElement.value; // assign value from input element to new list item
    itemListElement.appendChild(newLiElement); // append new list item

    inputElement.value = '';

    const deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    newLiElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });
}

// Displaying a [Delete] link after each list item.
//     Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.