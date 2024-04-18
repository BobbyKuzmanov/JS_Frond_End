function attachEventsListeners() {
    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');
    const daysBtnElement = document.getElementById('daysBtn');
    const hoursBtnElement = document.getElementById('hoursBtn');
    const minutesBtnElement = document.getElementById('minutesBtn');
    const secondsBtnElement = document.getElementById('secondsBtn');

    daysBtnElement.addEventListener('click', onDaysBtnClick);
    hoursBtnElement.addEventListener('click', onHoursBtnClick);
    minutesBtnElement.addEventListener('click', onMinutesBtnClick);
    secondsBtnElement.addEventListener('click', onSecondsBtnClick);

    function onDaysBtnClick() {
        const days = Number(daysInputElement.value);
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
        
    }

    function onHoursBtnClick() {
        const hours = Number(hoursInputElement.value);
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        daysInputElement.value = days;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    }

    function onMinutesBtnClick() {
        const minutes = Number(minutesInputElement.value);
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;
        hoursInputElement.value = hours;
        daysInputElement.value = days;
        secondsInputElement.value = seconds;
    }

    function onSecondsBtnClick() {
        const seconds = Number(secondsInputElement.value);
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        minutesInputElement.value = minutes;
        hoursInputElement.value = hours;
        daysInputElement.value = days;
    }
}

// A program that converts different time units.
//     Your task is to add a click event listener to all [CONVERT] buttons.
//     When a button is clicked, read the corresponding input field,
//     convert the value to the three other time units and display it in the input fields.
// One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click,
//     the input fields should change depending on the added value on the left.
// (For example, if we write 48 hours and click convert the days, the field value should change to 2).