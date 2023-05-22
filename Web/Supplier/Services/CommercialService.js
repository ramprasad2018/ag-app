import api from "./Api"; // import your Api class

class CommercialService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets all selling products
  async getSellingProducts() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/selling-products`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that adds a new selling product
  async postSellingProduct({ name, description, price, quantity }) {
    try {
      // call the post method of the Api class with the url path and the selling product data
      const data = await this.api.post(`/selling-products`, {
        name,
        description,
        price,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that updates a selling product
  async updateSellingProduct({ id, name, description, price, quantity }) {
    try {
      // call the put method of the Api class with the url path and the selling product data
      const data = await this.api.put(`/selling-products/${id}`, {
        name,
        description,
        price,
        quantity,
      });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that deletes a selling product
  async deleteSellingProduct({ id }) {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/selling-products/${id}`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }

  // define a method that gets farm requirements
  async getFarmRequirements() {
    try {
      // call the get method of the Api class with the url path
      const data = await this.api.get(`/farm-requirements`);
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

/*
This CommercialService.js file provides the following methods:

getSellingProducts(): Gets all selling products.
postSellingProduct(): Adds a new selling product.
updateSellingProduct(): Updates a selling product.
deleteSellingProduct(): Deletes a selling product.
getFarmRequirements(): Gets farm requirements.
sendMessage(): Sends a message.
You can use these methods to manage commercial agriculture in your React.js project.
*/
