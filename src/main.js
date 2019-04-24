import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'
import loadingImg from '../src/common/image/default.png'
import vuescroll from 'vuescroll'
import animate from 'animate.css'
// Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
// vue 图片懒加载配置项
Vue.use(VueLazyload, {
  preLoad: 1,
  error: '',
  loading: loadingImg,
  attempt: 1
})
// axios 配置项
Vue.use(VueAxios, axios)
// vue 滚动条配置项
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'slide',
      sizeStrategy: 'percent',
      detectResize: true
    },
    scrollPanel: {},
    rail: {},
    bar: {}
  }, // 在这里设置全局默认配置
  name: 'vueScroll' // 在这里自定义组件名字，默认是vueScroll
})
Vue.use(animate)
fastclick.attach(document.body)

/* eslint-disable */
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})