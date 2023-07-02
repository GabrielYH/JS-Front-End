function PrintNthElementFromArray(arrayInput, position) {
    let newArray = new Array;
    for (let index = 0; index <= arrayInput.length - 1; index+=position) {
        newArray.push(arrayInput[index]);
    }
    
    return newArray;
}

PrintNthElementFromArray(['5', '20', '31', '4', '20'], 2);