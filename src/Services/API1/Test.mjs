// Import the service class dynamically
import { Post, Supplier } from "./entities.mjs";
import SimpleClass from "./simple-class.mjs";
import JsonManipulator from "./JsonManipulator.mjs";

(async () => {
  try {
    const query = {
      q: JSON.stringify({ Name: "Krishna", Age: 20 }),
      limit: 10,
      offset: 0,
    };

    // create an instance of the class
    let simple = new SimpleClass("Bing");
    let simple1 = new JsonManipulator("Bing");
    // call the method
    console.log(simple.greet()); // Hello, Bing!
    console.log(simple1.stringify()); // Hello, Bing!

    // Destructure the default export from the imported module
    const { default: Service } = await import("./service.mjs");
    // Create a service instance
    const service = new Service();

    // Call the service methods and print the results in console
    let response;

    response = await service.getAllSuppliers();
    console.log("All suppliers:");
    console.table(response.data);

    // Create a new post instance
    const post = new Post("My first post", "This is a test post");

    // Call the createPost1 method without await and use .then() to handle the promise
    service.createPost1(post).then((response) => {
      console.log("New post created:");
      console.log(response);
    });

    service.getRandom(query).then((response) => {
      // Write the response on console
      console.log("Response from the random API");
      console.log(response.data);
    });

    // Test the JSON Manipulator Class
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
})();
