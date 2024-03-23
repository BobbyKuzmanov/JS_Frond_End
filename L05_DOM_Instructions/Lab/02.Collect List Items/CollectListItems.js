function extractText() {
    const itemsElements = document.getElementById('items');
    const textAreaElement = document.getElementById('result');
    
    textAreaElement.value = itemsElements.textContent;
}