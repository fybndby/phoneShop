import Vue from 'vue'
import App from './app'

// 导入路由实例
import router from './router'
// 导入仓库实例
import store from './store'

// 注册全局组件
import './components'

// 注册全局指令
import './directives'

// 导入axios对象
import axios from './service/axios'

Vue.prototype.$axios = axios


import VueLazyload from 'vue-lazyload'  //导入懒加载插件
 
Vue.use(VueLazyload)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
