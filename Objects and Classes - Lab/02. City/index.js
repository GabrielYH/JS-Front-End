function PrintObjectValues(object) {
  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}

PrintObjectValues({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
