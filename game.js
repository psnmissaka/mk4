_ = require("lodash");
var Scorpion;
var LiuKang;

const attack = (enemyArmorBonus, enemySkill, rollDice, strength, _) => {
  var roll = rollDice(1, 20);
  roll += strength;
  var warriorPoints = _.clamp(roll, 1, 25);
  var enemyPower = 10 + enemyArmorBonus + enemySkill;
  return warriorPoints >= enemyPower;
}

class Warrior {
  constructor(name, strength, skill, gear) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
    this.gear = gear;
    this.calculateBonus();
    // this.armorBonus = 0;
  }

  static rollDice(times, type) {
    var total = 0;
    for (var i = 0; i < times; i++) {
      total += Math.round(Math.random() * type);
    }
    return total;
  }

  addGear(item) {
    this.gear.push(item);
    if (item instanceof Armor) {
      this.calculateBonus();
    }
  }

  removeGear() {
    let gearToRemove = _.first(this.gear);
    if (gearToRemove) {
      this.gear.splice(0, 1);
    }
    if (gearToRemove instanceof Armor) {
      this.calculateBonus();
    }
  }

  calculateBonus() {
    this.armorBonus = 0;
    _.each(this.gear, (item) => {
      if (item instanceof Armor) {
        this.armorBonus += item.bonus
      }
    });
  }

  attack(enemy) {
    var roll = Warrior.rollDice(1, 20);
    roll += this.strength;
    var warriorPoints = _.clamp(roll, 1, 25);
    var enemyPower = 10 + enemy.armorBonus + enemy.skill;
    return warriorPoints >= enemyPower;
  }

}

class Armor {
  constructor(name, bonus) {
    this.name = name;
    this.bonus = bonus;
  }
}

class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

setUpWarriors = () => {
  var spineArmor = new Armor("Spine Armor", 6);
  var spineChain = new Weapon("Spine Chain", 5);
  Scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);

  var leatherArmor = new Armor("Leather Armor", 3);
  var sword = new Weapon("Chang Sword", 6);
  LiuKang = new Warrior("Lui Kang", 6, 8, [leatherArmor, sword]);
}

fight = () => {
  var wins = LiuKang.attack(Scorpion);
  if (wins) {
    console.log('Liu Kang Wins');
  } else {
    console.log('Scorpion Wins');
  }
}

setUpWarriors();
fight();