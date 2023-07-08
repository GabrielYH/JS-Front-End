function ManageMeetings(input) {
  const plannedSchedule = {};
  const splitted = input.toString().split(",");
  for (const appointment of splitted) {
    const [day, name] = appointment.split(" ");
    if (!plannedSchedule.hasOwnProperty(day)) {
      plannedSchedule[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  const realSchedule = {};
  for (const key in plannedSchedule) {
    console.log(`${key} -> ${plannedSchedule[key]}`);
  }
}
ManageMeetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
