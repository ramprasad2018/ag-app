import api from "./Api"; // import your Api class

class FarmService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that creates a new farm
  async createFarm({ name, location, owner }) {
    try {
      // call the post method of the Api class with the url path and the farm data
      const data = await this.api.post(`/farms`, { name, location, owner });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all farms
  async getAllFarms() {
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

  // define a method that updates a farm
  async updateFarm({ id, name, location, owner }) {
    try {
      // call the put method of the Api class with the url path and the farm data
      const data = await this.api.put(`/farms/${id}`, {
        name,
        location,
        owner,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a farm
  async deleteFarm({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/farms/${id}`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }

  // define a method that gets a farm's progress
  async getFarmProgress({ id }) {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/farms/${id}/progress`);
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

createFarm(): Creates a new farm.
getAllFarms(): Gets all farms.
updateFarm(): Updates a farm.
deleteFarm(): Deletes a farm.
getFarmProgress(): Gets a farm's progress.
You can use these methods to implement farm management in your React.js project.
*/
