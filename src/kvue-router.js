let Vue;
class VueRouter{

    constructor(options){
        //options 是配置对象
        this.$options = options;

        //创建一个路由path和route映射
        this.routeMap = {};

        //将来当前路径current 需要响应式 利用Vue响应式原理可以做到这一点

        this.app = new Vue({
            data:{
                current:"/"
            }
        })
    }

    init(){
        //绑定浏览器事件
        this.bindEvents();

        //解析路由配置
        this.createRouteMap(this.$options);

        this.initComponent();
    }

    bindEvents(){
        window.addEventListener('hashchange',this.onHashChange.bind(this))
        window.addEventListener('load',this.onHashChange.bind(this))
    }

    onHashChange(){
         //slice去掉#
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap(options){
        options.routes.forEach(item =>{
            // ['/home'] : {path:'/home',component:Home}
            this.routeMap[item.path] = item;
        })
    }

    initComponent(){
        //生命全局组件
        Vue.component('router-link',{
            props:{
                to:String
            },
            render(h){
                //h 函数 第一个参数是标签名字
                     // 第二个参数是属性
                     // 第三个参数是子元素
                // return h('a',{attrs:{href:'#' + this.to}},this.$slots.default)
                return <a href={this.to}>{this.$slots.default}</a>
            }
        })

        Vue.component('router-view',{
            render:(h) =>{
                const Comp = this.routeMap[this.app.current].component;
                return h(Comp);
            }
        })
    }
}

//组件实现install方法，就变成插件
VueRouter.install = function(_Vue){
    Vue = _Vue; //这里保存 上面使用

    //混入任务
    Vue.mixin({
        beforeCreate(){
            //这里的代码将来会在外面初始化的时候调用
            //这样就实现了Vue扩展
            //this是谁？Vue组件实例
            //只希望执行一次
            if(this.$options.router){
                // Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}

export default VueRouter