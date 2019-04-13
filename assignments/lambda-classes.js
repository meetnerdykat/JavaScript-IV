// CODE here for your Lambda Classes
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.

/*
  === Person ===
  * Base-Class
  * name, age, location
  * speak() method -> returns the string 'Hello my name is Fred and I am from Bedrock.'
*/

// New-Refactored
class Person {
  constructor(atts) {
    this.name = atts.name;
    this.age = atts.age;
    this.location = atts.location;
    this.gender = atts.gender;
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

const Wilma = new Person({
  name: 'Wilma',
  age: '28',
  location: 'Bedrock'
});

const Betty = new Person({
  name: 'Betty',
  age: '29',
  location: 'Bedrock'
});

console.log(fred);
console.log(fred.name);
console.log(fred.age);
console.log(fred.location);
console.log(fred.speak());

console.log(Wilma);
console.log(Wilma.name);
console.log(Wilma.age);
console.log(Wilma.location);
console.log(Wilma.speak());

console.log(Betty);
console.log(Betty.name);
console.log(Betty.age);
console.log(Betty.location);
console.log(Betty.speak());

/* Creation of Fred, Wilma, & Betty successful!*/

/*
  === Instructor ===
  * Extended from Person
  * specialty, favLanguage, catchPhrase
  * demo() receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * grade() receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

// New-Refactored
class Instructor extends Person {
  constructor(atts) {
    super(atts);
    this.specialty = atts.specialty;
    this.favLanguage = atts.favLanguage;
    this.catchPhrase = atts.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}!`;
  }
}

const sal = new Instructor({
  name: 'Sal',
  location: 'Outer Space',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

console.log(sal);
console.log(sal.name);
console.log(sal.location);
console.log(sal.gender);
console.log(sal.favLanguage);
console.log(sal.specialty);
console.log(sal.catchPhrase);
console.log(sal.demo('Javascript'));

/*
  === Student ===
  * Extended from Person
  * specialty, favLanguage, catchPhrase
  * demo() receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * grade() receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

// New-Refactored
class Student extends Person {
  constructor(atts) {
    super(atts);
    this.previousBackground = atts.previousBackground;
    this.className = atts.className;
    this.favSubjects = atts.favSubjects;
  }
  listsSubjects() {
    console.log(`My favorite subjects are ${this.favSubjects}`);
  }

  PRAssignment(subject) {
    // a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    console.log(`${this.name} has submitted a PR for her ${subject}`);
  }

  sprintChallenge(subject) {
    // similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    console.log(`${this.name} has begun the sprint challenge on ${subject}`);
  }
}

const rebecca = new Student({
  name: 'Rebecca',
  location: 'Florida',
  age: 26,
  gender: 'Female',
  previousBackground: 'Dentistry',
  className: 'WEBPT5',
  favSubjects: ['Animation', 'UX', 'UI', 'Databases']
});

console.log(rebecca);
console.log(rebecca.name);
console.log(rebecca.age);
console.log(rebecca.location);
console.log(rebecca.gender);
console.log(rebecca.previousBackground);
console.log(rebecca.className);
console.log(rebecca.favSubjects);
console.log(rebecca.speak());
console.log(rebecca.listsSubjects());
console.log(rebecca.PRAssignment('JS-IV Project'));
console.log(rebecca.sprintChallenge('JS-IV'));

/*
  === ProjectManagers ===
  * Extended from Instructor
  * gradClassName, favInstructor
  * standUp() a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * debugsCode() a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

// New-Refactored
class ProjectManager extends Instructor {
  constructor(atts) {
    super(atts);
    this.gradClassName = atts.gradClassName;
    this.favInstructor = atts.favInstructor;
  }
  standUp(channel) {
    //  a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    console.log(
      `${
        this.name
      } announces to ${channel} @channel that it's standy standy time!`
    );
  }

  debugsCode(student, subject) {
    // a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    console.log(`${this.name} debugs ${student} code on ${subject}`);
  }
}

const alex = new ProjectManager({
  name: 'Alex',
  location: 'Seattle, WA',
  age: 24,
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Be afraid-be very afraid.',
  gradClassName: "I don't know...",
  favInstructor: "I don't know this either."
});

console.log(alex);
console.log(alex.name);
console.log(alex.location);
console.log(alex.gender);
console.log(alex.favLanguage);
console.log(alex.specialty);
console.log(alex.catchPhrase);
console.log(alex.gradClassName);
console.log(alex.favInstructor);
console.log(alex.demo('Javascript'));
console.log(alex.standUp('webpt5-alex'));
console.log(alex.debugsCode("Rebecca's", 'JS Assignment'));
