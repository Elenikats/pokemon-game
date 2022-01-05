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
        // console.log(this.health);
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

        // 3. show the result of the attack, if it was successful and how much damage it made.
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
const charizard = new Pokemon("charizard", 100, 200, []);
const snorlax = new Pokemon("snorlax", 100, 300, []);
const psyduck = new Pokemon("psyduck", 100, 300, []);
const squirtle = new Pokemon("squirtle", 100, 450, []);
const jigglypuff = new Pokemon("jigglypuff", 100, 200, []);

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

// Adding attack skills to all the pokemon

// Adding attack skills to picachu
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(tackle);

// Adding attack skills to bulbasaur
bulbasaur.learnAttackSkill(razorLeaf);
bulbasaur.learnAttackSkill(tackle);

// Adding attack skills to eevee
eevee.learnAttackSkill(sandAttack);
eevee.learnAttackSkill(babyDollEyes);

// Adding attack skills to charizard
eevee.learnAttackSkill(fireFang);
eevee.learnAttackSkill(fireSpin);

// Adding attack skills to snorlax
eevee.learnAttackSkill(lick);
eevee.learnAttackSkill(tackle);

// Adding attack skills to psyduck
eevee.learnAttackSkill(tailWhip);
eevee.learnAttackSkill(confusion);

// Adding attack skills to squirtle
eevee.learnAttackSkill(waterGun);
eevee.learnAttackSkill(bite);

// Adding attack skills to jigglypuff
eevee.learnAttackSkill(tailWhip);
eevee.learnAttackSkill(airSlash);

/////////////// fight ////////////

console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
// console.log(pikachu);
// console.log(bulbasaur);
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("------------------");
console.log(pikachu.attack(0, bulbasaur));

// console.log(pikachu);
// console.log(bulbasaur);
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("------------------");
// console.log(`recharge magic:`, pikachu.getMagic());





