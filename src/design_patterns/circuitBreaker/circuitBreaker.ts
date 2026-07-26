// A circuit breaker is a design pattern that helps to prevent cascading failures.
/* 
    Imagine you are making an API call and the request keeps failing, rather than keep on bombarding the server,
    we can halt the request sending for a certain time. That is how a circuit breaker works.
*/


console.log("CIRCUIT BREAKER------");

//Synchronous version , you can make it asynchronous
function circuitBreaker(
    fn: (...args:any)=>void,
    failureCount:number,
    timeThreshold: number
) {
     let failures = 0;
     let timeSinceLastFailure = Date.now();
     let isClosed = false;

    return function(...args:any){

        if(isClosed){
            const diff = Date.now() - timeSinceLastFailure;
            if(diff > timeThreshold){
                isClosed = false;
            }else{
                console.log("try again after some time");
                return;
            }
        }
        
        try{
            const resp = fn(...args);
            failures = 0;
            return resp;
        }catch(err){
            failures++;
            if(failures>=failureCount){
                isClosed=true;
            }
            timeSinceLastFailure = Date.now();
        }
    }


}

function testFunction() {
    let count = 0;

    return function () {
        count++;

        if (count < 4) {
            console.log("api failed")
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