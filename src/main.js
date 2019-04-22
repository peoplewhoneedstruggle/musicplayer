import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import jquery from 'jquery'
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'
import loadingImg from '../src/common/image/default.png'
// Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: '',
  loading: loadingImg,
  attempt: 1
})
Vue.use(VueAxios, axios)
Vue.prototype.$ = jquery
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