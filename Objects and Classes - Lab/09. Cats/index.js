function CatFactory(input) {
  for (const catInfo of input) {
    const [name, age] = catInfo.split(" ");
    let cat = {
      name: name,
      age: age,
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      },
    };
    cat.meow();
  }
}

CatFactory(["Mellow 2", "Tom 5"]);
