
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

// 安装Vuex插件
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        shopcarList:[],
        // newproduct:[
        //     {id:1,describe:'新品',img:'./images/miuilogo.png'},
        //     {id:2,describe:'手机',img:'./images/miuilogo.png'},
        //     {id:3,describe:'电视',img:'./images/miuilogo.png'},
        //     {id:4,describe:'电脑',img:'./images/miuilogo.png'},
        //     {id:5,describe:'家电',img:'./images/miuilogo.png'},
        //     {id:6,describe:'路由',img:'./images/miuilogo.png'},
        //     {id:7,describe:'智能',img:'./images/miuilogo.png'},
        //     {id:8,describe:'儿童',img:'./images/miuilogo.png'},
        //     {id:9,describe:'电源',img:'./images/miuilogo.png'},
        //     {id:10,describe:'分类',img:'./images/miuilogo.png'},
        // ]
    },
    mutations
})

export default store