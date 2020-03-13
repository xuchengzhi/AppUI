<template>
  <div width="200px" class="div1">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="二维码内容">
        <el-input v-model = "form.msg" :width = "100" ></el-input>
      </el-form-item>
      <el-form-item label="二维码前景色">
        <el-color-picker v-model="form.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="二维码背景色">
        <el-color-picker v-model="form.bcolor"></el-color-picker>
      </el-form-item>
      <el-form-item label="二维码名称">
      <el-input v-model = "form.name"></el-input>
      </el-form-item>
      <el-form-item label="二维码大小">
        <el-slider v-model="form.x" :min = "100" :max = "1000"></el-slider>
      </el-form-item>
    </el-form>
    <el-button @click="buildQr" >生成二维码</el-button>
    <el-dialog
      title="二维码预览"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-image
        style="width: 200px; height: 200px"
        :src="qrimg"
        fit="fill">
      </el-image>
      <div></div>
      <a class='download' :href='qrimg' download=""  title="下载二维码" style="margin-top: 10px">保存二维码</a>
    </el-dialog>
    
    
  </div>
      

</template>

<script>
import axios from 'axios'; 
import {GetQrcode} from '../../api/autopay'; 
export default {
    name: 'getQr',
    data() {
        return {
          form : {
            msg:"",
            color: "",
            bcolor: "",
            x: 0,
            y: 0,
            name: ""
          },
          inishow:false,
          dialogVisible: false,
          qrimg:""
        }
    },
    methods: {
      
      buildQr: function (f) {
        this.form.y = this.form.x
        console.log(this.form);
        
        GetQrcode(this.form).then(res => {
          let { code, msg, data } = res;
          console.log(data);
          if (code == 200) {
            this.qrimg = data;
            this.dialogVisible = true;
          }
        }).catch(() => {
          this.$message.error("数据请求失败");
        });

      }

      

    }

}
</script>

<style type="text/css">
  .div1{
    width: 600px;
    height: 500px;
    padding: 10px;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 10%;
  }
  .sub_button{
    margin-top: 10%;
  }
</style>
