Function.prototype.inherits = function(Parent) { 
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


function MovingObject(name, speed) {
    this.name = name;
    this.speed = speed;

 }

 MovingObject.prototype.goFast = function() { 
     console.log(`${this.name} goes ${this.speed}MPH`)
 }


 function Ship(name, speed) { 
    MovingObject.call(this, name, speed)

}
Ship.inherits(MovingObject);

function Asteroid() {


 }
Asteroid.inherits(MovingObject);

let mill = new Ship('millenium falcon', 100000)
console.log(mill.goFast())