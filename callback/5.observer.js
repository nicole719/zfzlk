// 观察者模式 观察者和被观察者 是有关联的 观察者需要将自己放到被观察者之上,当被观察者状态发生变化 ，需要通知所有的观察者
// es6写法 类
class Subject {
  //params参数
  constructor(name) {
    this.name = name;
    this.state = "开心";
    this.observers = [];
  }
  attach (o) {
    this.observers.push(o);
  }
  setState (state) {
    this.state = state;
    this.observers.forEach(o => {
      o.update(this)
    })
  }
  //原型上的方法
  // aaa () {

  // }
}
class Observer {
  construct (name) {
    this.name = name;
  }
  update (s) {
    console.log(this.name + ':' + s.name + '当前的状态是' + s.state);
  }
}
let baby = new Subject('小宝宝');
let parent = new Observer('爸爸');
let mother = new Observer('妈妈');
baby.attach(parent);
baby.attach(mother);
baby.setState('不开心');
baby.setState('开心');
//es5写法 类
// function Observer () {


// }
// Observer.prototype.aaa = function name (params) {

// }

