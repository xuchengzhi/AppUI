<template>
  <div width="200px" class="div1">
    <el-upload
      class="upload-demo"
      drag
      accept = ".html,.HTML"
      action="/v1/transfer/HtmlToIni"
      :on-success = "uploadSuccess"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传HTML文件</div>
    </el-upload>
    <a class='download' :href='htmls' download=""  title="下载" v-show="inishow" style="margin-top: 10px">下载INI</a>
  </div>
      

</template>

<script>
import axios from 'axios'; 
export default {
    name: 'getQr',
    data() {
        return {
          htmls: "", // 将要上传的formdata数据
          inishow:false
        }
    },
    methods: {
      
      saveFile: function () {
        // window.location.href = this.htmls;
        window.open(this.htmls);
        // this.saveFile(htmls);
      
      },
      uploadSuccess: function (f) {
        this.htmls = f.data;
        this.inishow = true;

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
