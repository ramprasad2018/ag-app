import api from "./Api"; // import your Api class

class UtilityService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that sends a report
  async sendReport({ report }) {
    try {
      // call the post method of the Api class with the url path and the report data
      const data = await this.api.post(`/reports`, { report });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that sends a help request
  async sendHelpRequest({ request }) {
    try {
      // call the post method of the Api class with the url path and the help request data
      const data = await this.api.post(`/help-requests`, { request });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that gets how-to information
  async getHowTo({ topic }) {
    try {
      // call the get method of the Api class with the url path and the topic
      const data = await this.api.get(`/how-tos/${topic}`);
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }
}

const utilityService = new UtilityService();

// export the instance as default or as a named export
export default utilityService;

// export a new instance of the utilityService class
//export default new utilityService();

/*
This UtilityService.js file provides the following methods:

sendReport(): Sends a report.
sendHelpRequest(): Sends a help request.
getHowTo(): Gets how-to information.
You can use these methods to manage utilities in your React.js project.
*/
