function CreateObjectsAndPrintTheirData(input) {
  class Town {
    constructor(name, latitude, longtitude) {
      this.name = name;
      this.latitude = latitude;
      this.longtitude = longtitude;
    }
  }

  const townsArray = new Array();
  const inputSplitted = input.toString().split(",");
  for (const townInfo of inputSplitted) {
    const [name, latitude, longtitude] = townInfo.split(" | ");
    townsArray.push(new Town(name, latitude, longtitude));
  }

  townsArray.forEach((t) => {
    console.log(
      `{ town: '${t.name}', latitude: '${Number(t.latitude).toFixed(
        2
      )}', longitude: '${Number(t.longtitude).toFixed(2)}' }`
    );
  });
}

CreateObjectsAndPrintTheirData([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
