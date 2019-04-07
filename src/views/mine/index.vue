<template>
<div>


  <div class="mine">
    <header class="ui-flex align-center">
      <img src="/img/avatar.png">
      <div>
        <p v-if="!token">
          <router-link :to="{name:'login'}">登录</router-link>
          <span>/</span>
          <router-link :to="{name:'register'}">注册</router-link>
        </p>
        <p v-else>
          <span @click="loginOut">退出</span>
        </p>
      </div>
    </header>
  </div>
       <!--  -->
          <MyBody></MyBody>
  </div>
</template>

<script>
import Vuex from "vuex";
import MyBody from './myBody';
export default {
  name: "mine",
  methods: {
    ...Vuex.mapMutations(["removeToken"]),
    loginOut() {
      this.removeToken();
    }
  },
  components:{
    MyBody
  },

  computed: {
    ...Vuex.mapState(["token"])
  },
  created() {
    console.log(this.token);
  }
};
</script>

<style lang="scss" scoped>
.mine {
  header {
    padding: 0 pxToVw(17);
    height: pxToVw(84);
    background-image: url(/img/mine-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #f37d0f;
    img {
      border-radius: 100%;
      border: 3px solid rgba(255, 255, 255, 0.4);
      width: pxToVw(44);
      height: pxToVw(44);
    }
    p {
      margin-left: pxToVw(10);
      font-size: pxToVw(16);
      color: #fff;
      a {
        color: #fff;
        display: inline;
      }
    }
  }
}

</style>
