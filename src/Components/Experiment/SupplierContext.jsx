import React, { useState, createContext, useContext } from "react";
import Supplier from "./Supplier.js"; // import the class

// create a context for the supplier object
const SupplierContext = createContext(null);

// create a custom hook to access the supplier object
const useSupplier = () => {
  const supplier = useContext(SupplierContext);
  if (!supplier) {
    throw new Error("useSupplier must be used within a SupplierProvider");
  }
  return supplier;
};

// create a provider component that wraps the children components
const SupplierProvider = ({ children }) => {
  // create a state variable to store the supplier object
  const [supplier, setSupplier] = useState(null);

  // create a function to initialize the supplier object
  const initSupplier = (json) => {
    // create an instance of the class
    let supplier = new Supplier(json);

    // update the state variable
    setSupplier(supplier);
  };

  return (
    // pass the supplier object and the init function to the context value
    <SupplierContext.Provider value={{ supplier, initSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

export { SupplierContext, SupplierProvider, useSupplier };
