import api from "./Api"; // import your Api class

class CommercialService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all warehouse availabilities
  async getWarehouseAvailabilities() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/warehouse-availabilities`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a warehouse availability by id
  async getWarehouseAvailability({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/warehouse-availabilities/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that adds a new warehouse availability
  async postWareHouseAvailability({ name, crop, quantity }) {
    try {
      // call the post method of the Api class with the url path and the warehouse availability data
      const data = await this.api.post(`/warehouse-availabilities`, {
        name,
        crop,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a warehouse availability
  async updateWarehouseAvailability({ id, name, crop, quantity }) {
    try {
      // call the put method of the Api class with the url path and the warehouse availability data
      const data = await this.api.put(`/warehouse-availabilities/${id}`, {
        name,
        crop,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a warehouse availability
  async deleteWarehouseAvailability({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/warehouse-availabilities/${id}`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }
}

const commercialService = new CommercialService();

// export the instance as default or as a named export
export default commercialService;

// export a new instance of the commercialService class
//export default new commercialService();
/*
This CommercialService.js file provides the following methods:

getWarehouseAvailabilities(): Gets all warehouse availabilities.
getWarehouseAvailability(): Gets a warehouse availability by id.
postWareHouseAvailability(): Adds a new warehouse availability.
updateWarehouseAvailability(): Updates a warehouse availability.
deleteWarehouseAvailability(): Deletes a warehouse availability.
You can use these methods to manage commercial agriculture in your React.js project.
*/
