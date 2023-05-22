class SimpleClass {
  // constructor takes one parameter
  constructor(name) {
    // assign the parameter to a property
    this.name = name;
  }

  // a single method that returns a greeting
  greet() {
    return `Hello, ${this.name}!`;
  }
}

// export the class
export default SimpleClass;
