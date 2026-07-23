// A circuit breaker is a design pattern that helps to prevent cascading failures.
/* 
    Imagine you are making an API call and the request keeps failing, rather than keep on bombarding the server,
    we can halt the request sending for a certain time. That is how a circuit breaker works.
*/


console.log("CIRCUIT BREAKER------");

//Synchronous version , you can make it asynchronous
function circuitBreaker(
    fn: (...args: any[]) => any,
    failureCount: number,
    timeThreshold: number
) {
    let failures = 0;
    let timeSinceLastFailure = 0;
    let isOpen = false;

    return function (...args: any[]) {

        if (isOpen) {
            const diff = Date.now() - timeSinceLastFailure;

            if (diff > timeThreshold) {
                console.log("Trying service again...");
                isOpen = false;
            } else {
                console.log("Service unavailable");
                return;
            }
        }

        try {
            const response = fn(...args);

            failures = 0; // reset on success
            return response;

        } catch (err) {
            failures++;
            console.log("Error:", err);

            if (failures >= failureCount) {
                isOpen = true;
                timeSinceLastFailure = Date.now();
                console.log("Circuit Opened");
            }
        }
    };
}

function testFunction() {
    let count = 0;

    return function () {
        count++;

        if (count < 4) {
            throw new Error("failed");
        }

        return "hello";
    };
}

const t = testFunction();
const c = circuitBreaker(t, 3, 200);

c(); // Error
c(); // Error
c(); // Error + Circuit Opened

c(); // Service unavailable
c(); // Service unavailable
c(); // Service unavailable

setTimeout(() => {
    console.log(c()); // Trying service again... hello
}, 300);