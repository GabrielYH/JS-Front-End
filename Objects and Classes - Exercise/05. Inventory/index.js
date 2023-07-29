function StoreHeroesAndPrintData(input) {
  let party = new Array();

  class Hero {
    constructor(heroName, heroLevel, ...items) {
      this.heroName = heroName;
      this.heroLevel = heroLevel;
      this.items = items;
    }

    toString() {
      return `Hero: ${this.heroName}\nlevel => ${
        this.heroLevel
      }\nitems => ${this.items.join(", ")}`;
      //`Hero: ${this.heroName}\nlevel => ${this.heroLevel}\nitems => ${this.items.join(', ')}`;
    }
  }
  for (const heroDataLine of input) {
    const [heroName, heroLevel, ...items] = heroDataLine.split(" / ");
    party.push(new Hero(heroName, heroLevel, items));
  }

  party.sort((a, b) => a.heroLevel - b.heroLevel);

  for (const hero of party) {
    console.log(hero.toString());
  }
}

StoreHeroesAndPrintData([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
