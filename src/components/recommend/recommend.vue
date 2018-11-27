<template>
  <div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item ,index) in picArray" :key=index @click="picBanner">I'm Slide 1</swiper-slide>
  </swiper>
    <div @click="picBanner">888</div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import jquery from 'jquery'
export default {
  mounted () {
  },
  data () {
    return {
      picArray: [1, 2, 3, 4],
      swiperOption: {
        notNextTick: false,
        autoplay: 3000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    picBanner () {
      console.log('2')
      jquery.ajax({
        url: 'localhost:3000/banner',
        type: 'get',
        data: '',
        success (data) {
          console.log(data)
        }
      })
    }
  }
}

</script>
<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
