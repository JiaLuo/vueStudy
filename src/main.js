// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import store from './store/index'
import store from './store/kIndex'
// import router from './router/kRouter'

Vue.config.productionTip = false
// 每一次h函数执行，会返回一个标签所对应的节点

// <div id="box" class="foo"><span>aaa</span></div>

// template :'<div id="box" class="foo"><span>aaa</span></div>' 
//上面这种只有在带编译器的vue中才可以使用。通俗来讲，就是要扔到浏览器中，通过模版编译
//创建一个全局组件
Vue.component('comp',{
  // template :'<div id="box" class="foo"><span>aaa</span></div>' 
  render(h){
    return h(
      'div',
      {
        class:{
          foo:true
        },
        attrs:{
          id:'box'
        }
      },
      [
        h('span','aaa')
      ]
    );
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
