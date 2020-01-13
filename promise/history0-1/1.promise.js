// promise  https://promisesaplus.com/
// 有可能别人写的promise是一个函数
let Promise = require('./promise');
let promise = new Promise((resolve,reject)=>{
    resolve('xxx');
    // throw new Error('错误')
    // reject('val');
})
promise.then((data)=>{
    console.log('res',data);
},(err)=>{
    console.log(err);
})