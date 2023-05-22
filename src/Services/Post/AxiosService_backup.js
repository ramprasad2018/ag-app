// Define an axios service class that uses the Api class
import api from "./Api"; // import your Api class

class AxiosService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that takes a method name and options
  async request(method, options) {
    try {
      // call the corresponding method of the Api class and return the data
      const data = await this.api[method](options);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

// create a new instance of the class
// create a new instance of the class
const axiosService = new AxiosService();

// export the instance as default or as a named export
export default axiosService;

// export a new instance of the service class
//export default new axiosService();
