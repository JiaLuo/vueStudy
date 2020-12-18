import Vue from 'vue'
import Home from '../views/home'
import About from '../views/about'
import VueRouter from '../kvue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',component:Home},
        {path:'/about',component:About}
    ]
})