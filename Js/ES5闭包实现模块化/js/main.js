// 用到其他模块的JS需要最好导入
// 多个文件引用加法封号能防止相互干扰   
;
(function(){
  
  console.log(modulesA.message);
  console.log(modulesB.message);

  modulesA.sum(1,2);
  modulesB.sum(2,5);

})()