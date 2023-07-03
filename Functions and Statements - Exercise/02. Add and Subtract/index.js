function Calculate(num1, num2, num3) {
  function Sum(num1, num2) {
    return num1 + num2;
  }

  function Subtract(calculatedSum, num3) {
    return calculatedSum - num3;
  }

  return Subtract(Sum(num1, num2), num3);
}

console.log(Calculate(23, 6, 10));
