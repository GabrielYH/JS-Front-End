function FindAndReplace(words, text) {
    let wordsArray = words.split(', ');
    for (const word of wordsArray) {
        let censoredCurrWord = "*".repeat(word.length);
        if (text.includes(censoredCurrWord)) {
            text = text.replace(censoredCurrWord, word);
        }
    }
    console.log(text);
}

FindAndReplace('great', 'softuni is ***** place for learning new programming languages');