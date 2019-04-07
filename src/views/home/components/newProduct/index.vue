



<template>
    <div class="newproduct ui-flex justify-space-between wrap">
        <div  class="roundness" v-for="item of newproduct" :key="item.id">
            <div>
                 <img :src="item.img">
            </div>
            
            <p class="font">{{item.describe}}</p>
        </div>
    </div>
</template>


<script>
// import Vuex from 'vuex'
import api from '../../../../constant/api'
export default {
    // computed:{
    //     ...Vuex.mapState([
    //         'newproduct'
    //     ])
    // }
    data(){ 
        return{
            newproduct:[]
        }
    },
    created(){
        this.$axios.get(api.newproduct).then(responseData=>{
            console.log(responseData);
            this.newproduct = responseData.data.newproduct;
            console.log(this.newproduct);
        })
    }
}
</script>

<style lang="scss" scoped>
.newproduct{
    background: #fff;
    height: 152px;
    padding-top: 15px;
    .roundness{
        width: 20vw;
        text-align: center;
            img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
            .font{
                font-size:pxToVw(12);
            }
    }
}
</style>
