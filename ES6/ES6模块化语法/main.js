
// 如果html中a.js加上type="module"属性，main.js要引用a.js中的属性和方法，必须导入import属性和方法
import {name,flag, person} from "./a.js";
//import {person} from "./a.js";

if(flag){
  console.log(name);
}

// let person = new person();
// console.log(person.sex);
// console.log(person.height);
// person.run();
