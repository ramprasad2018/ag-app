// Define a class called Post
class Post {
  // Define a constructor that takes the title and body of the post as parameters and assigns them to properties
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

// Define a class called Supplier
class Supplier {
  // Define a constructor that takes the name and address of the supplier as parameters and assigns them to properties
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

// Export the classes using named exports
export { Post, Supplier };
