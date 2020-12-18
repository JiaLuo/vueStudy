import Vue from 'vue'

/**
 * 创建指定组件实例并挂载于body上
 * @param {*} components  组件名称
 * @param {*} props 若干属性，让组件更生动
 */
export default function create(component,props){
    //传入对象 比如{data:dksjfks,methods:{}} 返回的值是一个构造函数
    //Ctor =  Vue.extend() 得到真正的构造参数
    //可以用 new Ctor()

    
    //1、创建vue实例
    const vm = new Vue({
        render(h){
            // render方法提供一个h（createElement别名）函数 ,可以渲染vNode
            // 参数1:创建节点名称
            // 参数2:各种各样的参数，一般说是一个对象
            // 参数3:子元素，可能多个，一般用数组
            return h(component,{props})
        }
    }).$mount();

    // $mount();
    //参数中需要指定宿主，也就是容器，挂载到谁身上去，一般指的 <div id="app"></div> $mount('#app')

    //2、上面的vm创建组件实例
        // 通过$children获取该组件实例
    const comp = vm.$children[0];
    //3、追加至body
    
    // vm.$el 真实节点
    document.body.appendChild(vm.$el);

    
    //4、清除函数
    comp.remove = () =>{
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }

    //5、返回实例
    return comp;
} 