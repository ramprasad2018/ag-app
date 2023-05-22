// Define a class called JsonManipulator
class JsonManipulator {
  // Define a constructor that takes a JSON object as an argument and assigns it to a property
  constructor(json) {
    this.json = json;
  }

  // Define a method to access a nested property of the JSON object using dot or bracket notation
  // The method takes a string as an argument that represents the path to the property
  // For example, "address.streetName" or "items [0] .name"
  // The method returns the value of the property or undefined if it does not exist
  get(path) {
    // Split the path by dots and brackets
    const parts = path.split(/\.|\[|\]/).filter((part) => part);
    // Initialize a variable to store the current value
    let value = this.json;
    // Loop through the parts of the path
    for (let part of parts) {
      // If the current value is an object or an array, try to access the next part as a property or an index
      if (typeof value === "object" && value !== null) {
        value = value[part];
      } else {
        // Otherwise, return undefined
        return undefined;
      }
    }
    // Return the final value
    return value;
  }

  // Define a method to add or update a nested property of the JSON object using dot or bracket notation
  // The method takes two arguments: a string that represents the path to the property and a value to assign to it
  // For example, "address.city" and "fgh"
  // The method returns true if the operation was successful or false if it failed
  set(path, value) {
    // Split the path by dots and brackets
    const parts = path.split(/\.|\[|\]/).filter((part) => part);
    // Initialize a variable to store the current object or array
    let obj = this.json;
    // Loop through the parts of the path except the last one
    for (let i = 0; i < parts.length - 1; i++) {
      let part = parts[i];
      // If the current object or array has a property or an index with the current part, update the obj variable to point to it
      if (typeof obj[part] === "object" && obj[part] !== null) {
        obj = obj[part];
      } else {
        // Otherwise, return false
        return false;
      }
    }
    // Assign the value to the last part of the path
    obj[parts[parts.length - 1]] = value;
    // Return true
    return true;
  }

  // Define a method to delete a nested property of the JSON object using dot or bracket notation
  // The method takes a string as an argument that represents the path to the property
  // For example, "address.streetId"
  // The method returns true if the operation was successful or false if it failed
  delete(path) {
    // Split the path by dots and brackets
    const parts = path.split(/\.|\[|\]/).filter((part) => part);
    // Initialize a variable to store the current object or array
    let obj = this.json;
    // Loop through the parts of the path except the last one
    for (let i = 0; i < parts.length - 1; i++) {
      let part = parts[i];
      // If the current object or array has a property or an index with the current part, update the obj variable to point to it
      if (typeof obj[part] === "object" && obj[part] !== null) {
        obj = obj[part];
      } else {
        // Otherwise, return false
        return false;
      }
    }
    // Delete the last part of the path using the delete operator
    return delete obj[parts[parts.length - 1]];
  }

  // Define a method to convert the JSON object into a JSON string using JSON.stringify()
  stringify() {
    return JSON.stringify(this.json);
  }
}
export default JsonManipulator;
