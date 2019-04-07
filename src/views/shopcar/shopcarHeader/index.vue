<template>
  <div>
    <header class="shopcar-header">
      <p>购物车</p>
     <span class="iconfont icon-search"></span>
    </header>
  </div>
</template>

<script>
export default {
  name: "shopcar"
};
</script>

<style lang="scss" scoped>
.shopcar-header{
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
    right: 15px;
  }
}
</style>
