// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.
function Cat(name) {
    this.name = name;
    this.tiredness = 50; 
    this.hunger = 50; 
    this.loneliness = 50; 
    this.happiness = 50; 
    // Scale of 0-100
    
    this.feed = function() {
        this.hunger -= 10;
        if (this.hunger < 0) this.hunger = 0;
        this.happiness += 5;
        if (this.happiness > 100) this.happiness = 100;
    };

    
    this.sleep = function() {
        this.tiredness -= 10;
        if (this.tiredness < 0) this.tiredness = 0;
        this.happiness += 5;
        if (this.happiness > 100) this.happiness = 100;
    };

    
    this.pet = function() {
        this.loneliness -= 10;
        if (this.loneliness < 0) this.loneliness = 0;
        this.happiness += 10;
        if (this.happiness > 100) this.happiness = 100;
    };

   
    this.status = function() {
        return `${this.name}'s Status:\n` +
               `Tiredness: ${this.tiredness > 50 ? 'Very tired' : 'Not tired'}\n` +
               `Hunger: ${this.hunger > 50 ? 'Really hungry' : 'Not hungry'}\n` +
               `Loneliness: ${this.loneliness > 50 ? 'Feels lonely' : 'Feels happy'}\n` +
               `Happiness: ${this.happiness > 50 ? 'Very happy' : 'Not happy'}`;
    };
}
let myCat = new Cat("Kiwif");
myCat.feed();
myCat.pet();
myCat.sleep();
let status = myCat.status();

