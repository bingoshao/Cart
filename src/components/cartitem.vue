<template>
    <div class="cart">
        <div class="name">{{cart.name}}</div>
        <div class="price">{{cart.price}}</div>
        <!-- <div class="manu">
            <button @click="reduce(cart.id)">-</button>
                <input type="text" v-model="cart.num">
            <button @click="increase(cart.id)" v->+</button>
        </div> -->
        <!-- 把v-model绑定成当前数据的num 就Ok 了 handleChange事件都不需要-->
        <el-input-number v-model="cart.num" @blur="nonull" :min="1"></el-input-number>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    props:["cart"],
    
    methods: {
        // ...mapMutations(["reduce","increase"]),
        //如果没有输入任何数量，则把数量设为1;
        nonull(){
           if(isNaN(this.cart.num))  {
               this.cart.num=1;
           }
        }
    },
    components:{
    }
    
}
</script>

<style scoped>
.cart{
    display: flex;
    justify-content: space-between;
    padding:10px;
    align-items: center; 
}
.name {
    font-size: .48rem;
    width: 33.3333%;
    text-align: center;
}
.price {
    margin:0 10px;
    font-size:.32rem;
    color: #C52429;
    width: 33.3333%;
    text-align: center;

}
.manu {
    width: 33.3333%;
    text-align: center;

}
input {
    width: 40px;
    margin: 0 5px;
    padding: 0;
    margin:0 3px;
    border: 1px solid #333;
    height: 28px;
    font-size: .533333rem;
    vertical-align: middle;
    
}
button {
    width: 30px;
    height:30px;
}
</style>
