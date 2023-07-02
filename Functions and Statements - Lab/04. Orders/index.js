function CalculateTotalPrice(productInput, quantity) {
  const product = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };
  return (product[productInput] * quantity).toFixed(2);
}

console.log(CalculateTotalPrice("water", 5));
