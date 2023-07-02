function SplitPascalCaseSentence(input) {
    let words = input.split(/(?=[A-Z])/);
    console.log(words.join(", "));
}

SplitPascalCaseSentence('SplitMeIfYouCanHaHaYouCantOrYouCan');