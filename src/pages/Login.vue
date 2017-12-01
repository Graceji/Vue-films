<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">用户登录</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login-ruleForm">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from '../data'
export default {
  data () {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          { required: true, validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 进行登录接口的请求
          login(this.ruleForm.username, this.ruleForm.pass)
            .then(res => {
              if (res === '用户名不存在' || res === '登录密码错误') {
                this.$message({
                  message: res,
                  type: 'warning'
                })
              } else {
                this.$message({
                  message: res,
                  type: 'success'
                })
                setTimeout(() => {
                  this.$router.push('/')
                }, 3000)
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .login {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-image: url(../assets/imgs/loginBack.jpeg);
    background-size: cover;
    padding-top: 50px;
    .el-card {
      width: 600px;
      margin: 0 auto;
      .el-card__header {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 5px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      }
    }
    .el-form-item__content {
      text-align: center;
      button {
        width: 200px
      }
    }
  }
</style>
