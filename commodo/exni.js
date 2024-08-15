// Define a sample object
let myObject = {
  o: null,  // Property 'o' initially set to null

  setO: function(other) {
    this.o = other;  // Assign the value of 'other' to the property 'o'
  }
};

// Usage
myObject.setO("some value");  // Calling the setO method with a value
console.log(myObject.o);  // Output: "some value"
