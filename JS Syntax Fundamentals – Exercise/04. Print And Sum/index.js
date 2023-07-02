function PrintInRangeAndCalculateSum(startNum, endNum) {
    let array = new Array;
    let sum = 0;
    for (let index = startNum; index <= endNum; index++) {
        array.push(index);
    }
    console.log(array.join(" "));
    for (const num of array) {
        sum += num;
    }
    console.log(`Sum: ${sum}`);
}

PrintInRangeAndCalculateSum(0, 26)