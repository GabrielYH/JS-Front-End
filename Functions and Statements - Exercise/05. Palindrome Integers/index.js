function CheckPalindromeIntegers(array) {
  for (const number of array) {
    const numToString = number.toString().split("").reverse().join("");
    const numberReversed = Number(numToString);
    console.log(number === numberReversed ? "true" : "false");
  }
}

CheckPalindromeIntegers([32, 2, 232, 1010]);
