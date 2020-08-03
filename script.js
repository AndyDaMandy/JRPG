const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttonns');

let state = {};
function startGame(){
  state = {};
  showTextNode(i);
};
function showTextNode(textNodeIndex){

};
function selectOption(option){

};

const textNodes = [
  {
    id; 1,
    text: "You're walking and then you see something on the horizon",
    options: [
      {
        text: "Run away",
      },
      {
        text: "Draw weapon",
      }
    ]
  }
]

startGame();
//All object constructors go here
function Character(name, weaponType, attack, defense, healthPoints){
this.name = name;
this.weaponType = weaponType;
this.attack = attack;
this.defense = defense;
this.healthPoints = healthPoints;
this.weaponEquipped = "N/A";
this.level = 15;
}

function Enemy(name, attack, defense, healthPoints, element, weakness){
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.healthPoints = healthPoints
  this.element = element;
  this.weakness = weakness;
}

function Element(name){
  this.name = name;
  this.bonusPower = 400;
}

function Sword(name, element, power, materiaSlots) {
this.name = name;
this.element = element;
this.power = power;
this.materiaSlots = materiaSlots;
}

function Fists(name, element, power, materiaSlots){
this.name = name;
this.element = element;
this.power = power;
this.materiaSlots = materiaSlots;
}
//I'm thinking of dividing the materia into categories.
// Spell Materia allows for casting of spells.
// I'll need spell constructor objects. I'll then equip the spell objects to the materia? This way each spell is separate from the materia.
function spellMateria(name, effect, effectDescription){
  this.name = name;
  this.effect = effect;
  this.spells = "N/A";
  this.effectDescription = effectDescription;
}
// All object constructors are above here



// Elements go here
let ice = new Element("Ice");
let fire = new Element("Fire");

//elements go here

//Weapons go here
let busterSword = new Sword("Buster Sword", fire, 300, 2);
console.log(busterSword);

let ironFists = new Fists("Iron Fists", ice, 300, 2);
//Weapons go here

//Characters go here
//name, weapon type, attack, defense, health
let cloud = new Character("Cloud", "Sword", 400, 150, 5000);
console.log(cloud);

let tifa = new Character("Tifa", "Fists", 400, 150, 5000);
console.log(tifa);
// characters go here

// materia goes here
let healMateria = new spellMateria("Heal", "healing magic", "Allows for healing magic" );
console.log(healMateria);
// materia goes here

function weaponChanger(character, newWeapon){
character.weaponEquipped = newWeapon;
};

weaponChanger(cloud, busterSword);
weaponChanger(tifa, ironFists);
console.log(cloud);
console.log(tifa);

function attackPower(character){
  let totalPower = character.attack + character.weaponEquipped.power
 console.log(character.name + " has " + totalPower + " attack");
 return totalPower
}
console.log(attackPower(cloud));
console.log(attackPower(tifa));


let iceman = new Enemy("Ice Man", 600, 100, 5000, ice, fire)
console.log(iceman);

//testing own properties
let ownProps = [];
for (let property in cloud) {
  if (cloud.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps);

//the idea behind this function is to go through the damage calculations
//then report the damange total
// all while providing this info to the console, to make it easier to read LOL
//the goal is to eventually updated the value for the enemy
// in hindsight that's not too smart beceause you want multiple enemies.
// I'll have to do some digging about this..
// For now this is good enough.
function attackEnemy(character, enemy){
console.log(character.name + " is attacking " + enemy.name + " with " + character.weaponEquipped.name + "!");
let enemyHp = enemy.healthPoints;
console.log("The enemy's HP is: " + enemyHp);
let attackformula = attackPower(character);
if (enemy.weakness === character.weaponEquipped.element){
attackformula += character.weaponEquipped.element.bonusPower;
console.log("The enemy is weak to " + character.weaponEquipped.element.name + "! This attack will do bonus damage!");
}
let defenseformula = attackformula - enemy.defense;
enemyHp = enemyHp - defenseformula;
console.log("The attack hit for " + defenseformula + " damage!")
enemy.healthPoints = enemyHp;

if (enemy.healthPoints <= 0){
  enemy.healthPoints = 0;
  console.log(enemy.name + "'s HP is now: 0");
  console.log(character.name + " has defeated " + enemy.name + "!");
} else{
console.log(enemy.name + "'s HP is now: " + enemy.healthPoints);
}
return enemy.healthPoints;
};

attackEnemy(cloud, iceman);
attackEnemy(tifa, iceman);

function enemyAttack(enemy, character){
  console.log(enemy.name + " is attacking " + character.name + "!");
  console.log("The enemy's attack power is: " + enemy.attack);
  console.log(character.name + "'s HP is:" + character.healthPoints);
  let charHealth = character.healthPoints;
  let enemyPower = enemy.attack - character.defense;
  charHealth = charHealth - enemyPower;
  character.healthPoints = charHealth;
  console.log("The attack hit for " + enemyPower + " damage!");
  if (character.healthPoints <= 0){
    character.healthPoints = 0;
    console.log(character.name + "'s HP is now: 0");
    console.log(character.name + " has been knocked out!");
    console.log("Use a phoenix down to revive them!");
  }
  else {
    console.log(character.name + "'s HP is now: " + character.healthPoints);
  }
  return character.healthPoints;
}
enemyAttack(iceman, tifa);

