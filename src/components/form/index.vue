<template>
  <div>
      <!-- 数据校验思路
        校验发生在formitem中，它需要知道何时校验（让input通知它，）还需要知道怎么校验（注入校验规则
        input通知校验
        formitem监听校验通知，获取规则并执行校验 -->
    <k-form :model="model" :rules="rules" ref="loginForm"> 
      <k-form-item label="用户名" prop='username'>
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop='password'>
        <k-input v-model="model.password" type="password"></k-input>
      </k-form-item>
      <k-form-item>
          <button @click="onLogin">登录</button>
      </k-form-item>
    </k-form>
    {{ model }}
  </div>
</template>

<script>
import KInput from "./kInput";
import kFormItem from "./kFormItem";
import kForm from "./kForm";
import Notice from '../notice/index';
import create from '@/utils/create';

export default {
  components: {
    "k-input": KInput,
    "k-form-item": kFormItem,
    "k-form": kForm,
  },
  data() {
    return {
      model: {
        username: "tim",
        password: "",
      },
      rules:{
          username:[{required:true,message:'用户名必填'}],
          password:[{required:true,message:'密码必填'}],
      }
    };
  },
  methods: {
      onLogin() {
        let notice ;
        this.$refs.loginForm.validate((isValid) =>{
            if(isValid){
                // alert("登录")
                notice = create(Notice,{
                  title:'弹窗',
                  message:'登录！！！',
                  duration:1000,
                })
            }else{
                // alert("有错")
                notice = create(Notice,{
                  title:'弹窗',
                  message:'有错！！！',
                  duration:1000,
                })
            }
            notice.show();
        })
      }
  },
};
</script>

<style scoped>
</style>