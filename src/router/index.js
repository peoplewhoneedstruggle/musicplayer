import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/song-list/song-list'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: '',
    component: Recommend
  },
  {
    path: '/song-list',
    name: '',
    component: Singer
  },
  {
    path: '/rank',
    name: '',
    component: Rank
  },
  {
    path: '/search',
    name: '',
    component: Search
  }
  ]
})
