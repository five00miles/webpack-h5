let a = 1;
const b = 2;

(() => {
  console.log('箭头函数')
})()

let c = () => { };
let e = (d) => d;

const double = [1, 2, 3].map((num) => num * 2);
console.log(double); // [2,4,6]


let bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());


class Apple {
  constructor() {
    this.name = Symbol('apple');
    this.attrs = new Map();
  }

  hello() {
    console.log('hello');
  }
}

let apple = new Apple()
apple.hello()

let ajaxUserPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('500ms')
      reject('')
    }, 500);
  })
}
let ajaxLotteryPromise = function (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('200ms')
      reject('')
    }, 200);
  })
}
let proAll2 = Promise.all([ajaxUserPromise(), ajaxLotteryPromise()]).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
  console.log('至少有一个失败')
}).finally(() => {
  console.log('finally')
})

let proAll = Promise.allSettled([ajaxUserPromise(), ajaxLotteryPromise()]).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
  console.log('至少有一个失败')
}).finally(() => {
  console.log('finally')
})

let proAny = Promise.any([ajaxUserPromise(), ajaxLotteryPromise()]).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
  console.log('any 至少有一个失败')
}).finally(() => {
  console.log('finally')
})


