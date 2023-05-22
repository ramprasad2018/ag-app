import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/suppliers"; // change this to your API URL

function SupplierCRUD() {
  const [id, setId] = useState(""); // state for storing supplier id

  // function for creating a new supplier
  const createSupplier = () => {
    // hard-coded supplier object
    const supplier = {
      name: "Name1",
      email: "name1@gmail.com",
      mobile: "+85291700192",
      user_id: "SUP001",
      password: "jan12345",
      company_reg_no: "REG001",
      location: "Cavite",
      address: "101 MG Road, Cavite",
      area_coverage: "Cavite, negros",
    };

    // send POST request to the API
    axios
      .post(baseURL, supplier)
      .then((response) => {
        // log the response data
        console.log(response.data);
      })
      .catch((error) => {
        // log the error
        console.error(error);
      });
  };

  // function for getting all suppliers
  const getAllSuppliers = () => {
    // send GET request to the API
    axios
      .get(baseURL)
      .then((response) => {
        // log the response data
        console.log(response.data);
      })
      .catch((error) => {
        // log the error
        console.error(error);
      });
  };

  // function for getting a specific supplier by id
  const getSupplierById = () => {
    // check if id is not empty
    if (id) {
      // send GET request to the API with id parameter
      axios
        .get(`${baseURL}/${id}`)
        .then((response) => {
          // log the response data
          console.log(response.data);
        })
        .catch((error) => {
          // log the error
          console.error(error);
        });
    } else {
      // alert the user to enter an id
      alert("Please enter a supplier id");
    }
  };

  // function for updating a specific supplier by id
  const updateSupplierById = () => {
    // check if id is not empty
    if (id) {
      // hard-coded supplier object with updated values
      const updatedSupplier = {
        name: "Name2",
        email: "name2@gmail.com",
        mobile: "+85291700193",
        user_id: "SUP002",
        password: "jan12346",
        company_reg_no: "REG002",
        location: "Manila",
        address: "102 MG Road, Manila",
        area_coverage: "Manila, Cebu",
      };

      // send PUT request to the API with id parameter and updated supplier object
      axios
        .put(`${baseURL}/${id}`, updatedSupplier)
        .then((response) => {
          // log the response data
          console.log(response.data);
        })
        .catch((error) => {
          // log the error
          console.error(error);
        });
    } else {
      // alert the user to enter an id
      alert("Please enter a supplier id");
    }
  };

  // function for deleting a specific supplier by id
  const deleteSupplierById = () => {
    // check if id is not empty
    if (id) {
      // send DELETE request to the API with id parameter
      axios
        .delete(`${baseURL}/${id}`)
        .then((response) => {
          // log the response data
          // log the response data
          console.log(response.data);
        })
        .catch((error) => {
          // log the error
          console.error(error);
        });
    } else {
      // alert the user to enter an id
      alert("Please enter a supplier id");
    }
  };

  // function for handling input change
  const handleInputChange = (event) => {
    // set the id state to the input value
    setId(event.target.value);
  };

  return (
    <div className="container">
      <h1>Supplier CRUD</h1>
      <div className="buttons">
        <button onClick={createSupplier}>Post Supplier</button>
        <button onClick={getAllSuppliers}>Get All Suppliers</button>
        <button onClick={getSupplierById}>Get Specific Supplier</button>
        <button onClick={updateSupplierById}>Update a Supplier</button>
        <button onClick={deleteSupplierById}>Delete a Supplier</button>
      </div>
      <div className="input">
        <label>Enter Supplier Id:</label>
        <input type="text" value={id} onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default SupplierCRUD;
