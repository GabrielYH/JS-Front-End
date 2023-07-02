function CheckSpeed(speedInput, area) {
    let speedLimit = 0;
    let status = "";
    switch (area) {
        case "motorway":
            speedLimit = 130;
            status =
                (speedInput - speedLimit <= 20 ? "speeding" :
                    (speedInput - speedLimit <= 40 ? "excessive speeding" : "reckless driving"));
            console.log(speedInput <= speedLimit ? `Driving ${speedInput} km/h in a ${speedLimit} zone` : `The speed is ${speedInput - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            break;

        case "interstate":
            speedLimit = 90;
            status =
                (speedInput - speedLimit <= 20 ? "speeding" :
                    (speedInput - speedLimit <= 40 ? "excessive speeding" : "reckless driving"));
            console.log(speedInput <= speedLimit ? `Driving ${speedInput} km/h in a ${speedLimit} zone` : `The speed is ${speedInput - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            break;
        case "city":
            speedLimit = 50;
            status =
                (speedInput - speedLimit <= 20 ? "speeding" :
                    (speedInput - speedLimit <= 40 ? "excessive speeding" : "reckless driving"));
            console.log(speedInput <= speedLimit ? `Driving ${speedInput} km/h in a ${speedLimit} zone` : `The speed is ${speedInput - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            break;
        case "residential":
            speedLimit = 20;
            status =
                (speedInput - speedLimit <= 20 ? "speeding" :
                    (speedInput - speedLimit <= 40 ? "excessive speeding" : "reckless driving"));
            console.log(speedInput <= speedLimit ? `Driving ${speedInput} km/h in a ${speedLimit} zone` : `The speed is ${speedInput - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            break;

        default:
            break;
    }
}

CheckSpeed(120, "interstate");