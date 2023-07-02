function TryToFindWord(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    text = text.split(" ");
    let isFound = false;
    for (const currWord of text) {
        if (word === currWord) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

TryToFindWord('javascript', 'JavaScript is the best programming language');