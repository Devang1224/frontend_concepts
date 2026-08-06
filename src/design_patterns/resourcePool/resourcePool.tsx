/*
    Object pool, also known as resource pool, is a design pattern in which, when an object is requested,
    it is returned from the pool of available objects; if the object is not available, it will be created.Objects
    whose work is done can be released back to the pool so that they can be returned.

    When initializing a class instance is expensive, there is a high rate of class instantiation,
    and there are few instantiations in use at any given time, object pooling can result in significant performance
    gains.The memory is periodically cleaned with the help of garbage collection.

    This declaration of array is slower than the other declaration
    const normalArray = (n) => {
      const arr = [];
      for (let i = 0; i < n; i++) {
         arr.push(i);
       }
     }
     

     Efficient way
     const arrayWithPreAllocation = (n) => {
         const arr = new Array(n).fill(0);
         for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
     }

*/

// Resource Pool with manual release

interface PoolMember<T>{
    data: T | null;
    available: boolean;
}

class ResourcePoolMember<T> implements PoolMember<T> {
    data: T | null = null;
    available = true;
   constructor(data:T){
    this.data = data;
    this.available = true;
   }
}

class ResourcePool<Y> {
    pool:ResourcePoolMember<Y>[] = [];
    creatorFunction:()=>Y;
    resetFunction:(data:Y)=>Y;
    constructor(creatorFunction:()=>Y,resetFunction:(data:Y)=>Y,size=1000){
        this.creatorFunction = creatorFunction;
        this.resetFunction = resetFunction;
        this.pool = new Array(1000).fill(0).map(()=>this.createElement());
    }

    createElement(){
        const data = this.resetFunction(this.creatorFunction());
        return new ResourcePoolMember(data);
    }

    getElement(){
        for(let i=0;i<this.pool.length;i++){
           const member = this.pool[i];

            if (member && member.available) {
              member.available = false;
              return member;
             }
        }
    }

    releaseElement(element:ResourcePoolMember<Y>){
        element.available = true;
        if(element.data){
            element.data = this.resetFunction(element.data);
        }
     }
     

}