import api from "./Api"; // import your Api class

class PlantService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets a cure for a plant disease
  async getDiseaseCure({ disease }) {
    try {
      // call the get method of the Api class with the url path and the disease name
      const data = await this.api.get(`/disease-cures/${disease}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a soil improvement plan
  async getSoilImprovementPlan({ location }) {
    try {
      // call the get method of the Api class with the url path and the location
      const data = await this.api.get(`/soil-improvement-plans/${location}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const plantService = new PlantService();

// export the instance as default or as a named export
export default plantService;

// export a new instance of the plantService class
//export default new plantService();

/*
 This PlantService.js file provides the following methods:

getDiseaseCure(): Gets a cure for a plant disease.
getSoilImprovementPlan(): Gets a soil improvement plan.
You can use these methods to manage plant health in your React.js project.
*/
