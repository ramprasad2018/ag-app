// commercialService.js

import api from "./Api"; // import your Api class

class CommercialService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets a list of vehicle availabilities for the commercial service
  async getVehiclesAvailabilities() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get("/vehicles/availabilities");
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific vehicle availability for the commercial service
  async getVehicleAvailability({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/vehicles/availabilities/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that creates a new vehicle availability for the commercial service
  async postVehicleAvailability({ vehicleId, startDateTime, endDateTime }) {
    try {
      // call the post method of the Api class with the url path and the data
      const data = await this.api.post("/vehicles/availabilities", {
        vehicleId,
        startDateTime,
        endDateTime,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a vehicle availability for the commercial service
  async updateVehicleAvailability({
    id,
    vehicleId,
    startDateTime,
    endDateTime,
  }) {
    try {
      // call the put method of the Api class with the url path and the data
      const data = await this.api.put(`/vehicles/availabilities/${id}`, {
        vehicleId,
        startDateTime,
        endDateTime,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a vehicle availability for the commercial service
  async deleteVehicleAvailability({ id }) {
    try {
      // call the delete method of the Api class with the url path and the id parameter
      const data = await this.api.delete(`/vehicles/availabilities/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // ... define other methods for the commercial service
}

const commercialService = new CommercialService();

// export the instance as default or as a named export
export default commercialService;

// export a new instance of the commercialService class
//export default new commercialService();

/*
This CommercialService.js file defines the following methods:

getVehiclesAvailabilities(): This method gets a list of vehicle availabilities for the commercial service.
getVehicleAvailability(): This method gets a specific vehicle availability for the commercial service.
postVehicleAvailability(): This method creates a new vehicle availability for the commercial service.
updateVehicleAvailability(): This method updates a vehicle availability for the commercial service.
deleteVehicleAvailability(): This method deletes a vehicle availability for the commercial service.
You can use these methods in your React.js project to get information about vehicle availabilities.
*/
