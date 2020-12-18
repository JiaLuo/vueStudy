<template>
    <div>
        <h3>vuex test</h3>
        <p>{{$store.state.a.count}}</p>
        <!-- 加上namespaced（命名空间）要访问的时候需要 模块名称 加 方法名字 -->
        <p>{{$store.getters["a/score"]}}</p>
        <button @click="add">add</button>
        <button @click="asyncAdd">asyncAdd</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
                //触发mutations
                // 加上namespaced（命名空间）要访问的时候需要 模块名称 加 方法名字
                this.$store.commit("a/storeAdd",2)
            },
            async asyncAdd(){
                //触发actions
                // 加上namespaced（命名空间）要访问的时候需要 模块名称 加 方法名字
                const result = await this.$store.dispatch("a/asyncAdd");
                console.log(result)
            }
            // asyncAdd(){
            //     this.$store.dispatch("asyncAdd").then(function(data){
            //         console.log(data)
            //     })
            // }
        },
    }
</script>

<style scoped>

</style>