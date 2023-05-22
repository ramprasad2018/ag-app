// farmService.js

import api from "./Api"; // import your Api class

class FarmService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets a user by id for the farm service
  async getUserById({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/users/${id}`);
      //const data = await this.api.getSpecificUser();
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // ... define other methods for the farm service
}

const farmService = new FarmService();

// export the instance as default or as a named export
export default farmService;

// export a new instance of the farmService class
//export default new farmService();
