function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');
    result.textContent = Number(firstNumber) - Number(secondNumber);
    
    console.log(result); 
}
