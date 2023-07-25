function solve() {
  const text = document.querySelector("#input").value;
  const sentences = text.split(".");
  sentences.pop();
  const sentencesCount = sentences.length;
  let stringToConcat = "";
  const output = document.querySelector("#output");
  let counter = 0;

  while (sentences.length > 0) {
    let createdParagraph = document.createElement("p");
    let sentence = sentences.shift();
    if (sentence.length > 1) {
      stringToConcat += sentence + ".";
      counter++;
      if (counter === 3) {
        createdParagraph.textContent = stringToConcat;
        output.appendChild(createdParagraph);
        counter = 0;  
        stringToConcat = "";
      } else if (sentences.length === 0) {
        createdParagraph.textContent = stringToConcat;
        output.appendChild(createdParagraph);
        counter = 0;
        stringToConcat = "";
      }
    }
  }
}
