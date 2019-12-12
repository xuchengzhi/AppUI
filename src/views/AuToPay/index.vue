<template>
  <el-container>
  <!-- <el-header>购买字体</el-header> -->
  <!-- <el-aside width="200px">
    <iframe v-show="show" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto :src="ip" style="width: 450px;height: 800px;">
  </iframe>
  </el-aside> -->
  <el-main>
      <div >
      <el-row :gutter="20">
      <el-col :span="8">
      <p class="title">在线设备</p>
      <el-amap vid="amapDemo" :zoom="zoom" :center="center"></el-amap>
        <div class="card kjfs" style="margin-right:2px;background-color: rgba(233, 238, 243, 0.23);">
          
          <el-row style="height: 480px;">
            <el-col :span="10" v-for="(item,index) in dev" >
              
              <el-card style="margin-right:5px">
                <!-- <img :src="item.img" class="image"> -->
                <p>{{item.ip}}</p>
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
        <p class="title">执行脚本</p>
        <div class="card dbsx" style="height: 480px;margin-right:2px;background-color: rgba(233, 238, 243, 0.23);">
              <div style="text-align: center;">
              <div>
              <el-button @click="actRun" style="margin-top:100px">运行</el-button>
              <div>
              <el-button plain v-loading="loading" @click="DeviceUp" type="primary" style="margin-top:10%">设备更新</el-button>
              </div>
              <div>
              <el-button plain v-loading="loading" @click="Atx" type="primary" style="margin-top:10%">启动atx</el-button>
              </div>
              <div>
              <el-radio v-model="apps" label="oppo" style="margin-top:10%">oppo</el-radio>
              <el-radio v-model="apps" label="huawei" style="margin-top:10%">华为</el-radio>
              <el-radio v-model="apps" label="vivo" style="margin-top:10%">华为</el-radio>
              <div>
                <a :href="url" v-if="url != ''">查看实时页面</a>
              </div>
              </div>
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
        <p class="title">日志</p>
        
        <ul>

        <div class="card kjfs" style="margin-right:2px;background-color: rgba(233, 238, 243, 0.23);height: 480px;">
        <li>
          <div style="text-align: center;">
          <span id = "ms"></span>
          </div>
        </li>
        </div>
        </ul>
      </el-col>
    </el-row>
  </div>
  
  </el-main>
  

  </el-container>

</template>

              
<script>
import axios from 'axios';

import { device,act_run,orders,devupdate,atx,adb } from '../../api/autopay';
// import loading from '../views/loading'
export default {
    name: 'autopay',
    data() {
        return {
            dev: [],
            show: false,
            loadshow: true,
            url: "",
            ip: "",
            res: "",
            logip:"192.168.248.179",
            apps: 'oppo',
            centerDialogVisible: false,
            loading: false,
            
        }
    },
    // components: {
      
    // },//components
    mounted:function () {
        
        // if (this.timer){
        //     clearInterval(this.timer);
        // }else{
        //    this.timer = setInterval(()=>{
        //     this.DeviceUp();
        //    },100000); 
        // }
        this.GetDevice()
        this.getmyip()
        // this.ShowLog()
        
    },
    created(){
           //页面刚进入时开启长连接
            // this.initWebSocket()
    },
　　destroyed: function() {
　　　　//页面销毁时关闭长连接
　　　　this.websocketclose();
　　},
    methods: {
      initWebSocket(){ //初始化weosocket
          const wsuri = `ws://`+this.logip+`:8090/log`//这个地址由后端童鞋提供
          this.websock = new WebSocket(wsuri);
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onopen = this.websocketonopen;
          this.websock.onerror = this.websocketonerror;
          this.websock.onclose = this.websocketclose;
        },
        websocketonopen(){ //连接建立之后执行send方法发送数据
          this.websocketsend(this.user)
          // console.log(111);
        },
        websocketonerror(){//连接建立失败重连
          this.initWebSocket()
        },
        websocketonmessage(evt){
          let _this = this //数据接收

           
          var tmp = evt.data.replace(/\\/g,"%");
          var tmp1 = tmp.replace("[{","");
          var tmp2 = tmp1.replace("}]","");
          var str = tmp2.replace("%n","");
          document.getElementById('ms').innerText = unescape(str)+"\n";
          

          // if ( evt.data.indexOf("\\u") != -1) {
          //     document.getElementById('ms').innerText= this.Hanzi(evt.data);
          // }else{
          //     // console.log(evt.data);
          //     document.getElementById('ms').innerText= evt.data;
          // }
          
        },
        websocketsend(Data){//数据发送
          this.websock.send(Data)
        },
        websocketclose(e){  //关闭
          // console.log('断开连接', e)
        },
        GetDevice() {
            device().then(res => {
              let { code, msg, data } = res;
              console.log(data);
            
              if (code == 200){
                  if (data != undefined && data.length == 0) {
                  this.$message("无在线设备，请确认设备已连接");
                  }
                // this.loadshow = false;
                this.dev = data;
              }else{
                this.$message(data);
              }
              
            }).catch( () => {
                    this.$message.error("数据请求失败");
                });;
        },
        getmyip(){
          var os = require('os'), ipaddress = '', ifaces = os.networkInterfaces() // 获取本机ip
          this.$message(ifaces);
          out:
          for (var i in ifaces) {
            for (var j in ifaces[i]) {
              var val = ifaces[i][j]

              if (val.family === 'IPv4' && val.address !== '127.0.0.1') {
                ipaddress = val.address
                break out
              }
            }
          }
          // module.exports = ipaddress
          
          
        },
        actRun() {
            
            this.res = "";
    

            if (this.dev!=undefined && this.dev.lenth != 0) {
              
              for (var i =  0; i < this.dev.length; i++) {
                if (this.dev[i].Online == true) {
                  if (this.apps == "huawei" &&  (this.dev[i].name == this.apps || this.dev[i].name == "HONOR")){
                    this.url = "http://"+this.dev[i].ip+":7912/remote";
                    this.ip = this.dev[i].ip;
                  }else if (this.dev[i].name.toLowerCase() == this.apps){
                    this.url = "http://"+this.dev[i].ip+":7912/remote";
                    this.ip = this.dev[i].ip;
                  }
                  
                  
                }
              }
              if(this.ip != ""){
                this.show = true;
                this.centerDialogVisible = true;
                let par = {"app":this.apps,"ip":this.ip };
                act_run(par).then(res => {
                let { code, msg, data } = res;
                this.res = data;
                console.log(data);
                if (code != 200) {
                  this.$message.error(data);
                  this.show = false;
                  this.centerDialogVisible = false;
                }

                }
                ).catch( () => {
                    this.$message.error("数据请求失败");
                });;
              }else{

                this.$message.error(this.apps+"无在线设备");
              }
              
            }
            else{
              this.$message.error("无在线设备，请确认设备已连接，点击更新设备按钮重新获取设备列表");
            }
        },

        Hanzi(msg) {
          msg = msg.split("\\u");
          var str ='';
        
          for(var i=0;i<msg.length;i++){
            console.log(msg[i]+"\n");
            str+=String.fromCharCode(parseInt(msg[i],16).toString(10));
              
          } 

          return str+"\n";
        },
        Atx(){
          this.loading = true;
          atx().then(res => {
            let { code, msg, data } = res;
            if (code == 200) {
              this.$message(data);
              this.GetDevice();
            }else{
              this.$message.error(data);
            }
          }).catch( () => {
                    this.$message.error("数据请求失败");
                });;
          
          
          this.loading = false;
        },
        
        DeviceUp(){
          this.loading = true;
          devupdate().then(res => {
            let { code, msg, data } = res;
            if (code == 200) {
              this.$message("设备信息已更新");
            }else{
              this.$message.error(data);
            }
          }).catch( () => {
                    this.$message.error("数据请求失败");
                });;
          
          this.GetDevice();
          this.loading = false;
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
    line-height: 400px;
  }
/*  
 .el-main {
    background-color: rgba(233, 238, 243, 0.23);
    color: #333;
    text-align: center;
    line-height: 160px;
  }*/
  
/*  body > .el-container {
    margin-bottom: 40px;
    background: url(../img/banner2.jpg)no-repeat center;
    background-size: cover;
  }
*/
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
