<template>
  <div>
    Detail
    <p>
      <!-- 第一种获取参数的方法 -->
      id:{{ $route.params.id }}
      <!-- 第二种获取参数的方法 -->
      id:{{ id }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  watch: {
    $route: {
      handler(arg) {
        console.log(this.$route.matched);
      },
      immediate: true, //当前组件处在create的时候，就立即执行handler
    },
  },
};
</script>

<style scoped>
</style>