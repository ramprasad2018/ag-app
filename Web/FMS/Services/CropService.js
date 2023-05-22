// CropService.js

import api from "./Api"; // import your Api class

class CropService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all of the crop plans
  async getAllCropPlans() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get("/crop-plans");
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific crop plan
  async getCropPlan({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/crop-plans/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that creates a new crop plan
  async addCropPlan({ cropPlan }) {
    try {
      // call the post method of the Api class with the url path and the cropPlan object
      const data = await this.api.post("/crop-plans", cropPlan);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates an existing crop plan
  async updateCropPlan({ id, cropPlan }) {
    try {
      // call the put method of the Api class with the url path, id, and cropPlan object
      const data = await this.api.put(`/crop-plans/${id}`, cropPlan);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a crop plan
  async deleteCropPlan({ id }) {
    try {
      // call the delete method of the Api class with the url path and the id parameter
      const data = await this.api.delete(`/crop-plans/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a crop suggestion for the farm service
  async getCropSuggestion({ location, climate, soil }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(
        `/crops/suggestion?location=${location}&climate=${climate}&soil=${soil}`
      );
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets an intercrop plan for the farm service
  async getInterCropPlan({ crops }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/crops/intercrop?crops=${crops}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets the status of crop plan activities for the farm service
  async getCropPlanActivitiesStatus({ cropPlanId }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/crops/plan/activities/${cropPlanId}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets the harvest forecast for a crop for the farm service
  async getCropHarvestForecast({ cropId }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/crops/harvest/forecast/${cropId}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const cropService = new CropService();

// export the instance as default or as a named export
export default cropService;

// export a new instance of the cropService class
//export default new cropService();

/*
This CropService.js file defines the following methods:

getCropSuggestion(): This method gets a crop suggestion for the farm service.
getInterCropPlan(): This method gets an intercrop plan for the farm service.
getCropPlanActivitiesStatus(): This method gets the status of crop plan activities for the farm service.
getCropHarvestForecast(): This method gets the harvest forecast for a crop for the farm service.
You can use these methods in your React.js project to get information about crops and crop planning.
*/
