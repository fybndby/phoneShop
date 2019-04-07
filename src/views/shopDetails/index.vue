

<template>
  <div>
    <DetailsHeader></DetailsHeader>
    <div class="details">
      <AppSwiper :list="product.swiperList" class="app-swiper"></AppSwiper>
      <div class="img-box">
        <img src="/images/detailsImg/seckill.jpg">
      </div>

      <div class="message">
        <h3 class="title">{{product.title}}</h3>
        <p class="p1">{{product.discount}}</p>
        <p class="p2">{{product.desc}}</p>
        <div class="price">
          <span>￥{{product.price}}</span>
        </div>
      </div>

      <div class="distribution">
        <router-link :to="{name:'developing'}" tag="div">
          <div class="my-order clear border ui-flex align-center">
            <span class="select">已选</span>
            <span>{{product.title}}</span>
            <div class="all">
              <span class="iconfont icon-icon_arrow_right"></span>
            </div>
          </div>
        </router-link>

        <router-link :to="{name:'developing'}" tag="div">
          <div class="my-order clear ui-flex align-center">
            <span class="select">送至</span>
            <span>{{product.location}}</span>
            <div class="all">
              <span class="iconfont icon-icon_arrow_right"></span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="distribution">
        <router-link :to="{name:'developing'}" tag="div">
          <div class="my-order clear ui-flex align-center">
            <span class="select">配件</span>
            <span></span>
            <div class="all">
              <span class="iconfont icon-icon_arrow_right"></span>
            </div>
          </div>
        </router-link>
      </div>
      <img v-lazy="'/images/detailsImg/1.jpg'">
      <img v-lazy="'/images/detailsImg/2.jpg'">
      <img v-lazy="'/images/detailsImg/3.jpg'">
      <img v-lazy="'/images/detailsImg/4.jpg'">
      <img v-lazy="'/images/detailsImg/5.jpg'">
      <img v-lazy="'/images/detailsImg/6.jpg'"> 
    </div>
    <section class="ui-flex align-center shopcar-add">
      <div class="shopcar-add-router ui-flex align-center justify-center">
        <router-link :to="{name:'home'}">
          <span class="iconfont icon-home"></span>
          <p>首页</p>
        </router-link>
      </div>
      <div class="shopcar-add-router ui-flex align-center justify-center">
        <router-link :to="{name:'shopcar'}">
          <span class="iconfont icon-shopcar"></span>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="flex-1 shopcar-add-product">
        <button @click="addProduct(product)">加入购物车</button>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../../constant/api";
import Vuex from 'vuex';
import DetailsHeader from "./detailsHeader";
export default {
  name: "shopdetails",
  data() {
    return {
      product: {
        swiperList: []
      }
    };
  },
  methods: {
  ...Vuex.mapMutations([
    'addProduct'
  ])
  },
  beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$axios.get(api.productDetail).then(responseDate=>{
          console.log(responseDate.data)
          responseDate.data.list.map(item=>{
            item.check=false
            // console.log(item)
            if(item.id==vm.$route.params.id){
               vm.product=item
            }
          })
           console.log(vm.product)
        })
      });
    },
  components: {
    DetailsHeader
  }
};
</script>

<style lang="scss" scoped>
.app-swiper {
  height: pxToVw(187);
}
.details {
  height: 667-54-48px;
  overflow: auto;
  background: #f5f5f5;
  .img-box {
    height: pxToVw(45);
    img {
      width: 100vw;
    }
  }
  .message {
    height: pxToVw(165);
    padding: 2vw 4vw;
    background: #fff;
    margin-bottom: 2vw;
    .title {
      font-weight: normal;
      font-size: 16px;
      color: #333;
    }
    p {
      padding-top: 1vw;
      font-size: 0.32rem;
    }
    .p1 {
      color: rgb(255, 74, 0);
    }
    .p2 {
      color: rgb(117, 117, 117);
    }
    .price {
      height: 27px;
      padding-top: 2vw;
      line-height: 27px;
      span {
        color: #ff6700;
        font-size: 6vw;
        font-weight: 700;
      }
    }
  }
  .distribution {
    margin-bottom: 2vw;
    .my-order {
      background: #fff;
      height: 50px;
      color: rgba(0, 0, 0, 0.87);
      padding: 0 4vw;
      line-height: 50px;
      span {
        font-size: 4vw;
      }
      .select {
        color: rgba(0, 0, 0, 0.54);
        padding-right: 2vw;
        font-size: 3.5vw;
      }
      .all {
        float: right;
      }
    }
    .border {
      border-bottom: 1px solid #d9d9d9;
    }
  }
}
.shopcar-add {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footerHeight;
  background-color: #fff;
  text-align: center;
  div {
    height: 100%;
  }
  .shopcar-add-router {
    width: pxToVw(75);
    a {
      color: #999;
    }
    .iconfont {
      font-size: 21px;
    }
    span {
      display: block;
    }
    p {
      font-size: 12px;
    }
  }
  .shopcar-add-router:first-child {
    border-right: 1px solid #f5f5f5;
  }
  .shopcar-add-product {
    button {
      display: block;
      font-size: 17px;
      color: #fff;
      width: 100%;
      height: 100%;
      background-color: #ff6700;
    }
  }
}
</style>
