






<template>
  <div>
    <AppHeader title="搜索" :isSearch="false"></AppHeader>
    <h6>搜索功能开发中...</h6>
  </div>
</template>

<script>
export default {
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang='scss' scoped>
  h6{
    font-weight: lighter;
    margin-left: 3vw;
  }

</style>