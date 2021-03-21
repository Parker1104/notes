
;
// 匿名函数闭包，则不会引起外部的变量冲突
var modulesB = (function(){

  var obj = {};

  obj.message = "modulesB message";

  obj.sum = function (num1,num2) {
    var result = num1 + num2
    console.log("modulesB sum:" + result);
  }

  return obj
  
})()