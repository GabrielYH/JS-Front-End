function ReverseArrayElements(num, array) {
    let arrayLenght = array.length;
    array.reverse();
    let newArray = new Array(num);
    for (let index = 0; index < newArray.length; index++) {
        newArray[index] = array[array.length - 1 - index];
    }

    console.log(newArray.reverse().join(" "));
}


ReverseArrayElements(4, [-1, 20, 99, 5])