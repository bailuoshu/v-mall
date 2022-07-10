<template>
  <div>
    <div>
      <el-form
        ref="formRef"
        :model="loginForm"
        :rules="loginRules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="uid">
          <el-input type="text" v-model="loginForm.uid" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" />
        </el-form-item>

        <el-button type="primary" @click="submitForm('formRef')">Primary</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    const uidPass = (rule,value,callback)=>{
      const reg = /^[1-9][0-9]{8}$/
      if (!value.match(reg)) {
        callback(new Error('您的用户ID为9位数字组成，请输入正确ID'))
      } else {
        callback()
      }
    }
    const pswPass = (rule,value,callback)=>{
      const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{8,16}$/
      if (!value.match(reg)) {
        callback(new Error('密码格式错误，请重新输入'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        uid: "123456789",
        password: "password123",
      },
      loginRules:{
        uid:[
          { required: true, message:'请输入用户ID',trigger:'blur' },
          { validator: uidPass,trigger: "blur",required: true, }
        ],
        password:[
          { required: true, message:'请输入密码',trigger:'blur' },
          { validator: pswPass,trigger: "blur",required: true, }
        ],
        code:[]
      }
    };
  },
  created() {},
  methods: {
    submitForm(formRef) {
      this.$refs[formRef].validate().then(() => {
        if(this.loginForm.uid == "123456789" && this.loginForm.password == "password123"){
          console.log("登录成功")
          this.$message({
            message:"登录成功",
            type:"success",
            duration:1000
          });
          this.$router.push('/')
        }else{
          this.$message({
            message:"密码错误！请重新输入",
            type:"error",
            duration:800
          });
          this.loginForm.password = "";
        }
      }).catch(e => {
        return false
      })
    }
  }
};
</script>
<style scoped>
</style>