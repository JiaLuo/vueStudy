<template>
    <div>
        <!-- 自定义组件要实现v-model必须要实现:value 和 @input -->
        <!-- $attrs 存储的是props之外的部分 -->
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    import emmiter from '@/mixins/emmiter'
    export default {
        mixins:[emmiter],
        inheritAttrs:false, //避免顶层容器继承属性
        props:{
            value:{
                type:String,
                default:''
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input',e.target.value);

                //通知formitem校验
                // this.$parent.$emit('validate');
                this.dispatch('validate')
            }
        },
    }
</script>

<style scoped>

</style>