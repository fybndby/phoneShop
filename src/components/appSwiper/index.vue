<template>
  <section class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "appSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        },
        autoplay:{
          delay:1000
        }
        
      }
    };
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  // created() {
  //   console.log(this.list);
  // }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100%;
  img {
    height: 100%;
  }
}
</style>
