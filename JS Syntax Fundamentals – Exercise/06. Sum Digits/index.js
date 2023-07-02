function SumDigits(input) {
    let sum = 0;
    let text = input.toString();
    for (const char of text) {
        let convertedCharToDigit = parseInt(char);
        sum += convertedCharToDigit;
    }
    console.log(sum);
}

SumDigits(245678);