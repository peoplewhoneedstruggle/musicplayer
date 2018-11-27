import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import jquery from 'jquery'
// Vue.config.productionTip = false
import 'common/stylus/index.styl'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ = jquery
window.jquery = window.$ = jquery
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
