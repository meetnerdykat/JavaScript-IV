// CODE here for your Lambda Classes
// New-Refactored
class Person {
  constructor(atts) {
    this.name = atts.name;
    this.age = atts.age;
    this.location = atts.location;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`;
  }
}

const fred = new Person({
  name: 'Fred',
  age: '30',
  location: 'Bedrock'
});

// console.log(fred);
// console.log(fred.name);
// console.log(fred.age);
// console.log(fred.location);
// console.log(fred.speak());

/* Creation of Fred successful!*/
