// CommondJS导入require并获取数据及方法语法,需环境支持，此处只知识语法

// 方式1：不推荐
// var moduleA = require('./a.js');
// var flag = moduleA.flag;
// var name = moduleA.name;
// var num = moduleA.num;


// 方式2：ES6对象的解构语法
var {flag, name, num} = require('./a.js'); 
num(2,3);
