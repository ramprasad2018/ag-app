import api from "./Api"; // import your Api class

class WarehouseService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all warehouses
  async getWarehouses() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/warehouses`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a warehouse by id
  async getWarehouse({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/warehouses/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that adds a new warehouse
  async postWareHouse({ name, location, capacity }) {
    try {
      // call the post method of the Api class with the url path and the warehouse data
      const data = await this.api.post(`/warehouses`, {
        name,
        location,
        capacity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a warehouse
  async updateWarehouse({ id, name, location, capacity }) {
    try {
      // call the put method of the Api class with the url path and the warehouse data
      const data = await this.api.put(`/warehouses/${id}`, {
        name,
        location,
        capacity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a warehouse
  async deleteWarehouse({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/warehouses/${id}`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }
}

const warehouseService = new WarehouseService();

// export the instance as default or as a named export
export default warehouseService;

// export a new instance of the warehouseService class
//export default new warehouseService();

/*
This WarehouseService.js file provides the following methods:

getWarehouses(): Gets all warehouses.
getWarehouse(): Gets a warehouse by id.
postWareHouse(): Adds a new warehouse.
updateWarehouse(): Updates a warehouse.
deleteWarehouse(): Deletes a warehouse.
You can use these methods to manage warehouses in your React.js project.
*/
