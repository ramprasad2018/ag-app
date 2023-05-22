import React from "react";
import DisplayComponent from "./Components/Experiment/DisplayComponent";
import UpdateComponent from "./Components/Experiment/UpdateComponent";
//import SupplierList from "./Services/API/SupplierList";
import SuppliersView from "./Services/Post/SuppliersView";
import { SupplierProvider } from "./Components/Experiment/SupplierContext.jsx"; // import the provider

function App() {
  return (
    <div>
      <h1>React Context Example</h1>
      {/* wrap the components with the provider */}
      <SupplierProvider>
        {/* use the display and update components */}
        <DisplayComponent />
        <UpdateComponent />
      </SupplierProvider>
      <SuppliersView />
    </div>
  );
}

export default App;
