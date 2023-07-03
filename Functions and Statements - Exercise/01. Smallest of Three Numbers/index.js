function GetSmallestNumber(num1, num2, num3) {
  const array = [num1, num2, num3];
  console.log(Math.min(...array));
}

GetSmallestNumber(20, -1, 10);
