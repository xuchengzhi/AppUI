<template>
  <el-container>
    <el-main>

    <div style="background-image:url('static/img/test.png');height: 500px;width: 758px;margin-left:30%">
      <div style="height:10px">
        
      </div>
      <div class="div1">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="充值卡号">
      <div class="form1">
        <el-input
          v-model="CardNum"
          placeholder="请输入充值卡号"
          prop="CardNum"
          clearable
        >
        fdfdf</el-input>
      </div>
      </el-form-item>
      <el-form-item label="充值密码">
      <div class="form1">
        <el-input placeholder="请输入密码" v-model="CardPwd" show-password clearable></el-input>
        </div>
      </el-form-item>
      <el-form-item label="金额">
      <div class="form1">
        <el-input
          placeholder="请输入金额"
          v-model="Money"
          clearable>
        </el-input>
      </div>
      </el-form-item>
    </el-form>
    </div>
        <el-button @click="AddCard" class="card">添加</el-button>
    </div>
    
        

    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';
import { addcard } from '../../api/autopay'; 
export default {
    name: 'autopay',
    data() {
        return {
            CardNum: "",
            CardPwd: "",
            Money: "",
            restaurants: [],
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            }
        }
    },
    methods: {
        AddCard () {
            let par = {"CardNum":this.CardNum,"CardPwd":this.CardPwd,"Money":this.Money}

            if (this.CardNum === "" ||this.CardPwd === "" || this.Money === "" ) {
              this.$message.error("充值卡、密码、金额不能为空");
            }else{
                addcard(par).then(res => {
                let { code, msg, data } = res;
                if (code == 200) {
                  this.$message(data);
                  this.GetDevice();
                }else{
                  this.$message.error(data);
                }
                }).catch( () => {
                    this.$message.error("数据请求失败");
                });
        }
            
        }
    }//methods
}  
</script>

<style>
  .form1 {
    text-align: center;
    width: 200px;
  }
  .div1 {
    margin-top: 10%;
    margin-left:30%;
  }
  .card {
    margin-left: 48%;
    margin-top: 25px;
  }
</style>