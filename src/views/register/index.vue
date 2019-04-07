<template>
  <section v-swiperBack class="login">
    <AppHeader title="注册" class="app-header" :isSearch=false></AppHeader>
    <section class="main">
      <p class="bottom-border">
        <input v-model.trim="user.name" placeholder="请输入您的用户名">
      </p>
      <p class="ui-flex align-center bottom-border">
        <input type="password" class="flex-1" placeholder="请输入您的密码">
      </p>
      <p class="ui-flex align-center bottom-border">
        <input type="password" class="flex-1" placeholder="请再次输入您的密码">
      </p>
      <p v-if="!validate.username" class="error-tip">用户名无效！</p>
      <p v-if="!validate.password" class="error-tip">密码无效！</p>
      <p v-if="!validate.passagain" class="error-tip">输入密码不一致！</p>
      <p>
        <button @click="register">注册</button>
      </p>
    </section>
  </section>
</template>

<script>
import Vuex from 'vuex'
import regexp from "../../service/regexp";
export default {
  name: "register",
  data() {
    return {
      user: {
        name: "",
        pass: "",
        again:""
      },
      validate: {
        username: true,
        password: true,
        passagain: true,
      },
    };
  },
  methods: {
    ...Vuex.mapMutations([
      'setToken'
    ]),
     register(){
       if(!this.user.name){
          this.validate.username=false
       }
       if(!this.user.pass){
          this.validate.password=false
       }
       if(!this.user.again){
          this.validate.passagain=false
       }
       if(this.validate.username &&this.validate.password){ 
        //  console.log(this.$route)
         let name = this.$route.query.redirect? {name:this.$route.query.redirect} :'/';


         this.$router.replace(name)
         
       }
     }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: #fff;
  height: 100vh;
  .app-header {
    background-color: #f2f2f2;
  }
  .main {
    padding: pxToVw(64) pxToVw(37) 0 pxToVw(37);
    margin-bottom: 0;
    p {
      text-align: center;
      input {
        padding: pxToVw(7.5);
        font-size: pxToVw(18);
        width: 100%;
      }
      a,
      span {
        display: inline;
        color: #666;
        font-size: pxToVw(18);
      }
      a:last-child {
        color: #ff6700;
      }
      button {
        width: 100%;
        background-color: #ff6700;
        border-radius: 5px;
        font-size: pxToVw(20);
        padding: pxToVw(11) 0;
        margin-top: pxToVw(37.5);
        color: #fff;
      }
    }
    .bottom-border {
      margin-bottom: pxToVw(15);
      border-bottom: 1px solid #666;
    }
    .error-tip {
      color: #ff6700;
      font-size: pxToVw(16);
      margin-top: pxToVw(10);
      text-align: left;
    }
    .ui-flex {
      span {
        width: pxToVw(60);
      }
    }
  }
}
</style>
