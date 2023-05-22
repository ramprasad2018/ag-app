import api from "./Api"; // import your Api class

class CommercialService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that publishes a harvest forecast
  async publishHarvestForescast({ crop, location, quantity }) {
    try {
      // call the post method of the Api class with the url path and the harvest forecast data
      const data = await this.api.post(`/harvest-forecasts`, {
        crop,
        location,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that publishes crop availability
  async publishCropAvailability({ crop, location, quantity }) {
    try {
      // call the post method of the Api class with the url path and the crop availability data
      const data = await this.api.post(`/crop-availabilities`, {
        crop,
        location,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that publishes requirements
  async publishRequirements({ crop, location, quantity }) {
    try {
      // call the post method of the Api class with the url path and the requirements data
      const data = await this.api.post(`/requirements`, {
        crop,
        location,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets requirements
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

  // define a method that sends a message
  async sendMessage({ recipient, message }) {
    try {
      // call the post method of the Api class with the url path and the message data
      const data = await this.api.post(`/messages`, { recipient, message });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const commercialService = new CommercialService();

// export the instance as default or as a named export
export default commercialService;

// export a new instance of the commercialService class
//export default new commercialService();
