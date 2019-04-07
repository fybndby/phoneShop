

<template>
  <div ref="pullRefresh" class="pull-refresh">
    <div ref="tipBox" class="tip-box">
      <div>{{tipInfo}}</div>
    </div>
    <div ref="refresh" class="refresh-box" :class="{trans:isTrans}">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "app-pull-refresh",
  data() {
    return {
      startY: "", //开始距离
      endY: "", // 结束距离
      pullDistance: 0, //拉动距离
      tipInfo: "", // 显示的内容
      el: null, //dom 元素
      tipBoxHeight: 0, //tipbox的高度
      isTrans: false
    };
  },
  methods: {
    bindTouchEvent() {
      this.el.addEventListener("touchstart", this.touchStart);
      this.el.addEventListener("touchmove", this.touchMove);
      this.el.addEventListener("touchend", this.touchEnd);
    },
    touchStart(e) {
      this.tipBoxHeight = this.$refs.tipBox.offsetHeight;
      this.isTrans = false;
      // console.log(e.changedTouches[0]);
      let touch = e.changedTouches[0];
      this.startY = touch.clientY; //接触的Y轴距离
      this.tipInfo = "下拉刷新";
    },
    touchMove(e) {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      let touch = e.changedTouches[0];
      let move = touch.clientY - this.startY; // 获取下拉的距离
      // move<this.tipBoxHeight * 2是设置一个下拉距离的上限,不能一直可以下拉，用户体验不好
      if (move > 0 && move < this.tipBoxHeight * 2) {
        this.el.style.top = move + "px";
        this.pullDistance = move;
        if (move > this.tipBoxHeight) {
          this.tipInfo = "松开即可刷新";
        } else {
          this.tipInfo = "下拉刷新";
        }
      }
    },
    touchEnd(e) {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      this.isTrans = true;
      let touch = e.changedTouches[0];
      this.endY=touch.clientY;
      if(this.pullDistance>this.tipBoxHeight){
          this.tipInfo='数据加载中...';


        new Promise(resolve =>{
          this.$emit('load',resolve);
        }).then(()=>{
          this.resetBox();  //将移动距离还原的方法
        })


      }else{
        this.resetBox();
      }
    },
    resetBox(){
      if(this.pullDistance>0){
        this.el.style.top = 0;
      }
      this.tipInfo = "下拉刷新";
      this.pullDistance = 0;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.el = this.$refs.refresh;
      this.bindTouchEvent();
    });
  }
};
</script>

<style lang='scss' scoped>
.pull-refresh {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  .tip-box {
    position: absolute;
    width: 100%;
    line-height: pxToVw(40);
    height: pxToVw(40);
    text-align: center;
    font-size: pxToVw(14);
  }
  .refresh-box {
    position: absolute;
    width: 100%;
  }
  .trans {
    transition: top 0.4s;
  }
}
</style>
