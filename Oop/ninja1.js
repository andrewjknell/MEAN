function Ninja(name) {
    var ninja = {};
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    this.drinkSake = function() {
        this.health += 15;
    }
    this.kick = function(object instanceof ninja) {
        this.health += 15;
    }
}

var ninja1 = new Ninja("Danielson");
ninja1.sayName();
ninja1.showStats();
