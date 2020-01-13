let fs = require('fs');

function after (times, callback) {
  let renderObj = {};
  return function (key, value) {//out
    renderObj[key] = value;
    if (--times == 0) {
      callback(renderObj);
    }
  }
}
let out = after(2, function (renderObj) {
  console.log(renderObj);
})
fs.readFile('./age.txt', 'utf8', function (error, data) {
  // renderObj['age'] = data;
  out('age', data);
})
fs.readFile('./name.txt', 'utf8', function (error, data) {
  // renderObj['name'] = data;
  out('name', data);
})