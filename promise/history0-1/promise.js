const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';
function resolvePromise (promise2,x,resolve,reject){
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise> --'))
    }
    if((typeof x ==='object' && x!=null) || typeof x === 'function'){
        try{
            let then = x.then;
            if(typeof then === 'function'){ 
                then.call(x,(y)=>{
                    resolve(y);
                },(r)=>{
                    reject(r);
                })
            }else{
                resolve(x)
            }
        }catch(e){
            reject(e);
        }
    }else{
        resolve(x)
    }
}
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if (this.status === PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then(onfulfilled, onrejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onfulfilled(this.value);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    // TODO... 切片编程
                    setTimeout(() => {
                        try{
                            let x = onfulfilled(this.value);
                            resolvePromise(promise2,x,resolve,reject);
                        }catch(e){
                            reject(e);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try{
                            let x = onrejected(this.reason);
                            resolvePromise(promise2,x,resolve,reject);
                        }catch(e){
                            reject(e);
                        } 
                    }, 0);
                })
            }
        })

        return promise2; // 返回这个promise
    }

}
module.exports = Promise;