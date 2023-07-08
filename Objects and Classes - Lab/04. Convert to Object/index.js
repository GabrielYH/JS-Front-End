function ConvertFromJSONtoOBject(input) {
  const obj = JSON.parse(input);
  for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

ConvertFromJSONtoOBject('{"name": "George", "age": 40, "town": "Sofia"}');
