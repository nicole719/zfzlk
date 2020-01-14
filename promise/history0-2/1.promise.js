let Promise = require('./promise')
const promise = new Promise((resolve, reject) => {
  resolve('hello');
})
// let promise2 = promise.then((data) => {
//   return 100;
// })
// // 1.每次调用then方法时 都返回一个新的promise实例
// promise2.then((data) => {
//   console.log('success:' + data);
// })

let promise2 = promise.then(() => {
  throw new Error('error');
})
promise2.then((data) => {
  console.log('ssss:' + data);
}, (err) => {
  console.log(err);
})