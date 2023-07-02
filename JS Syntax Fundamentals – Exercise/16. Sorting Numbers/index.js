function SortNumbers(arrayInput) {
    let newArray = new Array;
    arrayInput.sort((a, b) => a - b);
    while (arrayInput.length !== 0){
        let tempMin = arrayInput.shift();
        newArray.push(tempMin);
        let tempMax = arrayInput.pop();
        newArray.push(tempMax);
    }
        return newArray;
}

SortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);