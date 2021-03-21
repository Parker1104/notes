let name = "main.js";
let flag = true;

// 如果html中a.js加上type="module"属性，必须导出export属性和方法才能被外部JS使用。

// 方式一:
export { name, flag }

// 方式二:
export let a = "a";
export let b = "b";
// 函数
export function fn (num1, num2) {
  return num1 + num2
};
// 箭头函数
export let fn1 = (num1,num2) => {num1*num2};
//    类
export class person {
  constructor(){
    this.sex = "male";
    this.height = "1.88";
  }
  run () {
    console.log("在奔跑");
  }
}


// 方式三：export default 在同一个模块中只能出现一个，且在其他js中import可以自定义命名而且不用加大括号，例：import appname from "./a.js"
export default app = "饿了没"

// 方式四：统一导入
import * as aaa from "./main.js"

console.log(aaa.flag);