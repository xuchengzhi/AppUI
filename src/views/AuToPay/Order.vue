<template>
  <el-container>
    <el-main>
    <div style="text-align:center"><H1>字体购买列表</H1></div>
        <el-table
        :data="orderlist"
        height="250"
        border
        style="width: 100%">

        <el-table-column align="right">
            <template slot="header" slot-scope="scope">
            <el-input
              v-model="fontname"
              size="mini"
              placeholder="输入关键字搜索"/>
            </template>
        </el-table-column>
        <el-table-column align="right">
            <template>
            <el-button @click="orders" type="primary" v-loading.fullscreen.lock="fullscreenLoading"  element-loading-spinner="el-icon-loading">刷新字体购买记录</el-button>
            </template>
        </el-table-column>

        <el-table-column prop="id" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="runtime" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="fonts" label="字体名" width="180">
        </el-table-column>
        <el-table-column prop="platform" width="180" label="厂商">
        </el-table-column>
        <el-table-column prop="phone" width="180" label="账号">
        </el-table-column>
        <el-table-column prop="fontprice" width="180" label="字体价格">
        </el-table-column>
        <el-table-column prop="status" width="180" label="购买状态">
        </el-table-column>
        
            
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';
import { orderlist } from '../../api/autopay'; 
export default {
    name: 'autopay',
    data() {
        return {
            orderlist: [],
            fullscreenLoading: false,
            fontname:"你知道我喜欢你",
        }
    },
    mounted:function () {
        this.orders()
    },
    methods: {
        orders(){
            this.fullscreenLoading = true
            let par = {"pagesize":1000,"name":this.fontname};
            orderlist(par).then(res => {
                let { code, msg, data } = res;
                if (code == 200) {
                    this.orderlist = data;
                  this.$message(data);
                }else{
                  this.$message.error(data);
                }
                }).catch( () => {
                    this.$message.error("数据请求失败");
                });
                this.fullscreenLoading = false
        },
    }//methods

}
</script>