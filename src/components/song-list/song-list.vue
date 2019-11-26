<template>
  <div id="songList">
    <transition >
    <div  class="parent-dom" v-show="toggleShow">
      <vue-scroll :ops="ops"
        @refresh-activate="handleActivate"
        @refresh-start="handleStart"
        @refresh-before-deactivate="handleBeforeDeactivate"
        @refresh-deactivate="handleDeactivate"
      >
        <div v-for="songList in userSongList" :key=songList.name>
          <div class="songList" @click="getSongListDetail(songList.id)"> {{songList.name}} </div>
        </div>
      </vue-scroll>
    </div>
    </transition>
    <transition enter-class="enterClass" enter-to-class="enterToClass" enter-active-class="animated active"
                  >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userSongList: [],
      ops: {
        vuescroll: {
          mode: 'slide',
          sizeStrategy: 'percent',
          detectResize: true,
          pullRefresh: {
            enable: true,
            tips: {
              deactive: '下拉刷新',
              active: '松手刷新',
              start: '同步中...',
              beforeDeactive: 'Refresh Successfully!'
            }
          }
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {},
        bar: {}
      }
    }
  },
  methods: {
    getUserSongList () {
      if (this.global.userId) {
        this.axios.get(`${this.global.myUrl}/user/playlist?uid=${this.global.userId}`).then(response => {
          this.userSongList = response.data.playlist
        })
      } else {
        this.$router.push({path: '/user'})
      }
    },
    getSongListDetail (songListId) {
      this.$router.push({path: `/song-list/${songListId}`})
    },
    handleActivate (vm, refreshDom) {
    },
    handleStart (vm, refreshDom, done) {
      this.getUserSongList()
      setTimeout(() => {
        done() // 不调用done不会进行到下一阶段
      }, 2000)
    },
    handleBeforeDeactivate (vm, refreshDom, done) {
      done()
    },
    handleDeactivate (vm, refreshDom) {
    }
  },
  computed: {
    toggleShow: function () {
      return this.$route.meta.show
    }
  },
  mounted () {
    this.getUserSongList()
  }

}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
#songList
  height 100%
.songList
  height 3rem
  line-height 3rem
  padding 0 0 0 2rem
</style>
