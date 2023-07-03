function SumEvenAndOddDigits(num) {
  const numToString = num.toString();
  let sumEven = 0;
  let sumOdd = 0;
  for (const letter of numToString) {
    const digit = Number(letter);
    digit % 2 === 0 ? (sumEven += digit) : (sumOdd += digit);
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

SumEvenAndOddDigits(1000435);
