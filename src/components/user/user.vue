<template>
  <div  id="user">
    <div class="topBackground"></div>
    <img lazyload="auto" src="../../common/image/login.png" alt="登录背景图片" class="lgoinImg">
    <div class="welcomeWord">
      Hello,
    </div>
    <div class="loginInput">
      <el-button size="medium" round class="loginInBtn" @click='login'>登录</el-button>
      <el-button size="medium" round class="signInBtn">注册</el-button>
    </div>
    <router-link to="/recommend">
      <div class="visitor">
        游客试用
      </div>
    </router-link>
    <div class="buttomBtn">
      <div v-for="item in loginList" class="iconfont" :class="item" :key ="item"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginList: ['icon-weixin', 'icon-weibo', 'icon-QQ', 'icon-wangyi']
    }
  },
  mounted () {
  },
  methods: {
    login () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style lang="stylus" scoped>
.topBackground{
  background-image linear-gradient(to right,#FF6362,#FF8064)
  height 4.15rem
}
.lgoinImg{
  width 100%
  display block
}
.welcomeWord{
  background-color white
  font-size 3.5rem
  color black
  height 4rem
  padding-left 1rem
  font-weight bold
  color #333
}
.loginInput{
  text-align center
  background-color white
}
.loginInBtn,
.signInBtn{
  width 20rem
  margin 1rem 0
  box-shadow 10px 10px 10px #333
  font-size 20px
}
.buttomBtn{
  display flex
  position fixed
  bottom 0
  width 100%
  background-color white
}
.buttomBtn div{
  width 25%
  text-align center
  height 6rem
  line-height 6rem
  color #ff6362
  font-size 3.5rem
}
.icon-weixin{
  font-size 16px
}
.visitor{
  background-color white
  width 100%
  text-align center
  color #333
  height 10rem
  padding-top 1rem
  text-decoration underline
  font-size 0.8rem
}
</style>
