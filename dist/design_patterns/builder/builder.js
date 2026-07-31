"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 BUILDER DESIGN PATTERN

 Definition: Builder design pattern helps to create the objects with only required values,
 for this, we can create a no-args constructor and then build the object step-by-step and then get the final result from it.

 ForExample:
 et's say you have a payment object, before making the final payment, we want to continuously add the amount.
 In that case, we can do the method chaining (alternative name for Builder design pattern) where we return the
 reference of the current object from the methods so that the methods of the same object can be used as required.

As the Builder design pattern helps to build the object step-by-step, we can create different versions of output of
the same object without creating a new constructor every time,

*/
console.log("_______BUILDER PATTERN_____");
class Payment {
    currency = "";
    amount = 0;
    constructor(currency = '$', amount = 0) {
        this.currency = currency;
        this.amount = amount;
    }
    addAmount(val) {
        this.amount += val;
        return this;
    }
    pay() {
        console.log(`${this.currency}${this.amount}`);
    }
}
const p1 = new Payment();
p1.addAmount(101).addAmount(100).pay();
//# sourceMappingURL=builder.js.map