<template>
  <section v-swiperBack class="home">
    <HomeHeader class="home-header"></HomeHeader>
    <section class="main">
      <AppPullRefresh @load="getData">
        <AppSwiper :list="swiperList" class="app-swiper"></AppSwiper>
        <NewProduct></NewProduct>
        <ListRoll :list="newsList" class="margin-top-8"></ListRoll>
        <section class="ui-flex wrap justify-space-between margin-top-8 home-product">
          <router-link :to="{name:'home'}">
            <img
              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1c94b98d8401bf42fb771ff22faf50b.jpg?thumb=1&w=720&h=280"
            >
          </router-link>
          <router-link :to="{name:'home'}">
            <img
              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b126f79cc101813ce3f524f58105e4b.jpg?thumb=1&w=720&h=440"
            >
          </router-link>
          <section class="ui-flex wrap justify-space-between home-product-list">
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
            <router-link :to="{name:'home'}">
              <img
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792"
              >
              <div>
                <p class="name">红米5</p>
                <p class="price">749起</p>
              </div>
            </router-link>
          </section>
        </section>
        <EndLine></EndLine>
      </AppPullRefresh>
    </section>
  </section>
</template>

<script>
import HomeHeader from "./components/homeHeader";
import NewProduct from "./components/newProduct";
import api from "../../constant/api";
export default {
  name: "home",
  data() {
    return {
      newsList: [],
      swiperList: []
    };
  },
  methods: {
    getData(resolve) {
      this.$axios
        .all([this.$axios.get(api.roll), this.$axios.get(api.swiper)])
        .then(
          this.$axios.spread((reseponseData1, reseponseData2) => {
            // console.log(reseponseData1, reseponseData2);
            this.newsList = reseponseData1.data.list;
            this.swiperList = reseponseData2.data.list;
            resolve && resolve(); //&& 操作符。左边就是如果传过来有值。 为true 执行右边的方法；右边也是传过来的函数
          })
        );
    }
  },
  created() {
    this.getData();
  },
  components: {
    HomeHeader,
    NewProduct
  }
};
</script>

<style lang="scss" scoped>
.home-header {
  position: absolute;
  top: 0;
  width: 100%;
  height: $headerHeight;
  background-color: #f2f2f2;
}
.app-swiper {
  height: pxToVw(188);
}
.home-classify {
  background-color: #fff;
  a {
    width: 20%;
    margin-bottom: pxToVw(8);
    text-align: center;
    .iconfont {
      font-size: pxToVw(45);
    }
    p {
      font-size: pxToVw(12);
      color: #000;
    }
  }
}
.home-product-list {
  a {
    background-color: #fff;
    width: 49.5%;
    div {
      padding: pxToVw(10) pxToVw(14);
      .name {
        color: #000;
        font-size: pxToVw(15);
      }
      .price {
        font-size: pxToVw(17);
        color: #ff6700;
      }
    }
  }
}
</style>
