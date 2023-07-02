function Calculate(num1, num2, operator) {
  const operation = {
    multiply: (x, y) => num1 * num2,
    divide: (x, y) => num1 / num2,
    add: (x, y) => num1 + num2,
    subtract: (x, y) => num1 - num2,
  };
  return operation[operator](num1, num2);
}

console.log(Calculate(40, 8, "divide"));
