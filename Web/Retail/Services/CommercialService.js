import api from "./Api"; // import your Api class

class CommercialService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all requirements
  async getRequirements() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/requirements`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets a requirement by id
  async getRequirement({ id }) {
    try {
      // call the get method of the Api class with the url path and the id parameter
      const data = await this.api.get(`/requirements/${id}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that adds a new requirement
  async postRequirement({ name, description, quantity }) {
    try {
      // call the post method of the Api class with the url path and the requirement data
      const data = await this.api.post(`/requirements`, {
        name,
        description,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a requirement
  async updateRequirement({ id, name, description, quantity }) {
    try {
      // call the put method of the Api class with the url path and the requirement data
      const data = await this.api.put(`/requirements/${id}`, {
        name,
        description,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a requirement
  async deleteRequirement({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/requirements/${id}`);
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
This Commercial.Service.js file provides the following methods:

getRequirements(): Gets all requirements.
getRequirement(): Gets a requirement by id.
postRequirement(): Adds a new requirement.
updateRequirement(): Updates a requirement.
deleteRequirement(): Deletes a requirement.
You can use these methods to manage commercial requirements in your React.js project.
*/
