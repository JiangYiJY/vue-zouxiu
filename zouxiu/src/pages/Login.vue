<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          <input type="text" v-model="userData.userID" placeholder="请输入用户名" />
          <input type="password" v-model="userData.password" placeholder="请输入密码" />
          <a href="javascript:;" class="btn" @click="login">登录</a>
          <a href="javascript:;" class="btn" @click="register">注册</a>
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
          title : "登录",
          userData : {
              userID : "",
              password : "",
              status : "login"
          }
      }
  },
  methods:{
      login(){
          var user = {
              userID : this.userData.userID,
              password : this.userData.password
          }
          user.status = "login"

          this.$http.get(`http://datainfo.duapp.com/shopdata/userinfo.php?userID=${user.userID}&password=${user.paww
          }&status=${user.status}`).then(data=>{
              console.log(data.body);
          })
      },
      register(){
          var user = {
              userID : this.userData.userID,
              password : this.userData.password
          }

          user.status = "register"

          this.$http.get(`http://datainfo.duapp.com/shopdata/userinfo.php?userID=${user.userID}&password=${user.paww
          }&status=${user.status}`).then(data=>{
              console.log(data.body);
              if(data.body == 1){
                  alert("注册成功!")
              }else if(data.body ==0){
                  alert("用户名已存在!")
              }else{
                  alert("服务器内部错误!")
              }
          })
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
