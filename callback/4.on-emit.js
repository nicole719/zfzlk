// 订阅 on 发布 emit promise内部也是基于发布订阅的
let fs = require('fs');
let e = {
  _obj: {},
  _callback: [],
  on (callback) {
    this._callback.push(callback);
  },
  emit (key, value) {
    this._obj[key] = value;
    this._callback.forEach(fn => {
      fn(this._obj);
    })
  }
}
e.on(function (obj) {
  console.log('获取一个');
})
e.on(function (obj) {
  if (Object.keys(obj).length === 2) {
    console.log(obj);
  }
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
  e.emit('age', data);
})
fs.readFile('./name.txt', 'utf8', function (error, data) {
  e.emit('name', data);
})

// 发布订阅 所有库中都存在发布订阅 特点是 订阅方和发布方 没有任何的关系