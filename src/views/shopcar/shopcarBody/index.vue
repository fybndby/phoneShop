


<template>
  <section class="recommend-list">
    <ul class="ui-flex wrap justify-space-between">
      <li v-for="item of recommendList" :key="item.id">
        <router-link :to="{name:'shopDetails',params:{id:item.id}}">
          <img :src="item.imgUrl">
          <div class="desc">
            <p class="ellipsis title">{{item.title}}</p>
            <p class="ellipsis price">{{item.price}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      recommendList: []
    };
  },
  created() {
    this.$axios.get("recommendList.json").then(responseData => {
      // console.log(responseData);
      this.recommendList = responseData.data.list;
      // console.log(this.recommendList);
    });
  }
};
</script>

<style lang="scss" scoped>
.recommend-list {
    .ui-flex {
      li {
        width: 49.5%;
        background-color: #fff;
        p,
        img {
          margin-bottom: pxToVw(8);
        }
        img {
          height: auto;
        }
        .desc {
          padding: 0 pxToVw(14);
          .title {
            color: #3c3c3c;
            font-size: pxToVw(15);
          }
          .price {
            color: #ff6700;
            font-size: pxToVw(17);
          }
        }
      }
    }
  }
</style>

