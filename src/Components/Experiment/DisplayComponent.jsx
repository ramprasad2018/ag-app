import React from "react";
import { useSupplier } from "./SupplierContext.jsx"; // import the custom hook

// create a component that displays the supplier information
const DisplayComponent = () => {
  // use the custom hook to access the supplier object
  const { supplier } = useSupplier();

  return (
    <div>
      <h2>Display Component</h2>
      {supplier ? (
        <div>
          <p>Location: {supplier.getLocation()}</p>
          <p>Products: {supplier.getProductNames().join(", ")}</p>
        </div>
      ) : (
        <p>No supplier data</p>
      )}
    </div>
  );
};

export default DisplayComponent;
