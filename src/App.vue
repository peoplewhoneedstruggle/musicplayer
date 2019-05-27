<template>
  <div id="app">
    <transition >
      <div class="header" v-show="this.$route.meta.show">
        <m-header ></m-header>
        <tab ></tab>
      </div>
    </transition>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  },
  data () {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true
        },
        scrollPanel: {},
        rail: {},
        bar: {}
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height 100%
html,body
  height 100%
</style>
