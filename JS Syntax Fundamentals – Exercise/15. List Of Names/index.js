function SortNamesAndPrintThemInBulletList(names) {
    names.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index <= names.length - 1; index++) {
        console.log(`${index + 1}.${names[index]}`);
    }
}

SortNamesAndPrintThemInBulletList(["John",
    "Bob",
    "Christina",
    "Ema"]);