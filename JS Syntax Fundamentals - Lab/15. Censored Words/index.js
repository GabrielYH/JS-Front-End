function CensoreWords(text, wordToCensore) {
    while (text.includes(wordToCensore)) {
        let censoredWord = "*".repeat(wordToCensore.length);
        text = text.replace(wordToCensore, censoredWord);
    }
    console.log(text);
}

CensoreWords('A small sentence with some words', 'small')