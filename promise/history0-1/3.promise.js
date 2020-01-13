let promise = new Promise((resolve,reject)=>{
    resolve('hello');
})
let p1 = promise.then(data=>{
   return data;
})
let p2 = p1.then(data=>{
    return new Promise((resolve)=>{
        console.log(data)
        setTimeout(()=>{
            resolve('hello');
        },1000)
    })
}).then(data=>{
    console.log(data)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('world');
        },1000)
    })
}).then(()=>{
    console.log(data)
},(err)=>{
    console.log(err)
}).then(()=>{
    console.log('成功');
    throw new Error('失败了');
},()=>{

}).then(()=>{},(err)=>{
    console.log('失败');
}).catch(err=>{
    console.log(err)
}).then(()=>{
    console.log('then');
})