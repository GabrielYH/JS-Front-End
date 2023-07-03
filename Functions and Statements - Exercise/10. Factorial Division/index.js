function CalculateFactorialsOfTwoNumbers(num1, num2) {
  function CalcualteFactorial(num) {
    let result = 1;
    for (let index = 1; index <= num; index++) {
      result *= index;
    }
    return result;
  }
  console.log((CalcualteFactorial(num1) / CalcualteFactorial(num2)).toFixed(2));
}

CalculateFactorialsOfTwoNumbers(6, 2);
