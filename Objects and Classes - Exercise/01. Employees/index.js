function PrintEmployees(input) {
  const splittedNamesArray = input.toString().split(",");
  splittedNamesArray.forEach((n) => {
    console.log(`Name: ${n} -- Personal Number: ${n.length}`);
  });
}
PrintEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
