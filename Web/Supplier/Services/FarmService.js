import api from "./Api"; // import your Api class

class FarmService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all farms
  async getFarms() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/farms`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all planters
  async getPlanters() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/planters`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all crop plans
  async getCropPlans() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/crop-plans`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const farmService = new FarmService();

// export the instance as default or as a named export
export default farmService;

// export a new instance of the farmService class
//export default new farmService();

/*
This FarmService.js file provides the following methods:

getFarms(): Gets all farms.
getPlanters(): Gets all planters.
getCropPlans(): Gets all crop plans.
You can use these methods to manage farms in your React.js project.
*/
