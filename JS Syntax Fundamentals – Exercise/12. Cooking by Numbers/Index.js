function DoCalculationsBasedOnOperator(number, operation1, operation2, operation3, operation4, operation5) {
    number = Number(number);
    let operations = [operation1, operation2, operation3, operation4, operation5];
    for (const operand of operations) {
        switch (operand) {
            case "chop":
                number /= 2;
                break;

            case "dice":
                number = Math.sqrt(number);
                break;

            case "spice":
                number += 1;
                break;

            case "bake":
                number *= 3;
                break;

            case "fillet":
                number -= number * 0.2;
                break;

            default:
                break;
        }
        console.log(number);
    }
}

DoCalculationsBasedOnOperator('9', 'dice', 'spice', 'chop', 'bake',
'fillet');