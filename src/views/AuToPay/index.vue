<template>
  <el-container>
  <el-header>购买字体</el-header>
  <!-- <el-aside width="200px">
    <iframe v-show="show" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto :src="ip" style="width: 450px;height: 800px;">
  </iframe>
  </el-aside> -->
  <el-main style="margin-top:10%">
      <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card kjfs" style="margin-right:2px;background-color: rgba(233, 238, 243, 0.23);">
          <p class="title">在线设备</p>
          <el-row>
            <el-col :span="10" v-for="(item,index) in dev" >
              <el-card style="margin-right:5px">
                <img :src="item.img" class="image">
              </el-card>
              <div style="padding: 2px;">
                  <div>
                  <!-- <span>设备名称：{{item.name}}</span>
                  <span>设备型号：{{item.mod}}</span>
                  <span>设备ip：{{item.ip}}</span>
                  <span>设备电量：{{item.level}}</span> -->
                  </div>
                  <div class="bottom clearfix">
                    <!-- <el-button @click="actRun">运行</el-button> -->
                  </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card dbsx" style="margin-right:2px;background-color: rgba(233, 238, 243, 0.23);">
          <!-- <p class="title">&nbsp</p> -->
              <div>
              <el-button @click="actRun">运行</el-button>
              <div>
              <el-button @click="DeviceUp">设备更新</el-button>
              </div>
              <div>
              <el-radio v-model="apps" label="oppo">oppo</el-radio>
              <el-radio v-model="apps" label="huawei">华为</el-radio>
              </div>
              <el-dialog
                  title="实时显示"
                  :visible.sync="centerDialogVisible"
                  center>
                  <!-- <span>需要注意的是内容是默认不居中的</span>
                  <span slot="footer" class="dialog-footer">
                    
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                  </span> -->
                  <div>
                  <iframe v-show="centerDialogVisible" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto :src="url" style="width: 450px;height: 800px;">
                  </iframe>
                  <div>
                  {{res}}
                  </div>
                  </div>
                  <div>
                    
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                  </div>
                </el-dialog>
              <!-- <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-fade-in-linear">
                      
                </transition> -->
              <!-- <div v-show="show" class="transition-box">
              </div> -->

              <!-- </div> -->
        </div>
        </div>
      </el-col>
      <el-col :span="8">

        <div class="card kjfs">
          <p class="title">&nbsp</p>
          
        </div>
      </el-col>
    </el-row>
  </div>
  </el-main>

  </el-container>


  

</template>

              
<script>
import axios from 'axios';
import { device,act_run,orders,devupdate,atx,adb } from '../../api/autopay';
// import loading from 'loading'
export default {
    name: 'home',
    data() {
        return {
            dev: [],
            show: false,
            loadshow: true,
            url: "",
            ip: "",
            res: "",
            apps: 'oppo',
            centerDialogVisible: false,
            
        }
    },
    // components: {loading},
    mounted:function () {
        
        // if (this.timer){
        //     clearInterval(this.timer);
        // }else{
        //    this.timer = setInterval(()=>{
        //     this.DeviceUp();
        //    },100000); 
        // }
        this.GetDevice()
        
    },
    methods: {
        GetDevice() {
            device().then(res => {
              let { code, msg, info } = res;
              
              if (info.length == 0) {
                this.$message("无在线设备，请确认设备已连接");
              }
              if (code == 200){
                // this.loadshow = false;

                this.dev = info;
              }
              
            });
        },
        actRun() {
            this.centerDialogVisible = true;
            this.res = "";
            

            if (this.dev.length >0) {
              for (var i = this.dev.length - 1; i >= 0; i--) {
                console.log(this.dev[i].Online);
                if (this.dev[i].Online == true && this.dev[i].name == this.apps ) {
                  this.url = "http://"+this.dev[i].ip+":7912/remote";
                  this.ip = this.dev[i].ip;
                  this.show = true;
                }
              }
              act_run(this.apps+"&"+this.ip).then(res => {
                let { code, msg, info } = res;
                this.res = info;
              }); 
            }
            else{
              this.$message.error("无在线设备，请确认设备已连接，点击更新设备按钮重新获取设备列表");
            }
        },
        DeviceUp(){
            devupdate().then(res => {
            });
            this.GetDevice();
        }
    }
}

</script>

<style>
  /*html, body {
    margin: 0;
    background-color: hsla(0,0%,100%,.9);
    width: 100%;
    height: 100%;
  }*/
  .el-header, .el-footer {
    background-color: rgba(87, 163, 243, 0.09);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /*background-color: rgba(233, 238, 243, 0.23);*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    background: url(../img/banner2.jpg)no-repeat center;
    background-size: cover;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
/*  #cols {
    background-color: rgba(233, 238, 243, 0.23);
  }*/
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
