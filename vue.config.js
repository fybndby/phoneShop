module.exports = {
  // 全局样式
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/sass/util.scss";
        `
      }
    }
  },
  // pubilcPath:'./'
}