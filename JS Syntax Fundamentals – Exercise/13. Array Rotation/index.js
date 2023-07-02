function RotateArray(arrayInput, timesToRotate) {
    for (let index = 0; index < timesToRotate; index++) {
        let temp = arrayInput.shift();
        arrayInput.push(temp);
    }
    console.log(arrayInput.join(" "));
}

RotateArray([51, 47, 32, 61, 21], 2)