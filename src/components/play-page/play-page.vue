<template>
  <div id="playPage">
    <vue-scroll :ops="ops">
    <div class="topBlock">
      <i  @click="back" class="iconfont icon-fanhui back"></i>
      <div class="authorList">
        <div>{{songData.name}}</div>
        <div v-for="author in songData.author" class="author" :key=author.name>{{author.name}}</div>
      </div>
    </div>
    <div class="mainContent">
      <img class="imgCover" :class="{trans:isPlay}" :src="songData.imgCover" alt="专辑封面图片">
    </div>
    <div class="bottomButtons">
      <div class="bottomIcons" @click="toggleCollect"><i class="iconfont icon-favor-active collect" :class="{isCollect:isCollected}"></i></div>
      <div class="bottomIcons"><i class="iconfont icon-pinglun comment"></i></div>
    </div>
    <div class="playButton">
      <audio class="audioPlay" :src="songData.songUrl" autoplay controls
        controlsList="nodownload"
        ref="audio"
        @pause="onPause"
        @play="onPlay"
      ></audio>
    </div>
    </vue-scroll>
  </div>
</template>

<script>
import eventBus from '../event-bus/event-bus'
export default {
  data () {
    return {
      songId: '',
      ops: {
        vuescroll: {
          mode: 'slide',
          sizeStrategy: 'percent',
          detectResize: true
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {},
        bar: {}
      },
      songData: {
        id: '',
        name: '',
        imgCover: '',
        author: '',
        album: '',
        publishTime: 0,
        songUrl: ''
      },
      isPlay: false, // 是否播放的标识
      isCollected: false
    }
  },
  computed: {
  },
  created () {
    var _this = this
    eventBus.$on('song', function (songData) {
      _this.initData(songData)
      _this.axios.get(`${_this.global.myUrl}/song/url?id=${_this.songData.id}`).then(response => {
        console.log(response.data)
        _this.songData.songUrl = response.data.data[0].url
      })
    })
  },
  mounted () {
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    // 初始化数据
    initData (songData) {
      this.songData.name = songData.name
      this.songData.id = songData.id
      this.songData.imgCover = songData.al.picUrl
      this.songData.album = songData.al.name
      this.songData.author = songData.ar
      this.songData.publishTime = songData.publishTime
    },
    // 播放音频
    play () {
      this.$refs.audio.play()
    },
    // 暂停音频
    pause () {
      this.$refs.audio.pause()
    },
    // 当音频播放
    onPlay () {
      this.isPlay = true
    },
    // 当音频暂停
    onPause () {
      this.isPlay = false
    },
    toggleCollect () {
      if (!this.isCollected) {
        if (!this.global.userId) {
          this.$message({
            message: '请先登录',
            type: 'warning'
          })
        } else {
          this.axios.get(`${this.global.myUrl}/like?id=${this.songData.id}`).then(response => {
            console.log(response)
            this.$message({
              message: '已收藏',
              type: 'success'
            })
            this.isCollected = !this.isCollected
          })
        }
      } else {
        this.$message({
          message: '已取消收藏',
          type: 'info'
        })
      }
    }
  },
  beforeDestroy () {
    eventBus.$off('song', this.handle)
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus" >
.topBlock
  display flex
  align-items center
.back
  width 20%
  padding 1rem 0 0 1rem
.authorList
  width 60%
  text-align center
  padding 1rem 0 0 0
.mainContent
  width 100%
  text-align center
  margin 5rem 0 0 0
.imgCover
  border-radius 50%
  width 80%
.author
  font-size 0.75rem
.trans
  display inline-block
  width 80%
  height 100%
  border 0.3rem solid rgba(51,51,51,0.25)
  border-radius  50%
  overflow  hidden
  animation  rotate 25s linear infinite;
@keyframes rotate
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
.bottomButtons
  display flex
  margin-top 2rem
  justify-content space-around
.bottomIcons
  width 2rem
  height 1.5rem
  text-align center
.playButton
  margin-top 1rem
.audioPlay
  width 100%
.collect
  color #333
  opacity 0.8
  line-height 1.5rem
.comment
  opacity 0.8
  line-height 1.5rem
.isCollect
  color red
</style>
