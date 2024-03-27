function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');

    for (const row of evenRowElements) {
        row.style.backgroundColor = 'Teal';
    }
}