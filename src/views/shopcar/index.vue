

<template>
  <section>
    <AppHeader title='购物车' :isBack="false"></AppHeader>
    <section class="main">
      <DelCommodity></DelCommodity>
      <router-link :to="{name:'home'}" class="go-shop" tag="div" v-if="!shopcarList.length">
        <!-- g购物车列表有数据之后不显示此图片 -->
        <img src="/images/kong.png">
      </router-link>
      <div class="like">
        <img src="/images/xihuan.jpg">
      </div>

      <ShopCarBody></ShopCarBody>

    </section>
    <section class="ui-flex shopcar-operation">
      <div class="ui-flex align-center justify-center wrap flex-1 price">
        <p>共
          <span>{{countPrice.count}}</span>件 金额：
        </p>
        <p>
          <span class="total">{{countPrice.price}}</span>元
        </p>
      </div>
      <div class="ui-flex align-center justify-center flex-1 operation">
        <router-link :to="{name:'classify'}">继续购物</router-link>
      </div>
      <div class="ui-flex align-center justify-center flex-1 operation settlement">
        <router-link :to="{name:'home'}">去结算</router-link>
      </div>
    </section>
  </section>
</template>


<script>
import ShopCarBody from "./shopcarBody";
import DelCommodity from "./delCommodity";
import Vuex from 'vuex';
export default {
  components: {
    ShopCarBody,
    DelCommodity
  },
  computed:{
    ...Vuex.mapState([
      'shopcarList'
    ]),
  countPrice(){
    let obj = {
      count : 0,
      price : 0
    };
    this.shopcarList.map(item=>{
      if (item.check) {
          obj.count += item.count;
          obj.price += item.count * item.price;
        }
    });
    return obj
  }
  },
  created(){
    console.log(this.shopcarList)
  }
  

};
</script>

<style lang='scss' scoped>
.main {
  margin-bottom: $footerHeight * 2;
  .go-shop {
    // margin-top: -1px;
    img {
      vertical-align: top;
      height: 100%;
    }
  }
  .like {
    img {
      vertical-align: top;
      height: 100%;
    }
  }
}
.shopcar-operation {
  position: absolute;
  bottom: $footerHeight;
  height: $footerHeight;
  width: 100%;
  background-color: #fff;
  text-align: center;
  .price {
    font-size: 16px;
    color: #999;
    .total {
      font-size: 20px;
      color: #ff5722;
    }
  }
  .operation {
    background-color: #f4f4f4;
    a {
      font-size: 18px;
      color: #000;
    }
  }
  .settlement {
    background-color: #ff5722;
    a {
      color: #fff;
    }
  }
}
</style>
