
import storage from '../service/storage'
import isExist from '../utils/isExist'
export default {
    // token
    setToken(state, token) {
        storage.setInfo('token', token);
        state.token = token;
    },
    removeToken(state) {
        storage.removeInfo('token');
        state.token = null;
    },
    addProduct(state, product) {    //点击加入购物车的mutations
        console.log(product)
        let obj = isExist(product.id, state.shopcarList)   //isEXIST判断是否添加的函数
        if (obj.isExist) {
            if (state.shopcarList[obj.index].count < product.stock) {     //第二个判断 添加的数量不能超过stock 
                state.shopcarList[obj.index].count++
            }
        } else {
            product.count = 1
            state.shopcarList.push(product)
        }
        // console.log(obj.isExist)
        // console.log(obj.index)
        // console.log(state.shopcarList)
        storage.setInfo('shopcarList', state.shopcarList);  //把数据存储到本地
    },
    delProduct(state, index) {          //点击删除某条数据
        state.shopcarList.splice(index, 1);
        storage.setInfo('shopcarList', state.shopcarList);  // 删除某项数据之后，继续把数据存储到本地
    },
    changeProduct(state, obj) {   //check框判断是否选中
        state.shopcarList[obj.index].check = obj.check;
        storage.setInfo('shopcarList', state.shopcarList);  //check 选择的数据继续保存
    },
    incrementProduct(state, obj) {
        console.log(obj)
        if (obj.stock == state.shopcarList[obj.index].count) {
            return
        }
        state.shopcarList[obj.index].count++;
        storage.setInfo('shopcarList', state.shopcarList);  //++保存数据
    },
    decrementProduct(state, index) {
        if (state.shopcarList[index].count === 1) {
            return;
        }
        state.shopcarList[index].count--;
        storage.setInfo('shopcarList', state.shopcarList);  //--保存数据
    },

    setShopcarList(state, shopcarList) {
        state.shopcarList = shopcarList;
    }
}