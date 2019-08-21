<template>
    <el-container>
    <el-header>
      <loading v-show="loadshow" style="color: #161B29;"></loading>
    </el-header>
    <el-main>
      <div style="margin-left:10%;hight:100px;">
        <el-row :gutter="20">
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#F8BA0B;margin-right:1%;height:500px;width:400px">
            <ul>
                <iframe v-show="show" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto :src="ip" style="width: 450px;height: 800px;">
                </iframe>
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#F8BA0B;margin-right:1%;height:500px;width:400px">
            <ul>
            <div>
                    <el-button @click="Run">Click Me</el-button>

                    <a href="/loading">loading</a>
                    <div style="display: flex; margin-top: 20px; height: 100px;">
                      <transition name="el-fade-in-linear">
                            
                      </transition>
                    <div v-show="show" class="transition-box">
                    </div>
                    </div>
            </div>
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#F8BA0B;margin-right:1%;height:500px;width:400px">
            <ul>
            </ul>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="12"><div class="grid-content"></div></el-col>
        </el-row>
        </div>

        </el-main>
    </el-container>
                
</template>
        

               
                

                


                
 
                


<script>
import axios from 'axios';
import { device,oppo,huawei,devupdate,atx,adb } from '../api/api';
import loading from '../views/loading'
export default {
    name: 'home',
    data() {
        return {
            dev: [],
            show: false,
            loadshow: true,
            ip: "",
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
        // this.GetDevice()
        
    },
    methods: {
        GetDevice() {
            device().then(res => {
              let { code, msg, info } = res;
              this.dev = info;
              this.ip = "http://"+info[0].ip+":7912/remote";
              console.log(this.ip);
              if (code == 200){
                this.loadshow = false;
              }
              
            });
        },
        Run() {
            this.show = true;
            // atc().then(res => {
            //   // let { code, msg, info } = res;
            //   // this.dev = info;
            // });
        },
        DeviceUp(){
            devupdate().then(res => {
            });
        }
    }
}

</script>

<style>
  
</style>