function solve([n, ...input]) {
  const riders = [];
  for (let index = 0; index < n; index++) {
    const riderData = input[0].split("|");

    const riderObj = {
      name: riderData[0],
      fuelCapacity: Math.min(Number(riderData[1]), 100),
      position: Number(riderData[2]),
    };
    riders.push(riderObj);
    input.shift();
  }

  let line;
  while ((line = input.shift()) !== "Finish") {
    const command = line.split(" - ")[0];
    switch (command) {
      case "StopForFuel":
        const riderToRefuel = line.split(" - ")[1];
        const minimumFuel = line.split(" - ")[2];
        const changedPosition = line.split(" - ")[3];

        const rider = riders.find((r) => r.name === riderToRefuel);

        if (rider.fuelCapacity < minimumFuel) {
          rider.position = changedPosition;

          console.log(
            `${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`
          );
        } else {
          console.log(`${rider.name} does not need to stop for fuel!`);
        }
        break;

      case "Overtaking":
        const rider1 = line.split(" - ")[1];
        const rider2 = line.split(" - ")[2];

        const firstRider = riders.find((r) => r.name === rider1);
        const secondRider = riders.find((r) => r.name === rider2);
        if (firstRider.position < secondRider.position) {
          const temp = firstRider.position;
          firstRider.position = secondRider.position;
          secondRider.position = temp;
          console.log(`${firstRider.name} overtook ${secondRider.name}!`);
        }
        break;
      case "EngineFail":
        const riderName = line.split(" - ")[1];
        const lapsLeft = line.split(" - ")[2];
        const riderToRemove = riders.find((r) => r.name === riderName);
        const indexOfTheRider = riders.indexOf(riderToRemove);
        riders.splice(indexOfTheRider, 1);

        console.log(
          `${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
        );
        break;

      default:
        break;
    }
  }

  for (const rider of riders) {
    console.log(`${rider.name}`);
    console.log(`  Final position: ${rider.position}`);
  }
}

solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
