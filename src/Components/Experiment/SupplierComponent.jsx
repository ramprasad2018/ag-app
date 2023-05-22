import React, { useState } from "react";
import Supplier from "./Supplier.js"; // import the class

const SupplierComponent = () => {
  // create a state variable to store the supplier instance
  const [supplier, setSupplier] = useState(null);

  // create a JSON object
  let json = {
    location: "Seattle",
    products: [
      {
        name: "apple",
        price: "medium",
        items: [
          {
            color: "red",
            size: "large",
          },
          {
            color: "green",
            size: "small",
          },
        ],
      },
      {
        name: "banana",
        price: "low",
        items: [
          {
            color: "yellow",
            size: "medium",
          },
        ],
      },
    ],
  };

  // create a function to handle the button click
  const handleClick = () => {
    // create an instance of the class
    let supplier = new Supplier(json);

    // use the methods
    console.log("Location:", supplier.getLocation());
    console.log("Products:", supplier.getProductNames().join(", "));
    supplier.addProduct("orange", "high", [
      { color: "orange", size: "medium" },
      { color: "orange", size: "large" },
    ]);
    console.log("Added a new product:", supplier.getProduct("orange"));
    supplier.deleteProduct("banana");
    console.log("Deleted a product:", supplier.getProductNames().join(", "));
    supplier.updateProduct("apple", "low", [
      { color: "red", size: "small" },
      { color: "green", size: "large" },
    ]);
    console.log("Updated a product:", supplier.getProduct("apple"));
    console.log("JSON string:", supplier.toString());

    // update the state variable
    setSupplier(supplier);
  };

  return (
    <div>
      <h2>Button Component</h2>
      <button onClick={handleClick}>Run Supplier Code</button>
      {supplier && (
        <div>
          <p>Location: {supplier.getLocation()}</p>
          <p>Products: {supplier.getProductNames().join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default SupplierComponent;
