expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
Warrior = require('./game').Warrior;
var attack = require('./game').attack

describe("Test", () => {
  it("true to be true", () => {
    true.should.be.true;
  });
})

// describe("Testing the attack function", () => {
//   var enemyArmorBonus;
//   var enemySkill;
//   var rollDice;
//   var strength;
//   var attack;

//   beforeEach(() => {
//     enemyArmorBonus = 3;
//     enemySkill = 6;
//     rollDice = Warrior.rollDice(1,20);
//     strength = 7;
//     attack = attack(enemyArmorBonus, enemySkill, rollDice, strength);
//   });

//   it('should attack', () => {
//     attack.should.be.true;
//   });

//   afterEach(() => {
//     enemyArmorBonus = undefined;
//     enemySkill = undefined;
//     rollDice = undefined;
//     strength = undefined;
//   })
// })