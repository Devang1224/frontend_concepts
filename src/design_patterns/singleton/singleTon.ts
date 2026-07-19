/* 
Definition: In this there is only one object created for each interface (class or function) and the same object is returned every time
when the function or class is called.

Use Case: when you need exactly one instance of class to exist throughout your application.

*/

class SingleTon {

// A static property or method belongs to the class itself, not to an object(instance) of the class
static instance: SingleTon;
name:string = "";

private constructor(){};

static getInstance():SingleTon{
    if(!SingleTon.instance){
        SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
}

setName(name:string){
    this.name = name;
}

}

const obj1 = SingleTon.getInstance();
const obj2 = SingleTon.getInstance();
// so here the obj1 and obj2 will share the same instance of the class, both are sharing the same copy of name

obj1.setName("tester1");
obj2.setName("tester2");

console.log(obj1.name);
console.log(obj2.name);

/*
output:
tester2
tester2 
*/



