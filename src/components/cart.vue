<template>
    <div>
        <CartItem v-for="c in cart" :key="c.id" 
            :cart="c"
        />
        <h1 v-if="totalPrice==0?true:false">购物车空空~~</h1>
        <div class="money">
            <div class="sum">总价：{{ totalPrice | priceFormat("￥",2)}}</div>
             <el-button
            size="mini"
            @click="open()" class="js">结算</el-button>
        </div>
    </div>
</template>

<script>
import CartItem from "./cartitem"
import {mapState,mapGetters,mapActions} from "vuex"

export default {
    data() {
        return {
        }
    },
    computed:{
        ...mapState(["cart"]),
        ...mapGetters(["totalPrice"])
    },
    components:{
        CartItem
    },
    filters:{
        priceFormat(price,a1,a2){
            return a1+price.toFixed(a2)
        }
    },
    methods:{
         open() {
            this.$alert(`总金额: ${this.totalPrice}`, '结算', {
            confirmButtonText: '支付',
            });
        }
    }
    
}
</script>

<style scoped>
.money {
    width: 100%;
    position: fixed;
    bottom: 0;
    display:flex;
    justify-content:space-between;
    height: 50px;
    align-items: center;
    border-top:1px solid #ddd;
    
}
.sum {
    padding-left: 10px;
    font-size: 30px;
}
.js {
    width:100px;
    background:red;
    font-size:30px;
    text-align:center;
    line-height:50px;
    color:#fff;
}
h1 {
    text-align: center;
}
</style>
