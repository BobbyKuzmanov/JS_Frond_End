function validate() {
    const emailInput = document.getElementById('email');

    const isValidEmail = (email) => {
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = () => {
        const email = emailInput.value.trim().toLowerCase();
        if (isValidEmail(email)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    };

    emailInput.addEventListener('change', handleInputChange);
}


// A function that dynamically validates an email input field when it is changed.
//     If the input is invalid, apply the class "error". Do not validate on every keystroke,
//     as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email.
// If the input is valid, clear the style. Submit only the validate() function in Judge.
