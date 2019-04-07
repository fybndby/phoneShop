



<template>
  <div class="my-body">
    <router-link :to="{name:'author'}">
      <div class="my-order">
        <div class="order-form">我的订单</div>
        <div class="all">
          <span>全部订单</span>
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>



     <div class="await ui-flex justify-space-between">
    <router-link :to="{name:'author'}">
      <div class="icon-1">
        <p>
           <span class="iconfont icon-daishouhuo"></span>
        </p>
        <span>待付款</span>
      </div>
    </router-link>
    <router-link :to="{name:'author'}">
      <div class="icon-1">
        <p>
           <span class="iconfont icon-daishouhuo"></span>
        </p>
        <span>待收货</span>
      </div>
    </router-link>
    <router-link :to="{name:'author'}">
      <div class="icon-1">
        <p>
           <span class="iconfont icon-daishouhuo"></span>
        </p>
        <span>待换修</span>
      </div>
    </router-link>
  </div>




      <div>

    <router-link :to="{name:'author'}" tag='div' class="top">
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>会员中心</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>

    <router-link :to="{name:'author'}" tag='div'>
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>我的优惠</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>



    <router-link :to="{name:'author'}" tag='div' class="top">
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>服务中心</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>


    <router-link :to="{name:'author'}" tag='div'>
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>小米之家</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>

 <router-link :to="{name:'author'}" tag='div' class="top">
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>F码通道</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>

     <router-link :to="{name:'author'}" tag='div' class="top">
      <div class="my-order clear">
        <div class="order-form">
          <span class="iconfont icon-daishouhuo"></span>
          <span>设置</span>
        </div>
        <div class="all">
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </router-link>

  </div>
  </div>
</template>

<script>
export default {
    name:'mybody'
};
</script>

<style lang='scss' scoped>
.my-body {
  height: 667-84-53px;
  font-size: 16px;
  background: #f5f5f5;
  .my-order{
  font-size: 16px;
  background: #fff;
  height: 50px;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 1px solid #d9d9d9;
  padding: 0 15px;
   line-height: 50px;
  .order-form {
    float: left;
   
  }
  .all {
    line-height: 50px;
    float: right;
    span:nth-child(1) {
      margin-right: 20px;
    }
  }
}

.await {
  background: #fff;
  text-align: center;
  padding: 23px;
  width:100vw;
  .icon-1 {
    width: 20vw;
    color: rgba(0, 0, 0, 0.87);
    .iconfont{
        font-size: 5vw;
    }
  }
}


.top{
    margin-top: 8px;
}


.my-order {
  background: #fff;
  height: 50px;
  color: rgba(0, 0, 0, 0.87);
  padding: 0 4vw 0 10vw;
  line-height: 50px;
  .all {
    float: right;
  }
}

}
</style>


