function CountOccurrencesInText(text, word) {
    let counter = 0;
    let wordsArray = text.split(' ');
    wordsArray.forEach(element => {
        if (element == word) {
            counter++;
        }
    });
    console.log(counter);
}

CountOccurrencesInText('This is a word and it also is a sentence', 'is');