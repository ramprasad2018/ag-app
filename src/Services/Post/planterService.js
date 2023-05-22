// farmService.js

import api from "./Api"; // import your Api class

class planterService {
  onstructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets a user by id for the farm service
  async getUserById({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/users/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // ... define other methods for the farm service
}

// export a new instance of the farmService class
export default new planterService();
