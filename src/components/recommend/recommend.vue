<template>
  <div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in banner" :key=item.imageUrl ><img :data-src=item.imageUrl class="banner swiper-lazy"></swiper-slide>
    <div class="swiper-pagination banner__dot"></div>
  </swiper>
  <div class="songtitle">推荐歌单 ></div>
  <div class="songList">
  <div class="songList__song" v-for="item in songList" :key=item.picUrl >
    <div>
    <img v-lazy="item.picUrl" class="songList__img" alt="歌单背景图">
    <div class="songList__text">{{item.name}}</div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  mounted () {
    this.getBanner()// 获取轮播图数据
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
          type: 'bullets',
          clickable: true
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 2
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
    getBanner () {
      this.axios.get('http://localhost:3000/banner').then(response => {
        this.banner = [...response.data.banners]
      })
    },
    getSongList () {
      this.axios.get('http://localhost:3000/personalized').then(response => {
        this.songList = [...response.data.result]
      })
    }
  },
  beforeDestroy () {
  }
}

</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.banner
  width 90%
.swiper-container
  text-align center
  margin 15px 0
.banner__dot
  position absolute
  top 80%
  left 50%
  transform translate(-50%,-50%)
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
  width 30%
  padding 10px 0 0 10px
.songList__img
  width 100%
  border-radius 5px
</style>
