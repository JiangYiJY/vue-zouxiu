<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          <input type="text" v-model="userData.username" placeholder="请输入用户名" />
          <input type="password" v-model="userData.password" placeholder="请输入密码" />
          <a href="javascript:;" class="btn">注册</a>
      </div>
      <FooterCom />
  </div>
</template>
<script>
import HeaderCom from "../components/Header"
import FooterCom from "../components/Footer"

export default {
  name : "Login",
  data(){
      return {
          title : "注册",
          userData : {
              username : "",
              password : "",
              status : "register"
          }
      }
  },
  components : {
      HeaderCom,
      FooterCom
  }
}
</script>
<style lang="less" scoped>
    input{
        @h:0.65rem;

        display: block;
        width: 90%;
        height: @h;
        line-height: @h;
        border:1px solid #ccc;
        border-radius: 0.08rem;
        margin: 0.3rem auto;
        padding:0 0.15rem;
        box-sizing: border-box;
    }
    .btn{
        @h:0.65rem;
        border-radius: 0.08rem;
        display: block;
        width: 90%;
        height: @h;
        line-height: @h;
        margin: 0.3rem auto;
        box-sizing: border-box;
        text-align:center;
        background: rgb(185, 11, 11);
        color:#fff;
        font-size: 0.34rem; 
    }
</style>
