import axios from "axios";

class Api {
  constructor() {
    // create a base instance of axios with default configuration
    this.instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com", // your base url
      timeout: 30000, // your timeout
      headers: { "Content-Type": "application/json" }, // your headers
    });
  }

  async getSpecificUser() {
    try {
      // make a get request using the instance and return the data
      console.log(
        `GET request to https://jsonplaceholder.typicode.com/users/1`
      );
      const response = await this.instance.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      return response.data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a get method that takes a url path and options
  async get(path, options) {
    try {
      // make a get request using the instance and return the data
      console.log(`GET request to ${this.instance.defaults.baseURL}${path}`);
      const response = await this.instance.get(path, options);
      return response.data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a post method that takes a url path, data and options
  async post(path, data, options) {
    try {
      // make a post request using the instance and return the data
      const response = await this.instance.post(path, data, options);
      return response.data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a put method that takes a url path, data and options
  async put(path, data, options) {
    try {
      // make a put request using the instance and return the data
      const response = await this.instance.put(path, data, options);
      return response.data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a delete method that takes a url path and options
  async delete(path, options) {
    try {
      // make a delete request using the instance and return the data
      const response = await this.instance.delete(path, options);
      return response.data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

// create a new instance of the class
const api = new Api();

// export the instance as default or as a named export
export default api;
// export a new instance of the Api class
//export default new Api();
