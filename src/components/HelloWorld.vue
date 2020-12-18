<template>
  <div class="hello">
    <h1 @click="$emit('foo','自定义参数')">{{ msg }}</h1>
    {{foo}} {{bbb}}{{ddd}}

    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="slotScope" eee="eee!!1" fff="fff~~~"></slot>
    </div>
    
    
    
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['bbb','ddd'],
  props:{
    msg:String,
  },
  data () {
    return {
      foo:'foo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
