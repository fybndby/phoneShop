<template>
  <section v-swiperBack class="login">
    <AppHeader title="登录" class="app-header"></AppHeader>
    <section class="main">
      <p class="bottom-border">
        <input v-model.trim="user.name" placeholder="请输入您的用户名">
      </p>
      <p class="ui-flex align-center bottom-border">
        <input
          :type="!isShowPass? 'password':'text'"
          v-model.trim="user.pass"
          class="flex-1"
          placeholder="请输入您的密码"
        >
        <span v-if="isShowPassValue" @click="switchPassValue">{{showPasswordValue}}</span>
      </p>
      <p v-if="!validate.username" class="error-tip">用户名无效！</p>
      <p v-if="!validate.password" class="error-tip">密码无效！</p>
      <p>
        <button @click="login">登录</button>
      </p>
      <p>
        <router-link :to="{name:'register'}">立即注册</router-link>
        <span>|</span>
        <router-link :to="{name:'author'}">忘记密码</router-link>
      </p>
    </section>
  </section>
</template>

<script>
import Vuex from "vuex";
import regexp from "../../service/regexp";
export default {
  name: "login",
  data() {
    return {
      user: {
        name: "",
        pass: ""
      },
      validate: {
        username: true,
        password: true
      },
      isShowPass: false
    };
  },
  computed: {
    showPasswordValue() {
      return this.isShowPass ? "隐藏" : "显示";
    },
    isShowPassValue() {
      return this.user.pass;
    }
  },
  watch: {
    "user.name"() {
      this.validate.username = regexp(this.user.name, "username");
    },
    "user.pass"() {
      this.validate.password = regexp(this.user.pass, "password");
    }
  },
  methods: {
    ...Vuex.mapMutations(["setToken"]),
    switchPassValue() {
      this.isShowPass = !this.isShowPass;
    },
    login() {
      if (!this.user.name) {
        this.validate.username = false;
      }
      if (!this.user.pass) {
        this.validate.password = false;
      }
      if (this.validate.username && this.validate.password) {
        //  console.log(this.$route)

        //数据库查找有无此用户

         let name = this.$route.query.redirect? {name:this.$route.query.redirect} :'/';

         this.setToken('123456')   //改变token

         this.$router.replace(name)

        // this.$axios
        //   .get(
        //     "http://localhost/mishop/text/checklogin.php?userName=" +
        //       this.user.name +
        //       "&pwd=" +
        //       this.user.password
        //   )
        //   .then(response => {
        //     console.log(response);
        //     //后端验证通过
        //     if (response.data.status == "pass") {
        //       let name = this.$route.query.redirect
        //         ? { name: this.$route.query.redirect }
        //         : "/";
        //       console.log(name);

        //       this.setToken("abcdfgs");
        //       this.$router.replace(name);
        //     }
        //   });
        
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
