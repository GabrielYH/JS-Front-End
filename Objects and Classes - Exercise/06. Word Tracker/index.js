function FindOccurences(input) {
  const wordsToLookFor = input[0].split(" ");
  const wordsToCheck = input.slice(1);

  class Word {
    constructor(name) {
      this.name = name;
      this.occurrences = 0;
    }

    toString() {
      return `${this.name} - ${this.occurrences}`;
    }
  }

  const listOfWords = new Array();

  for (const word of wordsToLookFor) {
    listOfWords.push(new Word(word));
  }

  for (const wordToBeMatched of wordsToCheck) {
    for (const member of listOfWords) {
      if (wordToBeMatched === member.name) {
        const currMember = listOfWords.find((w) => w.name === member.name);
        currMember.occurrences++;
      }
    }
  }
  listOfWords.sort((a, b) => b.occurrences - a.occurrences);
  for (const word of listOfWords) {
    console.log(word.toString());
  }
}

FindOccurences([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
