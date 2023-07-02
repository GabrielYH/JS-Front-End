function CheckEvenNums(input) {
    let convertedToText = input.toString();
    let firstChar = convertedToText[0];
    let counter = 0;
    let sum = 0;
    for (const char of convertedToText) {
        if (firstChar === char) {
            counter++;
        }
        let convertedToInt = parseInt(char);
        sum += convertedToInt;
    }

    console.log(convertedToText.length === counter ? "true" : "false")
    console.log(sum)
}

CheckEvenNums(1234);