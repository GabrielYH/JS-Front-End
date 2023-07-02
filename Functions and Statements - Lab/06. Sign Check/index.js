function DetermineIfTheResultIsNegative(num1, num2, num3) {
  let counter = 0;
  const array = [num1, num2, num3];
  for (const number of array) {
    if (number < 0) {
      counter++;
    }
  }
  console.log(counter % 2 === 0 ? "Positive" : "Negative");
}

DetermineIfTheResultIsNegative(-5,-12,-15);
