function StoreProvision(currentStock, orderedProducts) {
  class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = Number(quantity);
    }
  }

  const store = new Array();
  for (let index = 0; index < currentStock.length - 1; index++) {
    if (index % 2 === 0) {
      if (!store.some((p) => p.name === currentStock[index])) {
        store.push(new Product(currentStock[index], currentStock[index + 1]));
      }
    }
  }

  for (let index = 0; index < orderedProducts.length - 1; index++) {
    if (index % 2 === 0) {
      if (!store.some((p) => p.name === orderedProducts[index])) {
        store.push(
          new Product(orderedProducts[index], orderedProducts[index + 1])
        );
      } else {
        let currObj = store.find((p) => p.name === orderedProducts[index]);
        currObj.quantity += Number(orderedProducts[index + 1]);
      }
    }
  }
  
  for (const product of store) {
    console.log(`${product.name} -> ${product.quantity}`);
  }
}

StoreProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
