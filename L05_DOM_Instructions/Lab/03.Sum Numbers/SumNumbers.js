function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);

    const sum = firstNumber + secondNumber;

    sumElement.value = sum;
}
