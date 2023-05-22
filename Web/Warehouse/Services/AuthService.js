import api from "./Api"; // import your Api class

class AuthService {
  constructor() {
    // create an instance of the Api class
    this.api = api;
  }

  // define a method that gets a user by id for the auth service
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

  // define a method that registers a new user
  async register({ username, email, password }) {
    try {
      // call the post method of the Api class with the url path and the user data
      const data = await this.api.post(`/users`, { username, email, password });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that logs in a user
  async login({ username, password }) {
    try {
      // call the post method of the Api class with the url path and the user data
      const data = await this.api.post(`/login`, { username, password });
      return data;
    } catch (error) {
      // handle the error and return null
      console.error(error);
      return null;
    }
  }

  // define a method that logs out a user
  async logout() {
    try {
      // call the delete method of the Api class with the url path
      await this.api.delete(`/logout`);
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }

  // define a method that resets a user's password
  async resetPassword({ email }) {
    try {
      // call the post method of the Api class with the url path and the user data
      await this.api.post(`/reset-password`, { email });
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }
}

const authService = new AuthService();

// export the instance as default or as a named export
export default authService;

// export a new instance of the authService class
//export default new authService();

/*
This AuthService.js file provides the following methods:

getUserById(): Gets a user by id.
register(): Registers a new user.
login(): Logs in a user.
logout(): Logs out a user.
resetPassword(): Resets a user's password.
You can use these methods to implement authentication in your React.js project.
*/
