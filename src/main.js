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
import global from 'common/js/globalVariable'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
// 配置全局变量
Vue.prototype.global = global
// vue 图片懒加载配置项
Vue.use(VueLazyload, {
  preLoad: 1,
  error: '',
  loading: loadingImg,
  attempt: 1
})
// axios 配置项
Vue.use(VueAxios, axios)

Vue.use('https://at.alicdn.com/t/font_1504263_coegsrt4stj.css')
// vue 滚动条配置项
Vue.use(vuescroll, {
  // 在这里设置全局默认配置
  ops: {
    vuescroll: {
      mode: 'slide',
      sizeStrategy: 'percent',
      detectResize: true
    },
    scrollPanel: {},
    rail: {},
    bar: {}
  },
  name: 'vueScroll' // 在这里自定义组件名字，默认是vueScroll
})
Vue.use(animate)
fastclick.attach(document.body)

/* eslint-disable */
var vm=new Vue({
    el: '#app',
    render: h => h(App),
    router
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //用户没登录就跳转到登录页面
    if (to.meta.title==="歌单页面"&&!vm.global.userId) {
      vm.$router.push({path:"/user"})
    }
    document.title = to.meta.title
    next()
  }
})