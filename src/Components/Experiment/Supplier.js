// Example of a JavaScript class for nested JSON object
class Supplier {
  constructor(json) {
    this.json = json; // assign the JSON object to a property
  }

  // a method to get the location of the supplier
  getLocation() {
    return this.json.location;
  }

  // a method to get the names of the products
  getProductNames() {
    return this.json.products.map((product) => product.name);
  }

  // a method to add a new product
  addProduct(name, price, items) {
    this.json.products.push({ name, price, items });
  }

  // a method to delete a product by name
  deleteProduct(name) {
    this.json.products = this.json.products.filter(
      (product) => product.name !== name
    );
  }

  // a method to update a product by name
  updateProduct(name, newPrice, newItems) {
    let index = this.json.products.findIndex(
      (product) => product.name === name
    );
    if (index !== -1) {
      this.json.products[index].price = newPrice;
      this.json.products[index].items = newItems;
    }
  }

  // a method to get a product by name
  getProduct(name) {
    return this.json.products.find((product) => product.name === name);
  }

  // a method to convert the JSON object to a string
  toString() {
    return JSON.stringify(this.json);
  }
}

// export the class
module.exports = Supplier;
