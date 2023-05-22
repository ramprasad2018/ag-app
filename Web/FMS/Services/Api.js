import axios from "axios";

// Define a class called Api
class Api {
  // Define a constructor that creates an axios instance with a base URL
  constructor() {
    this.api = axios.create({
      baseURL: "http://127.0.0.1:8000",
    });
  }

  // Define a static method that returns a singleton instance of the Api class
  static getInstance() {
    // If there is no instance, create one and assign it to a static property
    if (!Api.instance) {
      Api.instance = new Api();
    }
    // Return the instance
    return Api.instance;
  }

  // Define a method to make a GET request
  get(url, config) {
    return this.api.get(url, config);
  }

  // Define a method to make a POST request
  post(url, data, config) {
    return this.api.post(url, data, config);
  }

  // Define a method to make a PUT request
  put(url, data, config) {
    return this.api.put(url, data, config);
  }

  // Define a method to make a DELETE request
  delete(url, config) {
    return this.api.delete(url, config);
  }
}

// Export the Api class
export default Api;
