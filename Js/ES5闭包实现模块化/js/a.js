
// 匿名函数闭包，则不会引起外部的变量冲突
var modulesA = (function(){

  var obj = {};

  obj.message = "modulesA message";

  obj.sum = function (num1,num2) {
    var result = num1 + num2
    console.log("modulesA sum:" + result);
  }

  return obj
  
})()