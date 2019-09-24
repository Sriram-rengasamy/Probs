const [
    FULLFILLED,
    REJECTED,
    PENDING
]  = [true, false, void 0];

const defineProperty = (target, propName, propValue) => {
    Object.defineProperty(target, propName, {value: propValue});
};
const isThenable = 
    (subject) => subject && typeof subject.then == 'function';

class Promifill {
   get state(){
       return PENDING;
   }

   get value(){
       return void 0;
   }

   get settled (){
       return false;
   }

    constructor(executor) {
        if(typeof executor !== 'function')
            throw new TypeError("Promise resolver is not a function");

        defineProperty(this, 'observers', []);   
        const secret = []; 
        const resolve = (value, bypassKey) => {
           if(this.settled && bypassKey !== secret)
                return;
           defineProperty(this, 'settled', true); 

            const thenable = isThenable(value);
            if(thenable && value.state === PENDING){
                value.then(
                    (v) => resolve(v, secret),
                    (r) => reject(r, secret)
                    );
            }
            else {
                defineProperty(this, 'value', thenable ? value.value : value);
                defineProperty(this, 'state', thenable ? value.state : FULLFILLED);
            }
        }

        const reject = (reason, bypassKey) => {
          if(this.settled && bypassKey !== secret)
               return;   
          defineProperty(this, 'settled', true); 
          defineProperty(this, 'value', reason);
          defineProperty(this, 'state', REJECTED);
        }

        try{
            executor(resolve, reject);
        }
        catch(error){
            reject(error);
        }
       
    }

    then(onfulfill, onreject) {
        return new this.constructor((resolve, reject)=>{
            const internalOnfulfill = 
            (value)=>{
                try{
                    resolve(
                            typeof onfulfill == 'function' ?
                            onfulfill(value) :
                            value
                        );
                }
                catch(error){
                    reject(error);
                }
             
            };
            
            const internalOnreject = 
            (reason)=> {
                try{
                    if(typeof onreject == 'function'){
                        resolve(onreject(reason));
                    }
                    else{
                        reject(reason);
                    }   
                }
                catch(error){
                    reject(error);
                }
               
            };

            this.observers.push({
                onfulfill: internalOnfulfill,
                onreject: internalOnreject
            });



        });
    }

}

