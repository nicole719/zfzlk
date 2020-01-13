//对某些函数进行扩展 面向切片编程
function say (who) {
  console.log('say', who)
}
Function.prototype.before = function (callback) {
  return (...args) => {
    callback();
    this(...args);
  }
}
let newSay = say.before(function () {
  console.log('刷牙')
})
newSay('我');