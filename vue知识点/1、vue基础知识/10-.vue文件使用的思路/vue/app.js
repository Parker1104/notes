  // ES6语法将组件对象导出
  export default {
    template: `
    <div>
      <h2>{{message}}</h2>
      <h2>{{name}}</h2>
      <button @click="btnClick">按钮</button>
    </div>`,
    data() {
      return {
          message: "hello",
          name: "vue"
      }
    },
    methods: {
      btnClick() {
        alert("哈哈")
      }
    },
  }

  // 实际开发中，此JS就相当于.vue结尾的文件