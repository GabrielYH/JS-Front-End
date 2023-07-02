function DeterminePrice(peopleCount, typeOfGroup, dayOfWeek) {
    let price = 0;
    switch (typeOfGroup) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday": price = peopleCount >= 30 ? ((8.45 - 8.45 * 0.15) * peopleCount) : (8.45 * peopleCount); break;
                case "Saturday": price = peopleCount >= 30 ? ((9.80 - 9.80 * 0.15) * peopleCount) : (9.80 * peopleCount); break;
                case "Sunday": price = peopleCount >= 30 ? ((10.46 - 10.46 * 0.15) * peopleCount) : (10.46 * peopleCount); break;
            }
            break;

        case "Business":
            switch (dayOfWeek) {
                case "Friday": price = peopleCount >= 100 ? (10.90 * (peopleCount - 10)) : (10.90 * peopleCount); break;
                case "Saturday": price = peopleCount >= 100 ? (15.60 * (peopleCount - 10)) : (15.60 * peopleCount); break;
                case "Sunday": price = peopleCount >= 100 ? (16 * (peopleCount - 10)) : (16 * peopleCount); break;
            }
            break;

        case "Regular":
            switch (dayOfWeek) {
                case "Friday": price = peopleCount >= 10 && peopleCount <= 20 ? ((15 - 15 * 0.05) * peopleCount) : (15 * peopleCount); break;
                case "Saturday": price = peopleCount >= 10 && peopleCount <= 20 ? ((20 - 20 * 0.05) * peopleCount) : (20 * peopleCount); break;
                case "Sunday": price = peopleCount >= 10 && peopleCount <= 20 ? ((22.50 - 22.50 * 0.05) * peopleCount) : (22.50 * peopleCount); break;
            }
            break;

    }
    console.log(`Total price: ${price.toFixed(2)}`)
}

DeterminePrice(40, "Business", "Saturday")