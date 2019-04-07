





<template>
  <ul>
    <li class="del-commodity ui-flex" v-for="(item,index) of shopcarList" :key="item.id">
      <div class="ui-flex align-center check">
        <input type="checkbox" v-model="item.check" @change="changeProduct({index:index,check:item.check})">
      </div>
      <div class="images">
        <img :src="item.imgurl">
      </div>
      <div class="del">
        <p class="info">{{item.title}}</p>
        <p class="money">售价：{{item.price}}</p>
        <div class="number-box ui-flex">
          <div class="ui-flex flex-1 justify-center align-center minus border" @click="decrementProduct(index)">-</div>
          <div class="ui-flex flex-1 justify-center align-center num">{{item.count}}</div>
          <div class="ui-flex flex-1 justify-center align-center add border" @click="incrementProduct({index:index,stock:item.stock})">+</div>
        </div>
      </div>
      <div class="rubbish ui-flex align-self-end" @click="delProduct(index)">
        <span class="iconfont icon-del"></span>
      </div>
    </li>
  </ul>
</template>


<script>
import Vuex from "vuex";
import storage from "../../../service/storage";
export default {
  computed: {
    ...Vuex.mapState(["shopcarList"]),
  },
  methods:{
  ...Vuex.mapMutations([
    'setShopcarList',
    'delProduct',
    'changeProduct',
    'incrementProduct',
    'decrementProduct'
  ])
  },
  created() {
    if (storage.getInfo("shopcarList")) {
      this.setShopcarList(storage.getInfo("shopcarList"));
    }
    // this.getData();
  }
};
</script>


<style lang="scss" scoped>
.del-commodity {
  height: pxToVw(116);
  padding: pxToVw(12);
  background: #fff;
  .check {
    input {
      height: pxToVw(20);
      width: pxToVw(20);
      border: 1px solid #000;
    }
  }
  .images {
    margin-left: pxToVw(12);
    height: pxToVw(91);
    width: pxToVw(91);
    img{
      height: 100%;
    }
  }
  .del {
    margin-left: pxToVw(8);
    padding: pxToVw(5) 0;
    .info {
      font-size: pxToVw(15);
      margin-bottom: pxToVw(4);
    }
    .money {
      font-size: pxToVw(12);
      margin-bottom: pxToVw(4);
    }
    .number-box {
      width: pxToVw(91);
      height: pxToVw(31);
      font-size: pxToVw(16);
    }
    .border {
      border: 1px solid #999;
    }
    .num {
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
    }
  }
  .rubbish {
    position: absolute;
    right: pxToVw(12);
    span {
      font-size: pxToVw(24);
    }
  }
}
</style>
