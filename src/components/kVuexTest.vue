<template>
    <div>
        <h3>vuex test</h3>
        <p>{{$store.state.count}}</p>
        <!-- 加上namespaced（命名空间）要访问的时候需要 模块名称 加 方法名字 -->
        <p>{{$store.getters.score}}</p>
        <button @click="add">add</button>
        <button @click="asyncAdd">asyncAdd</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
                //触发mutations
                this.$store.commit("storeAdd",2)
            },
            async asyncAdd(){
                //触发actions
                const result = await this.$store.dispatch("asyncAdd");
                console.log(result)
            }
        },
    }
</script>

<style scoped>

</style>