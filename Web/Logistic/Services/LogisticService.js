import api from "./Api"; // import your Api class

class LogisticService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all of the vehicles
  async getVehicles() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get("/vehicles");
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific vehicle
  async getVehicle({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/vehicles/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that creates a new vehicle
  async postVehicle({ vehicle }) {
    try {
      // call the post method of the Api class with the url path and the vehicle object
      const data = await this.api.post("/vehicles", vehicle);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates an existing vehicle
  async updateVehicle({ id, vehicle }) {
    try {
      // call the put method of the Api class with the url path, id, and vehicle object
      const data = await this.api.put(`/vehicles/${id}`, vehicle);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a vehicle
  async deleteVehicle({ id }) {
    try {
      // call the delete method of the Api class with the url path and the id parameter
      const data = await this.api.delete(`/vehicles/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all of the routes
  async getRoutes() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get("/routes");
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific route
  async getRoute({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/routes/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that creates a new route
  async postRoute({ route }) {
    try {
      // call the post method of the Api class with the url path and the route object
      const data = await this.api.post("/routes", route);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates an existing route
  async updateRoute({ id, route }) {
    try {
      // call the put method of the Api class with the url path, id, and route object
      const data = await this.api.put(`/routes/${id}`, route);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a route
  async deleteRoute({ id }) {
    try {
      // call the delete method of the Api class with the url path and the id parameter
      const data = await this.api.delete(`/routes/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const logisticService = new LogisticService();

// export the instance as default or as a named export
export default logisticService;

// export a new instance of the logisticService class
//export default new logisticService();
