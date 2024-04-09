function deleteByEmail() {
    const email = document.getElementsByName('email')[0].value;
    const table = document.getElementById('customers');
    const rows = table.getElementsByTagName('tr');
    const result = document.getElementById('result');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].textContent === email) {
            rows[i].remove();
            result.textContent = 'Deleted.';
            break;
        } else {
            result.textContent = 'Not found.';
        }
    }
}

// A program that takes an email from an input field and deletes the matching row from a table.
//     • If entry is found, the textContent in the element with id="result" must be set to "Deleted."
//     • Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found."
// Submit only the deleteByEmail() function in Judge.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.