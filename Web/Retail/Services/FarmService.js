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

  // define methods to get farms, planters, and crop plans
  async getFarms() {
    try {
      const data = await this.api.get("/farms");
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getFarm({ id }) {
    try {
      const data = await this.api.get(`/farms/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPlanters() {
    try {
      const data = await this.api.get("/planters");
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPlanter({ id }) {
    try {
      const data = await this.api.get(`/planters/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCropPlans() {
    try {
      const data = await this.api.get("/crop-plans");
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // define a method that gets the crop plan for a farm
  async getCropPlan({ farmId }) {
    try {
      // call the get method of the Api class with the url path and the farmId parameter
      const data = await this.api.get(`/farms/${farmId}/crop-plan`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all of the harvest forecasts for a farm
  async getHarvestForecasts({ farmId }) {
    try {
      // call the get method of the Api class with the url path and the farmId parameter
      const data = await this.api.get(`/farms/${farmId}/harvest-forecasts`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific harvest forecast for a farm
  async getHarvestForecast({ farmId, harvestId }) {
    try {
      // call the get method of the Api class with the url path, farmId, and harvestId parameters
      const data = await this.api.get(
        `/farms/${farmId}/harvest-forecasts/${harvestId}`
      );
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets all of the crop availabilities for a farm
  async getCropAvailabilities({ farmId }) {
    try {
      // call the get method of the Api class with the url path and the farmId parameter
      const data = await this.api.get(`/farms/${farmId}/crop-availabilities`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a specific crop availability for a farm
  async getCropAvailability({ farmId, cropId }) {
    try {
      // call the get method of the Api class with the url path, farmId, and cropId parameters
      const data = await this.api.get(
        `/farms/${farmId}/crop-availabilities/${cropId}`
      );
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const farmService = new FarmService();
