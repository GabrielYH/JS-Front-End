function solve([n, ...input]) {
  const astronauts = [];
  for (let index = 0; index < n; index++) {
    const line = input[index].split(" ");
    const name = line[0];
    const oxygenLevel = Number(line[1]);
    const energy = Number(line[2]);

    const astroObj = {
      name: name,
      oxygenLevel: Math.max(0, Math.min(Number(line[1]), 100)), //-
      energy: Math.max(0, Math.min(Number(line[2]), 200)), //-
    };
    astronauts.push(astroObj);
  }

  for (let index = 0; index < n; index++) {
    input.shift();
  }
  let line;
  while ((line = input.shift()) !== "End") {
    const command = line.split(" - ")[0];
    const astronautName = line.split(" - ")[1];
    switch (command) {
      case "Explore":
        const energyNeeded = Number(line.split(" - ")[2]);
        const currAstronaut = astronauts.find((a) => a.name === astronautName);
        if (currAstronaut.energy >= energyNeeded) {
          currAstronaut.energy -= energyNeeded;
          console.log(
            `${currAstronaut.name} has successfully explored a new area and now has ${currAstronaut.energy} energy!`
          );
        } else {
          console.log(
            `${currAstronaut.name} does not have enough energy to explore!`
          );
        }
        break;

      case "Refuel":
        const refuelAmount = Number(line.split(" - ")[2]);
        const astronautToRefuel = astronauts.find(
          (a) => a.name === astronautName
        );
        const totalAmount = astronautToRefuel.energy + refuelAmount;

        if (totalAmount > 200) {
          const amount = 200 - astronautToRefuel.energy;
          astronautToRefuel.energy = 200;
          console.log(
            `${astronautToRefuel.name} refueled their energy by ${amount}!`
          );
        } else {
          const fuelBefore = astronautToRefuel.energy;
          astronautToRefuel.energy = totalAmount;
          console.log(
            `${astronautToRefuel.name} refueled their energy by ${
              totalAmount - fuelBefore
            }!`
          );
        }

        break;

      case "Breathe":
        const oxygenAmount = Number(line.split(" - ")[2]);
        const astronautToReplenishOxygen = astronauts.find(
          (a) => a.name === astronautName
        );
        const totalAmountOxygen =
          astronautToReplenishOxygen.oxygenLevel + oxygenAmount;

        if (totalAmountOxygen > 100) {
          const amount = 100 - astronautToReplenishOxygen.oxygenLevel;
          astronautToReplenishOxygen.oxygenLevel = 100;
          console.log(
            `${astronautToReplenishOxygen.name} took a breath and recovered ${amount} oxygen!`
          );
        } else {
          const oxygenBefore = astronautToReplenishOxygen.oxygenLevel;
          astronautToReplenishOxygen.oxygenLevel = totalAmountOxygen;
          console.log(
            `${astronautToReplenishOxygen.name} took a breathe and recovered ${
              totalAmountOxygen - oxygenBefore
            } oxygen!`
          );
        }
        break;
    }
  }
  for (const astronaut of astronauts) {
    console.log(
      `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energy}`
    );
  }
}

solve([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
