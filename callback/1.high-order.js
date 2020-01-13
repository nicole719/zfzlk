//判断类型方法
// 1.typeof 无法辨别对象类型   2.construct 谁构造出来的  3.instance of 判断谁是谁的实例 4.Object.prototype.toString.call

// 闭包：在定义的时候，函数就决定了 一个函数不在自己的所在作用域下执行
function isType (type) {
  return function (content) {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}
let isString = isType('String');
isString('hello');
let isNumber = isType('Number');
isNumber(123);
console.log(isType('hello', 'String'))
console.log(isType(123, 'Number'));
let util = {};
['String', 'Number'].forEach((type) => {
  util['is' + type] = isType(type);
})
console.log(util.isString('123'));

//函数的柯里化 
// 1）函数的柯里化（缩小函数的范围）
// 柯里化的函数在接受这些参数后，并不会立即运算求值，而是返回另外一个函数，传入的参数在函数中通过闭包的方式保存起来，等到需要求值的时候，在一次性运算求值。
// var currying = function (fn) {
//   var args = [];
//   // 取到arguments中除了第一项以外的参数
//   args = args.concat([].slice.call(arguments, 1));
//   return function () {
//     if (arguments.length === 0) {
//       return fn.apply(this.args);
//     } else {
//       [].push.apply(args, arguments);
//       //callee属性指代当前正在执行的函数
//       return arguments.callee;
//     }
//   }
// }
// function isType (type, content) {
//   return function () {
//     for (var i = 0; i < content.length; i++) {
//       return Object.prototype.toString.call(content) === `[object ${type}]`
//     }
//   }
// }
// let isString = currying(isType, 'String')
// isString('hello')
// 2)函数的反柯里化（扩大函数的范围）
// Object.prototype.toString.call => toString()
// Function.prototype.uncurrying = function () {
//   var thiz = this;
//   return function () {
//     return Function.prototype.call.apply(thiz, arguments);
//   }
// };
// function sayHi () {
//   return "Hello " + this.value + " " + [].slice.call(arguments);
// }
// var sayHiuncurrying = sayHi.uncurrying();
// console.log(sayHiuncurrying({ value: 'world' }, "hahaha"));
// var uncurrying = function (fn) {
//   return function () {
//     var args = [].slice.call(arguments, 1);
//     return fn.apply(arguments[0], args);
//   }
// };

