function solve([horsesInput, ...input]) {
  const horses = horsesInput.split("|");

  let line;

  while ((line = input.shift()) !== "Finish") {
    const commandName = line.split(" ")[0];
    switch (commandName) {
      case "Retake":
        const overtakingHorse = line.split(" ")[1];
        const overtakenHorse = line.split(" ")[2];

        const indexOfOvertakingHorse = horses.indexOf(overtakingHorse);
        const indexOfOvertakenHorse = horses.indexOf(overtakenHorse);

        if (indexOfOvertakingHorse < indexOfOvertakenHorse) {
          horses[indexOfOvertakingHorse] = overtakenHorse;
          horses[indexOfOvertakenHorse] = overtakingHorse;
          console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }

        break;

      case "Trouble":
        const horseNameTrouble = line.split(" ")[1];
        const indexOfTroubleHorse = horses.indexOf(horseNameTrouble);
        if (indexOfTroubleHorse > 0) {
          const temp = horses[indexOfTroubleHorse - 1];
          horses[indexOfTroubleHorse - 1] = horseNameTrouble;
          horses[indexOfTroubleHorse] = temp;
          console.log(`Trouble for ${horseNameTrouble} - drops one position.`);
        }
        break;

      case "Rage":
        const horseNameRage = line.split(" ")[1];
        const indexOfRagingHorse = horses.indexOf(horseNameRage);
        if (indexOfRagingHorse === horses.length - 2) {
          const temp = horses[horses.length - 1];
          horses[horses.length - 2] = horses[horses.length - 1];
          horses[horses.length - 1] = horseNameRage;
        } else if (indexOfRagingHorse < horses.length - 1) {
          horses[indexOfRagingHorse] = horses[indexOfRagingHorse + 1];
          horses[indexOfRagingHorse + 1] = horses[indexOfRagingHorse + 2];
          horses[indexOfRagingHorse + 2] = horseNameRage;
        }
        console.log(`${horseNameRage} rages 2 positions ahead.`);

        break;

      case "Miracle":
        const firstHorse = horses.shift();
        horses.push(firstHorse);
        console.log(`What a miracle - ${firstHorse} becomes first.`);
        break;
    }
  }
  console.log(horses.join("->"));
  console.log(`The winner is: ${horses.pop()}`);
}

solve([
  "Onyx|Domino|Sugar",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Miracle",
  "Finish",
]);
