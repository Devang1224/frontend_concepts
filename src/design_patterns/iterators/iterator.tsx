console.log("____ITERATORS___");

/*  
The iterator is a function that takes the collection as input and returns an object that has different methods, majorly next().
forex:
const arr = [1, 2, 3, 4];
const iterator = createIterator(arr);

iterator.next(); // {value: 1, done: false}

iterator function can be created using closures but es6 already has generator function
*/

/* Generator Function 
 A generator function in JavaScript is a special type of function that can pause its execution and resume later,
 allowing it to produce a sequence of values over time instead of returning a single value.
 
 use the yield keyword to pause execution.
  
 For Example:
 function* Gen(){
    yield* ["a","b","c"];
 }
const g = Gen();

console.log(g.next());
// { value: "a", done: false }

console.log(g.next());
// { value: "b", done: false }

console.log(g.next());
// { value: "c", done: false }

console.log(g.next());
// { value: undefined, done: false }

*/


/* 
 Generating iterators through Symbol.iterator

 const g = {};
 g[Symbol.iterator] = function* (){
  yield 1;
  yield 2;
  yield 3;
 }
 console.log([...g]); // [1,2,3]
 */

const arr = [1,2,3,4,5,6];

function* Iterator(iterable:any[]){
    let current = 0;
    while(current < iterable.length){
        yield iterable[current];
        current++;
    }
    
}


const it = Iterator(arr);

console.log(it.next());


