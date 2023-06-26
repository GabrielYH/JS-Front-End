function CalculateDifference(input) {
    let evenSum = 0;
    let oddSum = 0;
    input.forEach(element => {
        if (element % 2 == 0) {
            evenSum += element;
        }
        else {
            oddSum += element;
        }
    });
    console.log(evenSum - oddSum);
}



CalculateDifference([2, 4, 6, 8, 10])