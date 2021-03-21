// CommondJS模块化环境下，一个JS文件就是一个模块，不存在命名冲突问题，所以不用实现闭包。

var name = "a";
var flag = "true"
function num (num1,num2) {
  return num1 + num2
}

// CommondJS 导出语法module.exports，没环境无法解析，只是语法
module.exports = {
  name,
  flag,
  num,
}