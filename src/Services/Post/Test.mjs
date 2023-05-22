// Test.mjs

// import the instance of the Api class
import api from "./Api.js";

// define an async function that tests the getSpecificUser method
async function testGetSpecificUser() {
  try {
    // call the getSpecificUser method and log the result
    const result = await api.getSpecificUser();
    console.log(result);
  } catch (error) {
    // handle the error and log it
    console.error(error);
  }
}

// invoke the test function
testGetSpecificUser();
