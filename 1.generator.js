// generator 生成器 生成的是迭代器
// 普通函数执行时 没有停止功能，generator函数 可以暂停
function* read () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}