<template>
  <el-container>
    <el-header>
      
    </el-header>
    <el-main>
      <div style="margin-left:10%;hight:100px;">
        <el-row :gutter="20">
          
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#F8BA0B;margin-right:1%;height:500px;width:400px">
            <ul>
            <el-upload
              class="upload-demo"
              :auto-upload="false"
              ref="upload"
              drag
              action="http://localhost/v1/app/fileup"
              :before-upload = "beforeAvatarUpload"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </ul>
          </el-col>
          <div v-for="(item,index) in applist">
            <router-link to="/appdetail/" class="kjfs kjfs-bluee" style="boder-top-left-radius：30px">{{item.url}}</router-link>
            <el-col :span="8" class="card kjfs" style="height:500px;margin-right:1%;margin-bottom:1%;width:400px;background-color:#DCDEE2;">
            <p class="title"><i class="fa fa-th-large el-icon-mobile-phone"></i>{{item.AppName}}</p>
            <ul class="kjfs kjfs-bluee">
            
            
            <li>
            <div>
              <img :src=" item.Img ">
            </div>
            <div style="margin-top:10%;margin-left:30%">
            <li><span>版本：</span> {{item.BuildNum}}</li>
            <li>
            包名：{{item.Name}}
            </li>
            <li>
              {{item.Describe}}
            </li>
            <li>
            版本：{{item.Version}}
            </li>

            <li>
            <i class="fa fa-th-large fa-tags"></i>
            <span>{{item.Types}}</span>
            </li>
            </div>
            
            </li>
            </ul>
          </el-col>
          </div>
<!--           <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;height:500px;margin-right:1%;width:400px">
            <ul>
            </ul>
          </el-col>
          <el-col :span="8" style="background-color:#388CBE;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;margin-top:1%;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;margin-top:1%;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;margin-top:1%;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;margin-top:1%;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;margin-top:1%;margin-right:1%;height:500px;width:400px">
            <ul>
            测试
            </ul>
          </el-col> -->
        </el-row>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
    
 



</template>

<script>
import axios from 'axios';
import { requestApplist } from '../../api/api';
export default {
  name: 'appupload',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      centerDialogVisible:false,
      disabled: false,
      applist:[],
    };
  },
  mounted:function () {
      this.apps();
  },
  methods: {
  handleRemove(file) {
    console.log(file);
  },
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  },
  apps() {
    requestApplist().then(res => {
          let { msg, code, data } = res;
          this.applist = data.List;
        });
  },
  handleDownload(file) {
    console.log(file);
  },
  submitUpload() {
    var status = this.$refs.upload.submit();
    this.$refs.data = "dddd";
    console.log(status);
  },goBack() {
    console.log('go back');
  },
  beforeAvatarUpload(file) {
      console.log("dddd"+file.type);
      // application/x-itunes-ipa
      const isApp = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isApp) {
        this.$message.error('只能上传apk和ipa文件');
      }
      return isApp;
    },
  }
}
</script>

<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  h3{
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  img{
    width: auto;
    height: auto;
    margin-bottom:1%;
    margin-top:10%;
    margin-left:40%;
    max-width: 50%;
    max-height: 50%; 
  }
  
</style>

