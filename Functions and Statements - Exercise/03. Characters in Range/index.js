function PrintCharsInRange(char1, char2) {
  const char1AsciiNumber = char1.charCodeAt(0);
  const char2AsciiNumber = char2.charCodeAt(0);
  let result = "";
  if (char1AsciiNumber < char2AsciiNumber) {
    for (let index = char1AsciiNumber+1; index < char2AsciiNumber; index++) {
      result += String.fromCharCode(index) + " ";
    }
  } else {
    for (let index = char2AsciiNumber+1; index < char1AsciiNumber; index++) {
        result += String.fromCharCode(index) + " ";
    }
  }
  return result.trimEnd();
}

console.log(PrintCharsInRange("C", "#"));
