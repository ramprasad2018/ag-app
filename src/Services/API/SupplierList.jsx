import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import Service from "./service";
import { Post, Supplier } from "./entities.js";

// Create a service instance
const service = new Service();

// A react.js component that uses the service class for CRUD operations
function SupplierList() {
  // A state variable to store the supplier ID from the text box
  const [supplierId, setSupplierId] = useState("");

  // A function to handle getting all suppliers from the API
  const handleGetAllSuppliers = () => {
    // Use service.getAllSuppliers method to get all suppliers
    service.getAllSuppliers().then((response) => {
      // Print the data from the API in console
      console.log(response.data);
    });

    // Create a new post instance
    const post = new Post("My first post", "This is a test post");

    // Call the createPost1 method without await and use .then() to handle the promise
    service.createPost1(post).then((response) => {
      console.log("New post created:");
      console.log(response);
    });
  };

  // A function to handle getting a single supplier by id from the API
  const handleGetSupplierById = () => {
    // Use service.getSupplierById method to get a single supplier by id
    service.getSupplierById(supplierId).then((response) => {
      // Print the data from the API in console
      console.log(response.data);
    });
  };

  // A function to handle creating a new supplier and sending it to the API
  const handleCreateSupplier = () => {
    // Hard code the data for the new supplier
    const data = {
      name: "Namita",
      email: "namita@gmail.com",
      mobile: "+85291700192",
      user_id: "SUP002",
      password: "jan12345",
      company_reg_no: "REG002",
      location: "Berhampur",
      address: "Ganjam",
      area_coverage: "Odisha",
    };

    // Use service.createSupplier method to create a new supplier
    service.createSupplier(data).then((response) => {
      // Print the data from the API in console
      console.log(response.data);
    });
  };

  // A function to handle updating an existing supplier and sending it to the API
  const handleUpdateSupplier = () => {
    // Hard code the data for updating the supplier
    const data = {
      name: "Acme Inc.",
      location: "New York",
      address: "456 Broadway",
      products: [
        {
          name: "orange",
          price: "high",
          items: [
            {
              color: "orange",
              size: "medium",
            },
            {
              color: "pink",
              size: "small",
            },
          ],
        },
        {
          name: "grape",
          price: "low",
          items: [
            {
              color: "purple",
              size: "small",
            },
          ],
        },
      ],
    };

    // Use service.updateSupplier method to update an existing supplier by id
    service.updateSupplier(supplierId, data).then((response) => {
      // Print the data from the API in console
      console.log(response.data);
    });
  };

  // A function to handle deleting a supplier from the API
  const handleDeleteSupplier = () => {
    // Use service.deleteSupplier method to delete a supplier by id
    service.deleteSupplier(supplierId).then(() => {
      // Print a message in console
      console.log("Supplier deleted successfully");
    });
  };

  // Render the text box and buttons
  return (
    <div className="supplier-list">
      <h1>Suppliers</h1>
      <Input
        placeholder="Enter supplier ID"
        value={supplierId}
        onChange={(e) => setSupplierId(e.target.value)}
      />
      <Button onClick={handleGetAllSuppliers}>Get All Suppliers</Button>
      <Button onClick={handleGetSupplierById}>Get Supplier By ID</Button>
      <Button onClick={handleCreateSupplier}>Create Supplier</Button>
      <Button onClick={handleUpdateSupplier}>Update Supplier</Button>
      <Button onClick={handleDeleteSupplier}>Delete Supplier</Button>
    </div>
  );
}

export default SupplierList;
