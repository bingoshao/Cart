<template>
    <div>
        <ul class="listitem">
            <li class="name">{{li.name}}</li>
            <li class="price">{{li.price | priceFormat("￥",2)}}</li>
            <li><button @click="add(li.id)">添加到购物车</button></li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(["isShow"])
    },
    props:["li"],
    methods: {
        add(id){

            this.$store.commit("add",id);

        }
    },
    filters:{
        priceFormat(price,a1,a2){
            return a1+price.toFixed(a2)
        }
    }
}
</script>


<style scoped>
.listitem {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:.266667rem

}
ul {
    list-style:none;
    height: 1.6rem;
}
li {
    width: 33.3333%;
    text-align: center;
}
.name {
    font-size: .48rem;
}
.price {
    font-size:.32rem;
    color: #C52429;
    
}
button {
    width:80%;
    height: .853333rem;
    border: none;
    background:#C52429;
    color:#fff;
    border-radius:4px;
    cursor:pointer;
}
.bgcolor {
    background: #666;
    color:#fff;
}
</style>
