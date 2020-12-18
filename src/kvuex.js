//1.维护状态state
//2.修改状态commit
//3.业务逻辑控制dispatch
//4.状态派发getter
//5.实现state的响应式
//6.插件
//7.混入




let Vue;
function install(_Vue,storeName = '$store'){
    Vue = _Vue;
    //混入：把store选项指定到Vue原型上
    // 要访问当前组件的实例，这样才能拿到当前实例的对象，拿到配置选项，拿到store
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype[storeName] = this.$options.store;
            }
        }
    })
}

class Store{
    // options :{state:{count:0},mutations:{count(state){}}}
    constructor(options = {}){
        this.state = new Vue({
            data:options.state
        });
        //初始化mutations
        this.mutations = options.mutations || {};
        this.actions = options.actions || {};

        options.getters && this.handlerGetters(options.getters);
    }
    //触发mutations 需要实现commit
    commit = (type,arg) => {
        //this指向Store实例
        const fn = this.mutations[type];//获取变更函数
        fn(this.state,arg);
    }

    dispatch(type,arg){
        const fn = this.actions[type];
        return fn({commit:this.commit,state:this.state},arg)
    }


    // {getters:{score(state){return state.xxx}}}
    handlerGetters(getters){
        this.getters = {}; //这是store实例上的getters
        //定义只读的属性
        Object.keys(getters).forEach(key =>{
            Object.defineProperty(this.getters,key,{
                get:() =>{
                    return getters[key](this.state)
                }
            })
        })
    }
}

export default{Store,install}