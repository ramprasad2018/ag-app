import api from "./Api"; // import your Api class

class PlanterService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
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

  // define a method that gets a planter by id
  async getPlanter({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/planters/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that adds a new planter
  async postPlanter({ name, model, manufacturer, price }) {
    try {
      // call the post method of the Api class with the url path and the planter data
      const data = await this.api.post(`/planters`, {
        name,
        model,
        manufacturer,
        price,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a planter
  async updatePlanter({ id, name, model, manufacturer, price }) {
    try {
      // call the put method of the Api class with the url path and the planter data
      const data = await this.api.put(`/planters/${id}`, {
        name,
        model,
        manufacturer,
        price,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a planter
  async deletePlanter({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/planters/${id}`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }
}

const planterService = new PlanterService();

// export the instance as default or as a named export
export default planterService;

// export a new instance of the planterService class
//export default new planterService();

/* 
This PlanterService.js file provides the following methods:

getPlanters(): Gets all planters.
getPlanter(): Gets a planter by id.
postPlanter(): Adds a new planter.
updatePlanter(): Updates a planter.
deletePlanter(): Deletes a planter.
You can use these methods to manage planters in your React.js project.
*/
