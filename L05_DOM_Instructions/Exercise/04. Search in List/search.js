function search() {
    let searchText = document.getElementById('searchText').value;
    let towns = document.querySelectorAll('#towns li');
    let result = document.getElementById('result');
    let matches = 0;

    for (const town of towns) {
        if (town.textContent.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }

    result.textContent = `${matches} matches found`;
}