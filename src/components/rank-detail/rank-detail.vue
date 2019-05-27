<template>
  <div id="rankDetail">
    <!-- <transition> -->
      <!-- <div class="tnt" @click="go" leave-class="leaveClass" leave-to-class="leaveToClass" leave-active-class="animated bounceOutRight">666</div> -->
    <!-- </transition> -->
    <div class="header">
      <p><i>&lt;</i></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    go: function () {
      this.$router.push({path: `/rank`})
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
#rankDetail
  height 100%
.header
  height 2.5rem
  padding 1rem 2rem
// .leaveClass
//   opacity 1
//   transform translateX(100%)
// .leaveToClass
//   opacity 0
//   transform translateX(0%)
// .leaveActiveClass
//   transform all 300ms cubic-bezier(0.000, 0.000, 0.580, 1.000)
</style>
