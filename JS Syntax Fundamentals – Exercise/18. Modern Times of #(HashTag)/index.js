function FindSpecialWords(input) {
    let specialWordsCollected = input.match(/#[a-zA-Z]+/g);
    console.log(specialWordsCollected.map(t=> t.slice(1)).join("\n"));
}

FindSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
