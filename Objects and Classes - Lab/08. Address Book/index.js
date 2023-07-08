function StoreDataAndPrintSorted(input) {
  const dictionary = {};
  const spliitedInput = input.toString().split(",");
  for (const dataLine of spliitedInput) {
    const [name, address] = dataLine.split(":");
    dictionary[name] = address;
  }

  let convertObjToString = JSON.stringify(dictionary);
  convertObjToString = convertObjToString.replace(/[{}]/g, "");
  convertObjToString = convertObjToString.replace(/"/g, "");

  const splittedStringArray = convertObjToString.split(",");
  splittedStringArray.sort();
  
  for (const data in splittedStringArray) {
    const [name, address] = splittedStringArray[data].split(":");
    console.log(`${name} -> ${address}`);
  }
}
StoreDataAndPrintSorted([
  [
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
  ],
]);
