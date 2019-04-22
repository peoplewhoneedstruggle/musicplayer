<template>
  <div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in banner" :key=item.imageUrl >
      <img :data-src=item.imageUrl class="banner swiper-lazy">
    </swiper-slide>
    <div class="swiper-pagination banner__dot"></div>
  </swiper>
  <div class="songtitle">推荐歌单 ></div>
  <div class="songList">
  <div class="songList__song" v-for="item in songList" :key=item.picUrl >
      <div class="songList__listens">{{fomate(item.playCount)}}</div>
    <img v-lazy="item.picUrl" class="songList__img" alt="歌单背景图" @click="getListDetail(item.id)">
    <div class="songList__text">{{item.name}}</div>
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
          disableOnInteraction: false
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true
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
  computed: {

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
    },
    fomate (number) {
      if (number > 10000) {
        return ((number | 0) + '').slice(0, -4) + '万'
      }
    },
    getListDetail (id) {
      this.$router.push({path: `/recommend/${id}`})
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
  text-align center
.songList__song
  width 30%
  padding 10px 0 0 10px
  position relative
.songList__img
  width 100%
  border-radius 5px
.songList__listens
  position absolute
  top 1.2rem
  right 0.4rem
  font-size 10px
  color #f1f1f1
</style>
<style lang="stylus" rel="stylesheet/stylus">
.my-bullet
  margin 0 5px
  width 8px
  height 8px
  display inline-block
  border-radius 100%
  background #fff
  opacity 1
.my-bullet-active
  background red
</style>
