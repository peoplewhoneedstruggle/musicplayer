<template>
  <div id="login">
    <div class="topTitle">
      邮箱登录
    </div>
    <div class="loginInput">
      <el-input v-model="userName" placeholder="请输入账号">
       <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      <el-input v-model="password" placeholder="请输入密码" show-password>
       <i slot="prefix" class="el-input__icon el-icon-edit"></i>
      </el-input>
    </div>
    <div class="loginBtn">
    <el-button size="medium" round class="loginInBtn" @click='login'>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      clickFlag: false
    }
  },
  methods: {
    login () {
      this.axios.get(`${this.global.myUrl}/login?email=${this.userName}&password=${this.password}`).then(response => {
        if (response.status === 200) {
          this.axios.get(`${this.global.myUrl}/user/detail?uid=${response.data.account.id}`).then(userInfo => {
            this.global.userId = response.data.account.id
            console.log(userInfo)
          })
          this.$message({
            message: '登录成功',
            type: 'success',
            center: true,
            duration: 2000
          })
          this.clickFlag = true
          this.$router.push({path: '/recommend'})
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning',
            center: true,
            duration: 2000
          })
        }
      })
    },
    theottle (fn) {
      this.clickFlag = true
      return function () {
        if (!this.clickFlag) {
          return void 0
        }
        this.clickFlag = false
        setTimeout(() => {
          fn.apply(this, arguments)
          this.clickFlag = true
        }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.topTitle{
  text-align center
  height 3rem
  line-height 3rem
  background-color red
}
.loginInput{
  width 70%
  margin 0 auto
}
.el-icon-user-solid,
.el-icon-edit{
  font-size 1.5rem
}
.loginInBtn{
  width 20rem
  margin 1rem 0
  box-shadow 10px 10px 10px #333
  font-size 20px
}
.loginBtn{
  text-align center
}
</style>
