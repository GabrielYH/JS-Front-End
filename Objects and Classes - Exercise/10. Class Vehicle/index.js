class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      engine: parts.engine,
      power: parts.power,
      quality: Number(parts.engine) * Number(parts.power),
    };
    this.fuel = fuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}
