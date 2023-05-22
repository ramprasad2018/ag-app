import React from "react";
import { useSupplier } from "./SupplierContext.jsx"; // import the custom hook

// create a component that updates the supplier information
const UpdateComponent = () => {
  // use the custom hook to access the supplier object and the init function
  const { supplier, initSupplier } = useSupplier();

  // create a hard coded JSON object
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
    // use the init function to initialize the supplier object with the hard coded value
    initSupplier(json);
    // use the supplier variable somewhere in your code
    console.log(supplier);
  };

  return (
    <div>
      <h2>Update Component</h2>
      <button onClick={handleClick}>Init Supplier Data</button>
    </div>
  );
};

export default UpdateComponent;
