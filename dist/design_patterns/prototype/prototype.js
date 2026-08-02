"use strict";
/* The objects have a special property called prototype available to them that
 holds the reference to the parent that has created it.
 
 If you are declaring an object directly then the prototype will point to
 the default properties that are available on an object in JavaScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// we have a Class that extends another Class and we have added a property on the prototype of the first class, still when we try to access that property report it looks for it in the chain and invokes it.
class Robot {
    name = "";
    constructor(name) {
        this.name = name;
    }
    fire() {
        return "phew phew";
    }
}
Robot.prototype.report = function () {
    console.log(`${this.name} reporting sir!`);
};
class Transform extends Robot {
    nature = "";
    constructor(name, nature) {
        super(name);
        this.nature = nature;
    }
}
const robo1 = new Transform("RoboCop", "good");
robo1.report();
//# sourceMappingURL=prototype.js.map