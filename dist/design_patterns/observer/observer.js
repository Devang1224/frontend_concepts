"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 A subscription model in which an object subscribe to a host and the host notifies the object whenever an event occurs is
 known as observer pattern or pub/sub.

forex: when a click event is triggered we can access all the click event properties like its position on the screen ,etc
we can also unsubscribe or remove the listener to stop listening

Host:
1) will maintain the list of observers
2) provides options to subscribe and unsubscribe to the observers
3) notifies the observer when state changes

Observers:
1) has a function that gets called every time a state changes

*/
console.log("OBSERVER-----");
class Host {
    observers = [];
    subscribe(callback) {
        this.observers.push(callback);
    }
    unSubscribe(fn) {
        this.observers = this.observers.filter((item) => item != fn);
    }
    fire(params, thisObj) {
        let scope = thisObj ?? window;
        this.observers.forEach((item) => {
            item.call(scope, params);
        });
    }
}
const host = new Host();
host.subscribe((name) => { console.log("Hello", name); });
host.subscribe((name) => console.log("How are you", name));
host.fire('devang', 'devang');
//# sourceMappingURL=observer.js.map