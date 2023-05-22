import Api from "./api";

// Define a class called Service
class Service {
  // Define a constructor that gets an instance of the Api class and assigns it to a property
  constructor() {
    this.api = Api.getInstance();
  }
  // Define a method to get all posts from the API
  getAllSuppliers() {
    return this.api.get("/suppliers");
  }

  // Define a method to create a new post and send it to the API
  createSupplier(data) {
    return this.api.post("/suppliers", data);
  }

  // Define a method to get all posts from the API
  getAllPosts() {
    return this.api.get("/posts");
  }

  // Define a method to get a single post by id from the API
  getPostById(id) {
    return this.api.get(`/posts/${id}`);
  }

  // Define a method to create a new post and send it to the API
  createPost(data) {
    return this.api.post("/posts", data);
  }

  // Define a method to update an existing post and send it to the API
  updatePost(id, data) {
    return this.api.put(`/posts/${id}`, data);
  }

  // Define a method to delete a post from the API
  deletePost(id) {
    return this.api.delete(`/posts/${id}`);
  }

  // Define a method to create a new post and send it to the API
  createPost1(post) {
    // Get the title and body properties from the post object
    const { title, body } = post;
    // Create a data object with the title and body properties
    const data = { title, body };
    console.log("Inside service the data is");
    console.log(data);
    console.log("Leaving service");
    return Promise.resolve(data);
  }
}

// Export the Service class
export default Service;
