<template>
    <div>
        <el-table
        :data="data"
        style="width: 100%">
        <el-table-column
        label="品种"
        width="120">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name}}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="价格"
        width="120">
        <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.price | priceFormat("￥",2)}}</el-tag>
            </div>
            </el-popover>
        </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <!-- 绑定多个事件用;隔开 -->
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row);open()">添加到购物车</el-button>
        </template>
        </el-table-column>
    </el-table>
    </div>
  
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex";
  export default {
    data() {
      return {
      }
    },
    computed: {
        ...mapState(["data"])
    },
    methods: {
        ...mapActions(["getdata"]),
        ...mapMutations(["handleEdit"]),
        open() {
        this.$alert('添加成功', '恭喜你', {
          confirmButtonText: '确定',
        });
      }
    },
    mounted() {
        this.getdata("http://localhost:3000/product");
    },
    filters:{
        priceFormat(des,a1,a2){
            return a1+des.toFixed(2);
        }
    },
    components:{
    }
   
  }
</script>

<style scoped>


</style>
