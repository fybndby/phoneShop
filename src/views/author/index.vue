


<template>
  <div class="author-box">
     <AppHeader title="开发中..." :isSearch="false" class="app-header"></AppHeader>
    <div class="author">
        <p>本商城由 jay leaf 开发</p>
          <p>商城所用的到技术</p>
           <p>vue-cli</p>
            <p>vue 2.5.2</p>
             <p>vue-router 3.0.1</p>
              <p>vuex 3.0.1</p>
              <p>vue-awesome-swiper 3.1.3</p>
              <p>axios 0.17.1</p>
              <p>sass</p>
              <p>lodash</p>
              <br>
              <p>Create on 2019/01/01</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
.author-box{
  background: #F2F2F2;
  height: 100vh;
}
.author{
  padding: 20px;
  font-size: 4.5vw;
}

</style>
