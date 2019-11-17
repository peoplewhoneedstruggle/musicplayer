<template>
  <div id="rankDetail">
    <!-- <transition> -->
      <!-- <div class="tnt" @click="go" leave-class="leaveClass" leave-to-class="leaveToClass" leave-active-class="animated bounceOutRight">666</div> -->
    <!-- </transition> -->
    <div class="header">
      <p @click="back"><i>&lt;</i></p>
    </div>
    <div class="songList">
      <div v-for="(song,index) in songList" :key=song.id class="songItem">
        <div class="songIndex">{{index+1}}</div>
        <div class="songText">
        <p class="songName">{{song.name}}</p>
        <div class="songTitle">
          <p class="singer">{{song.ar[0].name}}</p>
          <p class="album">{{"—— "+song.al.name}}</p>
        </div>
        </div>
        <div @click="playMusic(song.id)">
          <i class="iconfont icon-bofang" ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      songList: []
    }
  },
  mounted () {
    this.getSongList()
  },
  methods: {
    go: function () {
      this.$router.push({path: '/rank'})
    },
    back () {
      this.$router.go(-1)
    },
    getSongList () {
      this.axios.get(`${this.global.myUrl}/playlist/detail?id=${this.$route.params.id}`).then(response => {
        console.log(response)
        this.songList = [...response.data.playlist.tracks]
      })
    },
    playMusic (songId) {
      this.$router.push({path: `/play-page/${songId}`})
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable';
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
.songItem
  width 100%
  height 2rem
  padding 0.5rem
  text-align left
  border 1px solid white
  line-height 2rem
  display flex
.songText
  margin -0.25rem 0 -0.25rem 1rem
  width 80%
.songName
  height 1.5rem
  line-height 1.5rem
  max-width 85%
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.songTitle
  margin-top -0.5rem
  display flex
  max-width 90%
  line-height 0.5rem
  white-space nowrap
.songIndex
  width 1rem
.singer
  max-width 30%
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  font-size 0.5rem
  height fit-content
  max-height 1.5rem
  line-height 1.5rem
.album
  max-width 70%
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
  height fit-content
  max-height 1.5rem
  line-height 1.5rem
  font-size 0.5rem
  margin-left 1.5rem
.icon-bofang
  font-size 1.5rem
  color $wy-red
</style>
