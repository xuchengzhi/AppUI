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
            <!-- <div style="margin-left:10%">
            <el-button style="margin-left:10px;" size="small" type="success" @click="submitUpload">
            上传到服务器
            </el-button>
            </div> -->
            </ul>
          </el-col>
          <el-col :span="8" class="kjfs kjfs-bluee" style="background-color:#388CBE;height:500px;margin-right:1%;width:400px">
            <ul>
            测试
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
          </el-col>
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
export default {
  name: 'appupload',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      centerDialogVisible:false,
      disabled: false,
    };
  },
  methods: {
  handleRemove(file) {
    console.log(file);
  },
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
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
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
</style>

