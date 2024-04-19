function lockedProfile() {

    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
    button.addEventListener('click', toggle);
    }
    function toggle(event) {
        const profile = event.target.parentNode;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        const info = profile.querySelector('div');
        if (isActive) {
            if (event.target.textContent === 'Show more') {
                info.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                info.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}

// In this problem, you should create a JS functionality that shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!
// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.
