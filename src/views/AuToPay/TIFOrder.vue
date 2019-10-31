<template>
  <el-container>
    <el-main>
        <div style="text-align:center"><H1>试用字体安装列表</H1></div>
        <el-button  @click="TIF">刷新试用字体记录</el-button>
        <div>
        <template slot="header" slot-scope="scope">
            <el-input
              v-model="fontname"
              size="mini"
              placeholder="输入字体名搜索"/>
              
        </template>
        <el-table
            :data="torderlist"
            height="250"
            border
            style="width: 100%">
            <el-table-column prop="id" label="序号" align="center" sortable width="180">
            </el-table-column>
            <el-table-column prop="create_at" label="日期" align="center" sortable>
            </el-table-column>
            <el-table-column prop="name" label="字体名称" align="center">
            </el-table-column>
            <el-table-column prop="platform" align="center" label="厂商">
            </el-table-column>
            <el-table-column prop="phone" align="center" sortable label="账号">
            </el-table-column>
            <el-table-column prop="ip" align="center" label="执行设备ip">
            </el-table-column>
            <!-- <el-table-column
            align="right">

            </el-table-column> -->

        </el-table>
        </div>
  
        
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';
import { TIFlist,TIFSearch } from '../../api/autopay'; 
export default {
    name: 'autopay',
    data() {
        return {
            torderlist:  [],
            fontname:"",
        }
    },
    mounted:function () {
        this.TIF()
    },
    methods: {
        TIF(){
            let par = {"pagesize":1000,"name":this.fontname};
            TIFlist(par).then(res => {
                let { code, msg, data } = res;
                if (code == 200) {
                    this.torderlist = data;
                    this.$message(data);
                }else{
                  this.$message.error(data);
                }
                }).catch( () => {
                    this.$message.error("数据请求失败");
                });
        },
        TIFSearch(){
            let par = {"pagesize":1000,"name":this.fontname};
            TIFSearch(par).then(res => {
                let { code, msg, data } = res;
                if (code == 200) {
                    this.torderlist = data;
                    this.$message(data);
                }else{
                  this.$message.error(data);
                }
                }).catch( () => {
                    this.$message.error("数据请求失败");
                });
        },
        
    }//methods

}
</script>