<template>
  <div class="hello" @click="$parent.$emit('foo2','自定义参数2')">
    <h1>{{ msg2 }}</h1>
    {{foo2}}
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    msg2:String,
  },
  data () {
    return {
      foo2:'foo2'
    }
  },
  created(){
      this.$parent.$on('foo2',($event)=>{
        console.log(32222)    
        console.log(event)
      })
      
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
