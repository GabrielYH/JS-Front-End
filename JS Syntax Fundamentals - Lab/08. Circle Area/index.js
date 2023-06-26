function PrintRadius(argument) {
    if (typeof (argument) == 'number') {
        console.log(`${(Math.PI * argument * argument).toFixed(2)}`);
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (argument)}.`);
    }
}

PrintRadius(5)