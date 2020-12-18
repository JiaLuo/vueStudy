// mixin其实就是一个对象
export  default {
    methods:{
        dispatch(eventName,data){
            let parent = this.$parent;
            //查找父元素
            while(parent){
                //父元素用$emit触发
                parent.$emit(eventName,data);
                //递归查找父元素
                parent = parent.$parent;
            }
        },
        boardcast(eventName,data){
            boardcast.call(this,eventName,data);
        }
    }
}

function boardcast(eventName,data){
    this.$children.forEach(child =>{
        //子元素触发$emit
        child.$emit(eventName,data);
        if(child.$children.length){
            //递归调用，通过call改变this指向，child
            boardcast.call(child,eventName,data);
        }
    })
}