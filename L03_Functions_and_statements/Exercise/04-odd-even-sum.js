function oddEvenSum(number) {

 let oddSum = 0;
 let evenSum = 0;

 let numberToString = number.toString();
 for (let i = 0; i < numberToString.length; i++) {
  let currentNumber = Number(numberToString[i]);

  if (currentNumber % 2 === 0) {
   evenSum += currentNumber;
  } else {
   oddSum += currentNumber;
  }
 }
 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(3495892137259234)

// You will receive a single number. You have to write a function, 
// that returns the sum of all even and all odd digits from that number. 