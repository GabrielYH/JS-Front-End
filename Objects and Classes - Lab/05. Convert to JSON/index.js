function ConvertFromObjToJSON(name, lastName, hairColor) {
  const person = {
    name,
    lastName,
    hairColor,
  };
  console.log(JSON.stringify(person));
}

ConvertFromObjToJSON("George", "Jones", "Brown");
