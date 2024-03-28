function sumTable() {
    const tdCostElement = document.querySelectorAll('td:nth-child(2)');
    let sum = 0;
    for (const td of tdCostElement) {
        sum += Number(td.textContent);
    }
    document.getElementById('sum').textContent = sum;
    
}