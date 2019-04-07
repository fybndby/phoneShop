<template>
  <div>
    <header class="details-header">
     <span @click="back" class="iconfont icon-backer"></span>
    </header>
  </div>
</template>

<script>
export default {
  name: "detailsHeader",
    methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.details-header{
  height:$headerHeight;
  background-color: #f2f2f2f2;
  color: #666;
  line-height: $headerHeight;
  position: relative;
  p{
    font-size: 16px;
    text-align: center;
  }
  span{
    font-size:pxToVw(22);
    position: absolute;
    top: 0;
    left: 15px;
  }
}
</style>
