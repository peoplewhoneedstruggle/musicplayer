<template>
  <div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item ,index) in banner" :key=index ><img :src=item.imageUrl class="banner"></swiper-slide>
    <div class="swiper-pagination banner__dot"></div>
  </swiper>
  <div class="songtitle">推荐歌单 ></div>
  <div class="songList">
  <div class="songList__song" v-for="(item, index) in songList" :key=index >
    <div>
    <img :src="item.picUrl" class="songList__img" alt="歌单背景图">
    <div class="songList__text">{{item.name}}</div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  mounted () {
    this.Banner()// 获取轮播图数据
    this.getSongList()
  },
  data () {
    return {
      banner: [],
      songList: [],
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false},
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        grabCursor: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    Banner () {
      var _this = this
      axios.get('http://localhost:3000/banner').then(response => {
        _this.banner.splice(0, 0, ...response.data.banners)
      })
    },
    getSongList () {
      var _this = this
      this.$.ajax({
        url: 'http://localhost:3000/personalized',
        type: 'get',
        data: '',
        success (data) {
          _this.songList.splice(0, 0, ...data.result)
          _this.songList.splice(9)
        }
      })
    }
  },
  beforeDestroy () {
  }
}

</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.banner
  width 100%
.banner__dot
  top 80%
  left 50%
  margin-left -32px
.swiper-pagination-bullet
  margin 0 5px
.songtitle
  margin 5px 0 0 5px
.songList
  display flex
  width 100%
  flex-wrap wrap
.songList__text
  max-height 3rem
  text-align center
.songList__song
  width 30.5%
  padding 10px 0 0 5px
.songList__img
  width 100%
</style>
