// Import the service class dynamically
(async () => {
  try {
    // Destructure the default export from the imported module
    const { default: Service } = await import("./service.js");
    // Create a service instance
    const service = new Service();

    // Call the service methods and print the results in console
    let response;

    response = await service.getAllSuppliers();
    console.log("All suppliers:");
    console.table(response.data);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
})();
