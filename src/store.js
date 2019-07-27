import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const store=new Vuex.Store({

    state:{
        data:[],
        cart:[],
    },

    mutations:{
        //获取数据
        getdata(state,lists){
            state.data=lists;
        },
        
        handleEdit(state,id){
            // console.log(state.cart);

            let goodInCart = state.cart.find(g => g.id== id);
            if(goodInCart){
                state.cart = state.cart.map(g => {
                    if(g.id == id){
                        g.num++;
                    }
                    return g
                })
            }else {
                let good = state.data.find(go => go.id == id);

                // console.log(good);
                state.cart.push({
                    ...good,num:1
                })
            }
            console.log(state.cart);
        },

        reduce(state,id){
            //根据id找到商品
            let good = state.cart.find(go => go.id ==id)
            //判断商品数量是否大于1，如果大于1，把该商品的数量-1；
            if(good.num>1){
                state.cart = state.cart.map( good =>{
                    if(good.id==id){
                        good.num--;
                    }
                    return good;
                })
            }else{
                //否则，把该商品从数组cart删除
                state.cart = state.cart.filter(go => go.id !=id)
            }

        },

        increase(state,id){
            for(var i in state.cart){
                if(state.cart[i].id==id){
                    state.cart[i].num++;
                }
            }
        },


    },

    actions:{
        getdata(store,url){
            Vue.axios.get(url)
            .then((result) => {
                store.commit("getdata",result.data)
                // console.log(store.state.data)
            })
        },
    },

    //计算属性计算商品总价
    getters:{
        totalPrice({cart}){
            let total=0;
            for(var i=0;i<cart.length;i++){
                let good=cart[i];
                total += good.price*good.num;
            }
            return total;
        }
    },

})

export default store;