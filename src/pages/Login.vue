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
import Api from '../data'
import { mapMutations } from 'vuex'
import * as types from '../store/mutation-type'
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
    // ...mapMutations([`user/${types.SETUSERNAME}`]),
    ...mapMutations('user', [types.SETLOGINSTATUS]),
    async login (username, pass) {
      // 进行登录接口的请求
      const data = await Api.login(username, pass)
      return data
    },
    warning (msg, type) {
      this.$message({
        message: msg,
        type
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.ruleForm.username, this.ruleForm.pass)
            .then(res => {
              if (res.status === 0) {
                this.warning('登录成功', 'success')
                // this[`user/${types.SETUSERNAME}`]({userName: this.ruleForm.username})
                this[types.SETLOGINSTATUS]({userName: this.ruleForm.username, isLogin: true})
              } else if (res.status === 1) {
                this.warning('用户名不存在', 'warning')
              } else {
                this.warning('登录密码错误', 'warning')
              }
            })
          setTimeout(() => {
            this.$router.push('/home/videos/all')
          }, 3000)
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
