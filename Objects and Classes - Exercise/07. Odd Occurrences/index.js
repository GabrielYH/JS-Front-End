function ExtractOddOccurences(input) {
  const splittedInput = input.split(" ").map((w) => w.toLowerCase());
  let oddOccurences = [];
  for (const word of splittedInput) {
    const wordFound = oddOccurences.find((item) => item[0] === word);
    if (!wordFound) {
      oddOccurences.push([word, 1]);
    } else {
      wordFound[1]++;
    }
  }
  oddOccurences = oddOccurences.filter((item) => item[1] % 2 !== 0);
  const words = oddOccurences.map((item) => item[0]);
  console.log(words.join(" "));
}

ExtractOddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
