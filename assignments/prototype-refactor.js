/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
// Previous Constructor Functions-Prototypal Inheritence
// GameObject Constructor
function GameObject(atts) {
  this.createdAt = atts.createdAt;
  this.name = atts.name;
  this.dimensions = atts.dimensions;
}

// GameObject destroy() prototype method
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
// GameObject build() prototype method
GameObject.prototype.build = function() {
  return `${this.name} was built into the game.`;
};

// Create a new GameObject
const game1 = new GameObject({
  createdAt: new Date(),
  name: 'Game1',
  dimensions: {
    length: 1,
    width: 2,
    height: 2
  }
});
*/

// New-Refactored
class GameObject {
  constructor(atts) {
    this.createdAt = atts.createdAt;
    this.name = atts.name;
    this.dimensions = atts.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// const game1 = new GameObject({
//   createdAt: new Date(),
//   name: 'Game1',
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 2
//   }
// });

// console.log(game1);
// console.log(game1.createdAt);
// console.log(game1.name);
// console.log(game1.dimensions);
// console.log(game1.destroy());

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// New-Refactored
class CharacterStats extends GameObject {
  constructor(atts) {
    super(atts);
    this.healthPoints = atts.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

// Create a new CharacterStats
// const char1 = new CharacterStats({
//   createdAt: new Date(),
//   name: 'Char1',
//   dimensions: {
//     length: 2,
//     width: 3,
//     height: 3
//   },
//   healthPoints: 5
// });

// console.log(char1);
// console.log(char1.takeDamage());
// console.log(char1.destroy());

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// New-Refactored
class Humanoid extends CharacterStats {
  constructor(atts) {
    super(atts);
    this.team = atts.team;
    this.weapons = atts.weapons;
    this.language = atts.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// Create a new GameObject
// const humanoid1 = new Humanoid({
//   createdAt: new Date(),
//   name: 'Hum1',
//   dimensions: {
//     length: 3,
//     width: 4,
//     height: 4
//   },
//   healthPoints: 10,
//   team: 'A Team',
//   weapons: ['Giant Sword', 'Shield'],
//   language: 'Fairy'
// });

// Checks to see if all atts get inherited: YES THEY DO!
// console.log(humanoid1);
// console.log(humanoid1.createdAt);
// console.log(humanoid1.name);
// console.log(humanoid1.dimensions);
// console.log(humanoid1.healthPoints);
// console.log(humanoid1.team);
// console.log(humanoid1.weapons);
// console.log(humanoid1.language);
// console.log(humanoid1.greet());
// console.log(humanoid1.takeDamage());
// console.log(humanoid1.destroy());

// New-Refactored
class Villian extends Humanoid {
  constructor(atts) {
    super(atts);
    this.evilLaughter = atts.evilLaughter;
  }
  evilLaugh() {
    return `${this.name} cackles in glee with his evil victory ${
      this.evilLaughter
    }.`;
  }
}

const theOGV = new Villian({
  createdAt: new Date(),
  name: 'Original Gansta Villian a.k.a OGV',
  dimensions: {
    length: 12,
    width: 12,
    height: 12
  },
  healthPoints: 1000,
  team: 'Team Evilest of All',
  weapons: ['Fire', 'Water', 'Ice', 'Sticks', 'Pebbles', 'Mud'],
  language: 'Pigmy',
  evilLaughter: 'A-ha, A-ha, A-hahahahahawhoahaaaaa!'
});

// console.log(theOGV);
// console.log(theOGV.evilLaughter);
// console.log(theOGV.createdAt);
// console.log(theOGV.name);
// console.log(theOGV.dimensions);
// console.log(theOGV.healthPoints);
// console.log(theOGV.team);
// console.log(theOGV.weapons);
// console.log(theOGV.language);
// console.log(theOGV.greet());
// console.log(theOGV.takeDamage());
// console.log(theOGV.destroy());

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
