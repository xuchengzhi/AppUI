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

                <template slot-scope="scope">
                    {{scope.row.ip}}
                  <!--   <a :href= "'http://'+scope.row.ip+':7912'" target="">实时查看执行过程</a> -->
                  
                  <el-button @click="ActShow(scope.row.ip)">实时查看执行过程</el-button>

                </template>
            </el-table-column>
            <!-- <el-table-column
            align="right">

            </el-table-column> -->

        </el-table>
        <el-dialog
          title="实时监控"
          :visible.sync="dialogVisible"
          width="30%">
            <iframe :src="showip" ref="ifrmid" value ="ifrmid" name="ifrmname" id="ifrmid" style="width: 448px;height: 850px;"></iframe>
            <el-button type="success" icon="el-icon-check" circle @click="iReload"></el-button>
        </el-dialog>
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
            showip: "",
            dialogVisible: false,
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
        ActShow(ip){
            this.showip = "http://"+ip+":7912/remote";
            
            this.dialogVisible = true;
        },
        iReload(){
            console.log(this.$refs);
            console.log(this.$refs.ifrmid.src.substring(0,20));
            // this.showip = this.$refs.ifrmid.src.split(":")+"?time=12328"

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