"use strict";
/* Definition: Proxy is the concept of doing things via an intermediatory, for example, if you want to change something in
 the original source, you hand your changes to your proxy which can do all sorts of validations on it to make sure only legit
 things are passed and then it forwards to the original source.

 SYNTAX:
 const person = {
    name:"devang",
    age:24,
    gender: "male"
};
 const proxiedPerson = new Proxy(person, {
  get(){
    // intercept get
  },
  set(){
    // intercept get
  }
});

Overusing them can drastically hamper the performance of the application, thus they should be used in cognizance.

*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log("____PROXY PATTERN____");
const person = {
    name: "devang",
    age: 24,
    gender: "male"
};
const proxiedPerson = new Proxy(person, {
    get(obj, prop) {
        if (prop == "gender") {
            console.log("cannot access gender property");
        }
        else {
            return Reflect.get(obj, prop); // equivalent to target[propertyKey]
        }
    },
    set(obj, prop, value) {
        if (prop === "gender") {
            console.log("cannot update gender property");
            // return false;  to emit an error for now passing truthy value
            return true;
        }
        else {
            Reflect.set(obj, prop, value); // receiver can be used to pass custom this object
            return true;
        }
    }
});
console.log(proxiedPerson.gender);
proxiedPerson.age = 25;
proxiedPerson.gender = "female";
//# sourceMappingURL=proxy.js.map