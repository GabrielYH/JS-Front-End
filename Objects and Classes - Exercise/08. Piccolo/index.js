function MonitorParkingCapacity(input) {
  const licenseNumbers = input.toString().split(/,(?=\w)/);
  let parking = {
    IN: new Array(),
  };
  for (const licenseNumberLine of licenseNumbers) {
    const [direction, licenseNumber] = licenseNumberLine.split(", ");
    if (direction === "IN") {
      if (!parking.IN.includes(licenseNumber)) {
        parking.IN.push(licenseNumber);
      }
    } else {
      if (parking.IN.includes(licenseNumber)) {
        const indexOfLicenseNumber = parking.IN.indexOf(licenseNumber);
        parking.IN.splice(indexOfLicenseNumber, 1);
      }
    }
  }
  if (parking.IN.length != 0) {
    parking.IN.sort((a, b) => a.localeCompare(b));
    console.log(parking.IN.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

MonitorParkingCapacity([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);
