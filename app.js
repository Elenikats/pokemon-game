// CONSTRUCTOR OF POKEMON
class Pokemon {
    constructor (name, health, magic, skills) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = skills;
    }

    //METHOD OF LEARNING A NEW ATTACK SKILL
    learnAttackSkill(attackObj) {
        this.skills.push(attackObj);  
    }

    //METHOD SHOW STATUS
    showStatus() {
        let result = "";
        console.log(this.health);
        if (this.health <= 0) {
           result = `${this.name} is dead`
        }
         else { 
            result = `${this.name} has ${this.health} health and ${this.magic} magic left`;
        }
        return result;
    }

    // METHOD "ATTACK"  // pokemonObj is the opponent, the one that gets the damage
    attack(index, pokemonObj) {

        // 1. the attacking pokemon should call one of its attack skills and apply it to the opponent pokemon. This should cause damage to the opponent and remove the magic that was required for this attack from the attacking pokemon.
        let result = "";

        pokemonObj.health = pokemonObj.health - this.skills[index]["damage"];
        this.magic = this.magic - this.skills[index]["magicRequirement"];
        
        // 2. What happens when the magic requirement is more than the magic the attacking pokemon has.
        if (this.skills[index].magicRequirement > this.magic) {
            console.log("not enough magic");
        };

        // console.log("opponent's health:" + pokemonObj.health);
        // 3. what happens when a pokemon dies.

       

        // 4. show the result of the attack, if it was successful and how much damage it made.
           result =  `${this.name} launched skill "${this.skills[index].name}" successfully, ${pokemonObj.name} got ${this.skills[index].damage} damage`;
           return result;
  
    }

    //METHOD FOR ADDING SOME MORE MAGIC BACK TO THE POKEMON
    getMagic() {
        let rechargedMagic = this.magic + 50;
        return rechargedMagic;
    }
}



// CONSTRUCTOR OF THE ATTACK SKILLS
class attackSkill {
    constructor (name, damage, magicRequirement) {
    this.name = name;
    this.damage = damage;
    this.magicRequirement = magicRequirement;
    }
}


///////////////////// creating my Pokemons (name, health, magic, skills) 
const pikachu = new Pokemon("pikachu", 100, 150, []);
const bulbasaur = new Pokemon("bulbasaur", 100, 100, []);
const eevee = new Pokemon("eevee", 100, 250, []);
const charizard = new Pokemon("charizard", 100, 200, ["fire fang", "fire spin"]);
const snorlax = new Pokemon("snorlax", 100, 300, ["lick", "tackle"]);
const psyduck = new Pokemon("psyduck", 100, 300, ["tail whip", "confusion"]);
const squirtle = new Pokemon("squirtle", 100, 450, ["water gun", "bite"]);
const jigglypuff = new Pokemon("jigglypuff", 100, 200, ["tail whip", "air slash"]);

/////////////////////// creating Attack Skills (name, damage, magicRequirement)
const lightning = new attackSkill("lightning", 50, 30);
const razorLeaf = new attackSkill("razor leaf", 40, 40);
const tackle = new attackSkill("tackle", 30, 20);
const sandAttack = new attackSkill("sand attack", 50, 27);
const babyDollEyes = new attackSkill("baby doll eyes", 50, 20);
const bite = new attackSkill("bite", 60, 30);
const lick = new attackSkill("lick", 40, 10);
const doubleKick = new attackSkill("double kick", 30, 20);
const airSlash = new attackSkill("air slash", 40, 20);
const fireFang = new attackSkill("fire fang", 50, 30);
const fireSpin = new attackSkill("fire spin", 40, 35);
const waterGun = new attackSkill("water gun", 50, 30);
const tailWhip = new attackSkill("tail whip", 60, 40);
const confusion = new attackSkill("confusion", 20, 10);



// Adding attack skills to picachu
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(tackle);

// Adding attack skills to 
bulbasaur.learnAttackSkill(razorLeaf);
bulbasaur.learnAttackSkill(tackle);

// Adding attack skills to eevee
eevee.learnAttackSkill(sandAttack);
eevee.learnAttackSkill(babyDollEyes);


// console.log(pikachu);
// console.log(bulbasaur);
// console.log(eevee);

// console.log(pikachu.showStatus());


// console.log(pikachu.getMagic());
// console.log(pikachu.attack(0, bulbasaur));

// console.log(pikachu.magic);


// Functionality:
// You should have a Pokemon constructor function that creates new pokemon that have name, health, magic and a bunch of skills (the skills can be stored in an array or object).

// You should have an AttackSkill constructor function for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks. The AttackSkill method should take in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires. For example, here we're creating a 'lightning' attack skill that causes 40 damage, and requires 30 magic:
// let lightning = new AttackSkill("lightning", 40, 30);
// These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up.
// ​


// A pokemon has no skills when created. It has to use the method learnAttackSkill to learn a new skill. learnAttackSkill should take an attack object as an argument. The specific attacks should be created using the attackSkill constructor function, and then internally added to that Pokemon's 'skills' array. Here is an example of first creating a skill, then adding it to a Pokemon:
// let lightning = new AttackSkill("lightning", 40, 30); 
// pikachu.learnAttackSkill(lightning);


// Your pokemon should have a method called showStatus that console.logs its status (how much health, magic left)

// Your pokemon should have a method called attack which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possiblites in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should call one of the Pokemon's attack and apply it to the other Pokemon. So for example, if you call the 'lightning' attack (which we created above), it should deal 40 damage to the other Pokemon, and deplete 30 magic from the Pokemon that commited the attack. The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack. The attack method should take in two arguments: the index (or key) of the attack to be used, and the Pokemon object that needs to be attacked. For example, here is an attack being called from Pikachu to Bulbasaur:
// pikachu.attack(0, bulbasaur);

// Finally create a method called getMagic to help your pokemon add some magic back to your Pokemon (you can choose exactly how much magic should be added back).
// ​




// You should create a constructor function to create a pokemon, and then add the methods onto the .prototype property of the constructor function. You should then use that constructor function to create all new pokemon.
// ​
// Similarly, you should have a constructor function to create an attackSkill
// ​
// For example, the following sequence:
// ​
// //Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic 
// let pikachu = new Pokemon("pikachu", 120, 80);
// let bulbasaur = new Pokemon("bulbasaur", 95, 105);
// ​
// //Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
// let lightning = new AttackSkill("lightning", 40, 30);
// let poisonSeed = new AttackSkill ("poison seed", 20, 20);
// pikachu.learnAttackSkill(lightning);
// bulbasaur.learnAttackSkill(poisonSeed);
// ​
// //The first argument to `attack` should be the index (or key) of the attack

console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
console.log(pikachu);
console.log(bulbasaur);
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("------------------");
console.log(pikachu.attack(0, bulbasaur));

console.log(pikachu);
console.log(bulbasaur);
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("------------------");
// console.log(`recharge magic:`, pikachu.getMagic());


// ​
// // should log out the following to the console:
// ​
// // pikachu launched skill 'lightning' successfully!
// // bulbasaur got 40 damage
// -------------------
// // bulbasaur launched skill 'poison seed' successfully!
// // pikachu got 20 damage
// -------------------
// // pikachu status
// // health: 100
// // magic: 50
// -------------------
// // bulbasaur status
// // health: 55
// // magic: 85
// -------------------
// // pikachu launched skill 'lightning' successfully!
// // bulbasaur got 40 damage
// -------------------
// // not enough magic, cannot launch attack!
// -------------------
// // pikachu got 20 magic back
// -------------------
// // pikachu launched skill 'lightning' successfully!
// // bulbasaur got 40 damage
// -------------------
// // bulbasaur is killed!
// -------------------
// // bulbasaur is already dead!
// // That's just one example. You can call different series of attacks to get different results!
// ​
// Bonus: Add some more Pokemon and attack types.


