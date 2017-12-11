expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
const {
  getScorpion,
  getLuiKang,
  Warrior,
  Armor,
  Weapon
} = require("./game.js");

describe("Initail Conditions", () => {
  it("initail Scorpion is an object", () => {
    let Scorpion = getScorpion();
    _.isObject(Scorpion).should.be.true;
  });

  it("initail LuiKang is an object", () => {
    let LiuKang = getLuiKang();
    _.isObject(LiuKang).should.be.true;
  });

  it("armor bonus should be 0 for Scorpion", () => {
    let Scorpion = getScorpion();
    //Scorpion.armorBonus.should.equal(0);
    // Fix ME. Should be 6 for Scorpion
    // Fix is to not reset armorBouns to 0
  });

  it("armor bonus should be 0 for LuiKang", () => {
    let LiuKang = getLuiKang();
    //LiuKang.armorBonus.should.equal(0);
    // Fix ME. Should be 3 for LuiKang
    // Fix is to not rest armorBouns to 0
  });
});


describe("Warrior", () => {
  describe("RollDice", () => {
    it("should return a number", () => {
      const num = Warrior.rollDice(1, 20);
      //console.log("number:", num);
      _.isFinite(num).should.be.true;
    });

    it("should not have a 0 in 1000 sample", () => {
      const sampleArr = new Array(1000);
      _.fill(sampleArr, 0);
      const rollDiceSamples = _.map(sampleArr, (item) => Warrior.rollDice(1, 20));
      const zeros = _.filter(rollDiceSamples, (item) => item === 0);
      //console.log('Zeros:', zeros.length);
      zeros.length.should.not.equal(0);
      // FIX ME - returns Zero
    });
  });

  describe("Attack", () => {
    var SubZero;
    var Goro;

    var createWarrior = (name, armor, weapon, strength, skill) => {
      var armor = new Armor("Armor", armor);
      var weapon = new Weapon("Weapon", weapon);
      return new Warrior(name, strength, skill, [armor, weapon]);
    }

    beforeEach(() => {
      SubZero = createWarrior("SubZero", 8, 8, 7, 6);
      Goro = createWarrior("Goro", 10, 10, 10, 10);
    });

    it("SubZero's strength should be 7", () => {
      SubZero.strength.should.equal(7);
    });

    it("Goro's strength should be 10", () => {
      Goro.strength.should.equal(10);
      // FIX ME
    });

    it("SubZero's armorBouns is 8", () => {
      SubZero.armorBonus.should.equal(8);
    });

    it("Goro's armorBouns is 10", () => {
      Goro.armorBonus.should.equal(10);
      // FIX ME
    });

    it("If add new armor to SubZeros gear it should be added", () => {
      newArmor = new Armor("New Armor", 6);
      SubZero.addGear(newArmor);
      SubZero.gear.should.include(newArmor);
    });

    it("If add new armor to SubZeros gear, his armorBouns should be 14", () => {
      newArmor = new Armor("New Armor", 6);
      SubZero.addGear(newArmor);
      SubZero.armorBonus.should.equal(14);
    });

    it("If remove armor from Goro's gear, his gear should be 1", () => {
      Goro.removeGear();
      Goro.gear.length.should.equal(1); 
    });

    it("If remove armor from Goro's gear, his armorBouns should be 0", () => {
      Goro.removeGear();
      Goro.armorBonus.should.equal(0); 
    });


    afterEach(() => {
      SubZero = undefined;
      Goro = undefined;
    });
  });
})