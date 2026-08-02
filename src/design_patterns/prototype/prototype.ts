/* The objects have a special property called prototype available to them that
 holds the reference to the parent that has created it.
 
 If you are declaring an object directly then the prototype will point to 
 the default properties that are available on an object in JavaScript.
 */



// we have a Class that extends another Class and we have added a property on the prototype of the first class, still when we try to access that property report it looks for it in the chain and invokes it.


class Robot {
    name=""
   constructor(name:string){
     this.name = name;
   }

   fire(){
     return 'phew phew';
   }
};

class Transform extends Robot {
    nature="";
  constructor(name:string, nature:string){
    super(name);
    this.nature = nature;
  }
  
  getNature(){
    console.log(`I am ${this.nature}`);
  }
}

const robo1 = new Transform('RoboCop', 'good');
const robo2 = new Transform('AutoBot', 'evil');

Robot.prototype.report = function(){
  console.log(`${this.name} reporting sir!`);
}

robo1.report();
//RoboCop reporting sir!

robo2.report();
//AutoBot reporting sir!