<template>
  <div id="app">
    <div class="head">
        <div class="title">邵大哥的宠物店</div>
        <div class="nav-bar">
          <router-link to="/list" class="nav"><span class="el-icon-arrow-down"></span>商品列表</router-link>
          <router-link to="/cart" class="nav">我的购物车<span class="el-icon-shopping-cart-1"></span></router-link>
        </div> 
    </div>
    

    <router-view></router-view>
  </div>
</template>

<script>
import flexble from "./flexble"

//要引入mapState
import {mapState} from "vuex"

export default {
  name: 'app',
  components: {
  },
  computed: {
    ...mapState(['firstShow',"secondShow"])
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.title {
  color: #fff;
  background: #0E7DB4;
  height: 50px;
  text-align: center;
  font-size:.586667rem;
  line-height: 50px;
}
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .266667rem 0;
  border-bottom: 1px solid #ccc;
}
.nav {
  text-decoration: none;
  color: #666;
  font-weight: bold;
  font-size: .533333rem;
  margin:0 .8rem;
}
.router-link-active {
  color:#0E7DB4;

}
.tip {
  width: 100%;
  height: 100%;
  color:#fff;
  background:rgba(0, 0, 0, .4);
  position: fixed;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 200px;
}
.el-table td, .el-table th{
    text-align: center !important;
}
.el-message-box {
  width:100% !important; 
  margin-top:200px;

}
.el-button--mini {
  background: #e4393c !important;
  color: #fff !important;
}
</style>
