<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide(){
            return{
                form:this,//传递form实例给后代
            }
        },
        props: {
            model: {
                type: Object,
                required:true 
            },
            rules:{
                type:Object
            }
        },
        methods: {
            validate(callback) {
                //map结果是若干promise数组
                const tasks = this.$children
                    .filter(item => item.prop)
                    .map(item => item.validate());
                //所有任务必须校验成功才算通过
                Promise.all(tasks)
                    .then(() => callback(true))
                    .catch(() => callback(false))
            }
        },
    }
</script>

<style scoped>

</style>