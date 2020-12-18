import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import List from '@/views/list'
import Detail from '@/views/detail'
import About from '@/views/about'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name:"home",
    //   component: HelloWorld,
    // },
    {
      path:'/',
      component:Home,
      children:[
        {path:"/list",name:"list",component:List},
        {path:"/detail/:id",name:"detail",component:Detail,props:true},
      ]
    },
    {
      path:'/about',
      name:'about',
      meta:{auth:true},//需要认证
      // beforeEnter:{},//路由级钩子 
      component:About,
      
    }
  ]
})

//全局守卫
/**
 * to 到哪去
 * from 从哪来
 * next 接下来是不是想去的命令启动按钮
 */
router.beforeEach((to,from,next) =>{
  console.log(window.isLogin)
  if(to.meta.auth && !window.isLogin){
    if(window.confirm('请登录')){
      window.isLogin = true;
      console.log(window.isLogin)
      next(); //登录成功
    }else{
      next('/')//回首页
    }
  }else{
    next(); //不需登录
  }
})

export default router

