<template>
    <div>
      <el-steps :active= "active" style = "padding: 30px;" align-center >
        <el-step title="填写生成文字" icon="el-icon-edit">
          
        </el-step>
        <el-step title="选择背景图" icon="el-icon-picture"></el-step>

        <el-step title="选择ttf" icon="fa fa-font"></el-step>
      </el-steps>

      <div width="200px" class="div1">
          <el-input v-model = "msg" placeholder="输入需要生成的文字内容" style = "width:200px" v-show = "imsg" clearable></el-input>
          <div class="block">
            <!-- <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker> -->
          </div>
          <el-upload class="upload-demo" 
            ref="uploadimg"
            action="/v1/photo/BuildCFont" 
            :auto-upload="false"  
            :http-request="uploadFile"
            clearFiles
            :on-preview="handlePreview" 
            accept=".png,.jpg,.jpeg" 
            :on-remove="handleRemove" 
            :file-list="fileList" 
            v-show = "input_p"
            v-loading = "is_loading">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              
              <el-tag v-show="uploadLogo=='1'" >上传中</el-tag>
              <el-tag v-show="uploadLogo=='2'" type="success">上传成功</el-tag>
              <el-tag v-show="uploadLogo=='3'" type="danger">上传失败</el-tag>
              <div slot="tip" class="el-upload__tip">请选择透明背景PNG图片</div>
          </el-upload>
          <el-upload class="upload-demo" 
            ref="upload" 
            action="/v1/photo/BuildCFont" 
            :auto-upload="false"  
            :http-request="uploadFile"
            clearFiles
            :on-preview="handlePreview" 
            accept=".ttf" 
            :on-remove="handleRemove" 
            :file-list="fileList" 
            v-show = "input_t"
            v-loading = "is_loading">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              
              <el-tag v-show="uploadLogo=='1'" >上传中</el-tag>
              <el-tag v-show="uploadLogo=='2'" type="success">上传成功</el-tag>
              <el-tag v-show="uploadLogo=='3'" type="danger">上传失败</el-tag>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-button class="sub_button" style="margin-left: 10px;" size="small" type="success" @click="submitUpload">{{b_msg}}</el-button>
      </div>
      <div class="thumb-img-list">
        <el-card :body-style="{ padding: '0px' }" v-show = "img_show">
          <img class="preview-img " :src="newimg" sizes="100,200">
        </el-card>
      </div>
    </div>
</template>

<!-- <el-upload class="upload-demo" 
ref="upload" 
action="/v1/photo/BuildCFont" 
:auto-upload="false"  
:http-request="uploadFile"
clearFiles
:on-preview="handlePreview" 
accept=".ttf,.png,.jpg,.jpeg" 
:on-remove="handleRemove" 
:file-list="fileList" 
v-loading = "is_loading">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">开始制作</el-button>
  <el-tag v-show="uploadLogo=='1'" >上传中</el-tag>
  <el-tag v-show="uploadLogo=='2'" type="success">上传成功</el-tag>
  <el-tag v-show="uploadLogo=='3'" type="danger">上传失败</el-tag>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload> -->



<script>
import axios from 'axios';
import { BuildCFont } from '../../api/autopay'; 
export default {
    name: 'CloudFont',
    data() {
        return {
          fileFormData: null, // 将要上传的formdata数据
          percentage: 0, // 存放上传百分比
          is_loading : false,
          imsg:true,
          input_p:false,
          input_t:false,
          img_show: false,
          color1: '#409EFF',
          active: 1,
          newimg: "static/CloudFont/new_1.png",
          fileData : new FormData(),
          fileList: [],
          b_msg: "下一步",
          msg: ""
        }
    },
    methods: {
      
      submitUpload: function () {
        if (this.active == 1){
          this.active = 2;
          this.imsg = false;
          this.input_p =true;
        }else if (this.active == 2){
          this.active = 3;
          this.input_p =false;
          this.input_t =true;
          this.b_msg = "开始制作";
          this.$refs.uploadimg.submit();
        }else{
          this.$refs.upload.submit();
          this.uploadLogo = "1";
          this.fileData.append("msg",this.msg)
          var that = this;
          this.is_loading = true
          axios.post("/v1/photo/BuildCFont",this.fileData,{ retryDelay: 8000 }).then(res => {
            let { code, msg, data } = res;
            if (data.code == 200){

              this.img_show = true;
              this.newimg = data.data;
              this.uploadLogo = "2";
            }
          }).catch(function(error) {
            console.log(error);
            this.$message.error("数据请求失败");
            this.uploadLogo = "3";
          });
          this.is_loading = false;
          this.fileData =  new FormData();
          this.active = 1;
          this.imsg = true;
          this.input_t = false;
          this.b_msg = "下一步";
          this.newimg = "";
        }
      },
      uploadFile(f){
        if (f.file.type === "image/png" || f.file.type ==="image/jpeg"){
          this.fileData.append( "img",f.file);
        }else{
          this.fileData.append( "ttf",f.file);
        }
      
        
      },
      handlePreview(file) {
        // body...
        console.log(file);
      },
      handleRemove(file) {
        // body...
      },
      handleSucess(file) {
        // body...
      },
      GetCFont(file){
        console.log(file);
        
        // this.$refs.upload.submit();
        
   
        // let par = {"ttf":this.form.ttf,"img":this.form.img,"msg":this.form.msg}
        // this.is_loading = true
        // BuildCFont(formData).then(res => {
        //   let { code, msg, data } = res;
        // }).catch(() => {
        //   this.$message.error("数据请求失败");
        // });
        // this.is_loading = false
      }

    }

}
</script>

<style type="text/css">
  .div1{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 10%;
  }
  .sub_button{
    margin-top: 10%;
  }
</style>
