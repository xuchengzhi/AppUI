<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card kjfs">
          <p class="title"><i class="fa fa-cogs fa-lg"></i>服务</p>
          <ul>

            <!-- <li><router-link to="/addArticle" class="kjfs kjfs-bluee" disabled><span><i class="el-icon-tickets fa-2x"></i></span><span>Adb服务</span></router-link></li> -->
            <li>
              <a @click="Adb" class="kjfs kjfs-bluee">
              <span>
              <i class="el-icon-tickets fa-2x"></i></span>
              <span>Adb服务
              </span>
              </a>
            </li>

            <li>
              <a @click="Atx" class="kjfs kjfs-pinkk">
              <span><i class="fa fa-hand-stop-o fa-2x"></i></span>
              <span>Atx服务</span>
              </a>
            </li>

            <li><a href="/task" class="kjfs kjfs-yelloww" ><span><i class="fa fa-universal-access fa-2x"></i></span><span>定时任务</span></a></li>
          </ul>
          <ul>
            <li><router-link to="/appupload" class="kjfs kjfs-grennn"><span><i class="fa fa-cloud-upload fa-2x"></i></span><span>app上传</span></router-link></li>
            <li><router-link to="/AddCard" class="kjfs kjfs-purplee" ><span><i class="fa el-icon-bank-card fa-2x"></i></span><span>添加充值卡</span></router-link></li>
            <li><router-link to="/markdown" class="kjfs kjfs-lightBluee" disabled><span><i class="fa fa-file-code-o fa-2x"></i></span><span>编辑器</span></router-link></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card dbsx">
          <p class="title"><i class="fa fa-file-text-o"></i>自动化测试</p>
          <ul>
            <li><router-link to="#"><span>接口数</span><span class="num">66</span></router-link></li>
            <li><router-link to="#"><span>bug数</span><span class="num">66</span></router-link></li>
          </ul>
          <ul>
            <li><router-link to="#"><span>项目</span><span class="num">66</span></router-link></li>
            <li><router-link to="#"><span>脚本</span><span class="num">66</span></router-link></li>
          </ul>
        </div>
      </el-col>
      
      <el-col :span="8">
        <div class="card kjfs">
          <p class="title"><i class="fa fa-server fa-lg"></i>自动化脚本</p>
          <ul>
            <!-- <AutoPay></AutoPay> -->
            <li><router-link to="/autopay" class="kjfs kjfs-bluee"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>购买字体</span></router-link></li>
            <li><router-link to="/map" class="kjfs kjfs-pinkk"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>地图</span></router-link></li>
            <li><router-link to="/autopay" class="kjfs kjfs-yelloww"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>购买字体</span></router-link></li>
            <!-- <li><router-link to="/dragTabe" class="kjfs kjfs-pinkk"><span><i class="fa fa-hand-stop-o fa-2x"></i></span><span>拖拽排序</span></router-link></li>
            <li><router-link to="/pagePermissions" class="kjfs kjfs-yelloww"><span><i class="fa fa-universal-access fa-2x"></i></span><span>权限测试</span></router-link></li> -->
          </ul>
          <ul>
            <!-- <li><router-link to="/upload" class="kjfs kjfs-grennn"><span><i class="fa fa-cloud-upload fa-2x"></i></span><span>文件上传</span></router-link></li>
            <li><router-link to="/navClassifies" class="kjfs kjfs-purplee"><span><i class="fa el-icon-menu fa-2x"></i></span><span>前台菜单</span></router-link></li>
            <li><router-link to="/markdown" class="kjfs kjfs-lightBluee"><span><i class="fa fa-file-code-o fa-2x"></i></span><span>编辑器</span></router-link></li> -->
            <li><router-link to="/autopay" class="kjfs kjfs-grennn"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>购买字体</span></router-link></li>
            <li><router-link to="/autopay" class="kjfs kjfs-purplee"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>购买字体</span></router-link></li>
            <li><router-link to="/autopay" class="kjfs kjfs-lightBluee"><span><i class="el-icon-shopping-bag-2 fa-2x"></i></span><span>购买字体</span></router-link></li>
          </ul>
        </div>
      </el-col>
      <!-- <el-col :span="8">
        <div class="card bbxx">
          <p class="title"><i class="fa fa-server"></i>版本信息</p>
          <div class="table">
            <p><span class="tit">当前版本</span>v1.0.0</p>
            <p><span class="tit">基于框架</span>vue2.0全家桶 + element-ui</p>
            <p><span class="tit">主要特色</span>单页面 / 响应式 / 无限级菜单 / 权限管理 / 极简</p>
            <p><span class="tit">获取渠道</span>
                <span class="gitbox">
                  <a target="_blank" href="https://github.com/Nirongxu/vue-xuAdmin.git"><el-button type="primary" icon="el-icon-download" size="small">github</el-button></a>
                  <a target="_blank" href="https://gitee.com/nirongxu/xu-webplatform.git"><el-button type="primary" icon="el-icon-download" size="small">码云</el-button></a>
                </span>
            </p>
          </div>
        </div>
      </el-col> -->
    </el-row>
    
    <el-row>
      <el-col :span="24">
        <!-- <line-echarts id="lineEcharts" height="300px" ref="echarts"></line-echarts> -->
        <Maps></Maps>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="24">
        <maintable id="maintable"></maintable>
      </el-col>
    </el-row> -->
    <TIFOrder></TIFOrder>
    <Order></Order>
    <float-icons padding="10 10 60 10" class="icons-warp">
    <div class="float-icon-item">
    <img src="../img/phone.png" alt="" @click="handleIcons('home')">
    <span>查看</span>
    </div>
    </float-icons>
  </div>


  
</template>

<script>
import FloatIcons from '../s-icons'
import TIFOrder from '../AutoPay/TIFOrder';
import Order from '../AutoPay/Order';
import LineEcharts from '../../components/ECharts/lineEcharts'
import Maintable from '../table/maintable'
import AutoPay from '../AutoPay/index'
import Maps from '../map/Map'
import axios from 'axios';
import { device,act_run,orders,devupdate,atx,adb } from '../../api/autopay';
export default {
  data(){
    return {
      nickname:sessionStorage.nickname.replace("\"","").replace("\"",""),
    }
  },
  name: 'mainIndex',
  components: {Maintable, LineEcharts,AutoPay,Maps,TIFOrder,Order,'float-icons': FloatIcons,},
  mounted () {
    this.selfAdaption()
  },
  methods: {
    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    },
    handleIcons(router) {
      console.log('router', router)
      // this.$router.push(router)
    },
    Adb(){
      adb().then(res => {
        let { code, msg, data } = res;
        if (code != 200) {
          this.$message.error(data);
        }else{
          this.$message("在线设备："+data);
        }
      })
      
    },
    Atx(){
      atx().then(res => {
        let { code, msg, data } = res;
        if (code != 200) {
          this.$message.error(data);
        }else{
          this.$message(data);
        }
      })
      
    }
  }
}
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
  %shadow{
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 90px;
          min-width: 90px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
  #lineEcharts{
    margin-#{$top}: 30px;
    padding-#{$top}: 30px;
    @extend %shadow;
  }
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
  .icons-warp {
    border-radius: 25px;
    .float-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 3px;
    }
    span {
      font-size: 9px;
      color: #666666;
    }
  }
}
</style>
