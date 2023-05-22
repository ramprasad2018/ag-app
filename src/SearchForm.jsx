import React, { Component } from "react";
import axios from "axios";

export default class SearchForm extends Component {
  // Declare the state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      criteria: {
        location: "",
        products: [],
      },
      suppliers: [],
    };
  }

  // Declare a function to handle the change of the location input
  handleLocationChange = (event) => {
    // Update the criteria with the new location value
    this.setState({
      criteria: {
        ...this.state.criteria,
        location: event.target.value,
      },
    });
  };

  // Declare a function to handle the change of the product input
  handleProductChange = (event) => {
    // Get the name and value of the input
    const { name, value } = event.target;

    // Find the index of the product in the criteria
    const index = this.state.criteria.products.findIndex(
      (product) => product.name === name
    );

    // If the product is not in the criteria, add it with the value
    if (index === -1) {
      this.setState({
        criteria: {
          ...this.state.criteria,
          products: [...this.state.criteria.products, { name, price: value }],
        },
      });
    } else {
      // If the product is in the criteria, update its value
      this.setState({
        criteria: {
          ...this.state.criteria,
          products: this.state.criteria.products.map((product) =>
            product.name === name ? { ...product, price: value } : product
          ),
        },
      });
    }
  };

  // Declare a function to handle the change of the item input
  handleItemChange = (event) => {
    // Get the name and value of the input
    const { name, value } = event.target;

    // Split the name by underscore to get the product name and item attribute
    const [productName, itemAttribute] = name.split("_");

    // Find the index of the product in the criteria
    const productIndex = this.state.criteria.products.findIndex(
      (product) => product.name === productName
    );

    // If the product is not in the criteria, return early
    if (productIndex === -1) return;
    // Find the index of the item in the product items array
    const itemIndex = this.state.criteria.products[productIndex].items?.findIndex(
        (item) => item[itemAttribute] === value
      );
  
      // If the item is not in the product items array, add it with the value
      if (itemIndex === -1) {
        this.setState({
          criteria: {
            ...this.state.criteria,
            products: this.state.criteria.products.map((product, index) =>
              index === productIndex
                ? {
                    ...product,
                    items: [
                      ...(product.items || []),
                      { [itemAttribute]: value },
                    ],
                  }
                : product
            ),
          },
        });
      } else {
        // If the item is in the product items array, update its value
        this.setState({
          criteria: {
            ...this.state.criteria,
            products: this.state.criteria.products.map((product, index) =>
              index === productIndex
                ? {
                    ...product,
                    items: product.items?.map((item, index) =>
                      index === itemIndex ? { ...item, [itemAttribute]: value } : item
                    ),
                  }
                : product
            ),
          },
        });
      }
    };
  
    // Declare a function to handle the submit of the form
    handleSubmit = (event) => {
      // Prevent the default browser behavior
      event.preventDefault();
  
      // Make a GET request to the API with axios
      axios
        .get("http://localhost:8000/get-suppliers", {
          // Pass the criteria as a query parameter
          params: {
            criteria: JSON.stringify(this.state.criteria),
          },
        })
        .then((response) => {
          // Update the suppliers with the response data
          this.setState({
            suppliers: response.data,
          });
        })
        .catch((error) => {
          // Handle the error if any
          console.error(error);
        });
    };
  
    render() {
      return (
        <div className="SearchForm">
          <h1>React + Axios Example</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              value={this.state.criteria.location}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="apple">Apple:</label>
            <input
              id="apple"
              type="text"
              name="apple"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "apple"
                )?.price || ""
              }
              onChange={this.handleProductChange}
            />
            <label htmlFor="apple_color">Apple Color:</label>
            <input
              id="apple_color"
              type="text"
              name="apple_color"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "apple"
                )?.items?.[0]?.color || ""
              }
              onChange={this.handleItemChange}
            />
            <label htmlFor="apple_size">Apple Size:</label>
            <input
              id="apple_size"
              type="text"
              name="apple_size"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "apple"
                )?.items?.[0]?.size || ""
              }
              onChange={this.handleItemChange}
            />
            <label htmlFor="banana">Banana:</label>
            <input
              id="banana"
              type="text"
              name="banana"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "banana"
                )?.price || ""
              }
              onChange={this.handleProductChange}
            />
            <label htmlFor="banana_color">Banana Color:</label>
            <input
              id="banana_color"
              type="text"
              name="banana_color"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "banana"
                )?.items?.[0]?.color || ""
              }
              onChange={this.handleItemChange}
            />
            <label htmlFor="banana_size">Banana Size:</label>
            <input
              id="banana_size"
              type="text"
              name="banana_size"
              value={
                this.state.criteria.products.find(
                  (product) => product.name === "banana"
                )?.items?.[0]?.size || ""
              }
              onChange={this.handleItemChange}
            />
                      <button type="submit">Search</button>
        </form>
        <h2>Suppliers</h2>
        <ul>
          {this.state.suppliers.map((supplier) => (
            <li key={supplier.id}>{supplier.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
