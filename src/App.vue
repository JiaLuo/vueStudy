<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->

    <!-- <hello-world ref="hw" msg="demoa" @foo="onFoo($event)"> -->
      <!-- 匿名插槽 -->
      <!-- <template v-slot:default>ssdfdsfsd</template> -->
      <!-- 具名插槽 -->
      <!-- <template v-slot:content>具名插槽111</template> -->
      <!-- 作用域插槽 -->
      <!-- 分发内容要用到子组件中的数据 -->
      <!-- <template v-slot:slotScope="{ eee, fff }">{{ eee }}{{ fff }}</template> -->
    <!-- </hello-world> -->
    <!-- <hello-world2 msg2="demoa2">sssssss</hello-world2> -->


    <!-- 仿element ui 写form表单验证 -->
    <!-- <input-test></input-test> -->

    <!-- <vuex-test></vuex-test> -->
    <k-vuex-test></k-vuex-test>




    <!-- 组件递归 -->
    <!-- <tree></tree> -->


    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/> -->

    <!-- 自定义全局组件 -->
    <!-- <comp></comp> -->
  </div>
</template>

<script>
import Helloworld from "./components/HelloWorld";
import Helloworld2 from "./components/HelloWorld2";
import InputTest from "./components/form/index";
import Tree from "./components/tree/index";
import VuexTest from "./components/VuexTest";
import kVuexTest from "./components/kVuexTest";
export default {
  name: "App",
  provide() {
    return {
      bbb: "bbb",
      ddd: this.ccc,
    };
  },
  data() {
    return {
      ccc: "ccc",
      eee: "eee",
    };
  },
  components: {
    "hello-world": Helloworld,
    "hello-world2": Helloworld2,
    "input-test": InputTest,
    "tree":Tree,
    "vuex-test":VuexTest,
    "k-vuex-test":kVuexTest,
  },
  mounted() {
    //ref在dom操作频繁的时候使用
    // console.log(this.$refs.hw.foo);
    //使用this.$children拿到自定义组件子元素  （⚠️ 子元素不保证顺序，也不响应式）
    // this.$children[0].foo = "dong";
  },
  methods: {
    onFoo(event) {
      //自定义事件 观察者模式 谁派发谁监听
      // console.log(111);
      // console.log(event);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
